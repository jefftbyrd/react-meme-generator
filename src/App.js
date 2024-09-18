import './App.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [topTextInput, setTopTextInput] = useState('');
  const [bottomTextInput, setBottomTextInput] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('ugandanknuck');

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Meme Generator</h1>
        <form
          className="userInput"
          onSubmit={(event) => {
            event.preventDefault();
            setTopTextInput(topTextInput);
            setBottomTextInput(bottomTextInput);
          }}
        >
          <div>
            <label htmlFor="topTextInput">Top text </label>
            <input
              value={topTextInput}
              id="toptextInput"
              onChange={(event) => setTopTextInput(event.currentTarget.value)}
            />
            {/* <button>Submit</button> */}
          </div>

          {/* <div>
            <Fetch />
          </div> */}

          <div>
            <label htmlFor="bottomTextInput">Bottom text </label>
            <input
              value={bottomTextInput}
              id="bottomTextInput"
              onChange={(event) =>
                setBottomTextInput(event.currentTarget.value)
              }
            />
            {/* <button>Submit</button> */}
          </div>

          <div>
            <label htmlFor="memeTemplate">Meme template </label>
            <input
              value={memeTemplate}
              id="memeTemplate"
              onChange={(event) => setMemeTemplate(event.currentTarget.value)}
            />
            {/* <button>Submit</button> */}
          </div>
        </form>

        {/* <div className="readOut">
          <h4>Read-out</h4>
          <p>Log Top: {topTextInput}</p>
          <p>Log Bottom: {bottomTextInput}</p>
        </div> */}

        <div id="memeArea">
          <img
            // src={`https://api.memegen.link/images/${memeTemplate}/${topTextInput}/${bottomTextInput}.png?height=450&width=450`}
            src={`https://api.memegen.link/images/ugandanknuck.png`}
            data-test-id="meme-image"
          />
        </div>
      </header>
    </div>
  );
}
