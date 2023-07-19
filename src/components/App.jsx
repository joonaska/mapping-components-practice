import React from "react";

/* importataan kortti elementti */
import Card from "./Card";
/*importataan data */
import emojipedia from "../emojipedia";
/*luodaan functio joka luo kortteja datasta */
function createCard(emoji) {
  return (
    <Card
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}
/* luodaan js mappi metodilla kortteja, näin olleen voidaan lisätä vaan dataan tietoa ja uusi kortti syntyy */
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
