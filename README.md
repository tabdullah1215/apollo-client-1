

## Apollo Client

This project demonstrates multiple implementations of Apollo Client in React.

### import necessary libraries
npm install apollo-boost graphql react-apollo

### initialize client instance

**import apollo client from apollo boost**<br>
```js
import ApolloClient from 'apollo-boost';
```

**instantiate client object**<br>
```js
const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql/',
});
````

### set query constant using gql literal template function

**import gql literal template function**<br>
```js
import { gql } from 'apollo-boost';
```

**set constant**<br>
```js
const GET_CHARACTERS = gql`
    query getCharacters {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`;
```

### implementation of render props method
Query component takes query attribute which is set to the gql constant.
this passes gql props to the render props function in the this.props.children context
as loading, error and data<br>

**import Query component from react-apollo**
```js
import { Query } from 'react-apollo';
```

**render Query component with query attribute set to constant**<br>
```js
<Query query={GET_CHARACTERS}>
```
**add render props function as this.props.children of Query**
```js
{({loading, error, data}) => {
```
**map over data prop to render items**
```js
{data.characters.results.map(character => (
```

### implementation of hooks method
useQuery hook takes gql constant and returns loading, error and data 
which are destructured and used to render data collection<br>

**import useQuery hook from react-apollo**<br>
```js
import { useQuery } from 'react-apollo';
```
**pass gql constant to useQuery and destructure the needed gql props**
```js
const { loading, error, data } = useQuery(GET_CHARACTERS);
```
**map over data prop to render items**
```js
{data.characters.results.map(character => (
```
### implement HOC method
withApollo HOC passes the client instance to the wrapped component.  The client
instance can then call its query method passing the gql constant, which returns 
a promise that resolves into the requested data collection that can be set to state
then mapped over in the return call

**import withApollo from react-apollo**
```js
import { withApollo } from 'react-apollo';
```

**deconstruct client instance passed into wrapped component**
```js
function CharacterWithHOC({client}) {
```

**initialize empty state**
```js
const [characters, setCharacters] = useState([]);
```

**call client's query method passing gql constant**
```js
client.query({ query: GET_CHARACTERS })
```

**get promise that resolves to data, then set data to state**
```js
.then(res => setCharacters(res.data.characters.results))
```
**map over state to render**
```js
{characters.map(character => (
```
