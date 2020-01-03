import React from 'react';
import './App.css';
import './CharacterWithHook';
import CharacterWithHook from "./CharacterWithHook";
import CharacterWithHOC from "./CharacterWithHOC";
import CharacterWithRender from "./CharacterWithRender";

function App() {
  return (
    <div className="App">
      <h1>Characters</h1>
      {/*<CharacterWithHook/>*/}
      {/*<CharacterWithHOC/>*/}
      <CharacterWithRender/>
    </div>
  );
}

export default App;
