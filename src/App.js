
import React from "react";
import './App.css';
import emojipedia from "./emojipedia";
import Emojis from "./components/Emojis";

// 1 create entry component
// 2 create props to replace hardcode Data
// 3 import the emojipedia
// 4 map through emojipedia array and render entry component 


function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">
       {emojipedia.map(item => <Emojis key={item.id} emoji={item.emoji} name={item.name} description={item.meaning}/>)}
      </dl>
    </div>
  );
}

// truncate string
console.log(emojipedia.map(item => item.meaning.substring(0,20)));

export default App;
