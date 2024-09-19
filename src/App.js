import './App.css';
import { useState } from 'react';

// import MemeImage from './MemeImage';

function MemeImage(props) {
  let topTextOutput = `/${props.topText}`;
  let bottomTextOutput = `/${props.bottomText}`;
  let templateOutput = `/${props.template}`;
  if (!props.topText) {
    topTextOutput = '/ ';
  }
  if (!props.bottomText) {
    bottomTextOutput = '';
  }
  if (!props.template) {
    templateOutput = '';
  }

  return (
    <img
      // src={`https://api.memegen.link/images/${props.template}/${props.topText}/${props.bottomText}.png?height=450&width=450`}
      src={`https://api.memegen.link/images${templateOutput}${topTextOutput}${bottomTextOutput}.png?height=450&width=450`}
      alt="Here is an image!"
    />
  );
}

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
            setMemeTemplate(memeTemplate);
          }}
        >
          <div>
            <label htmlFor="topTextInput">Top text </label>
            <input
              // value={topTextInput}
              id="toptextInput"
              onChange={(event) => setTopTextInput(event.currentTarget.value)}
            />{' '}
          </div>

          <div>
            <label htmlFor="bottomTextInput">Bottom text </label>
            <input
              // value={bottomTextInput}
              id="bottomTextInput"
              onChange={(event) =>
                setBottomTextInput(event.currentTarget.value)
              }
            />
          </div>
          <div>
            <label htmlFor="memeTemplate">Meme template </label>
            <input
              // value={memeTemplate}
              id="memeTemplate"
              // onChange={(event) => setMemeTemplate(event.currentTarget.value)}
              onKeyDown={(event) =>
                event.key === 'Enter'
                  ? setMemeTemplate(event.currentTarget.value)
                  : null
              }
            />
          </div>
        </form>
        <div id="memeArea">
          <MemeImage
            template={memeTemplate}
            topText={topTextInput}
            bottomText={bottomTextInput}
          />
        </div>
        {/* <button type="button" onClick={(event) => }></button> */}
      </header>
    </div>
  );
}
