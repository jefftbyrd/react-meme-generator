import './App.css';
import { useState } from 'react';

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
      src={`https://api.memegen.link/images${templateOutput}${topTextOutput}${bottomTextOutput}.png?height=450&width=450`}
      alt="Your desired meme"
      id="memeId"
      data-test-id="meme-image"
    />
  );
}

const downloadMeme = () => {
  const memeUrl = memeId.getAttribute('src');
  const link = document.createElement('a');
  link.href = memeUrl;
  link.download = 'meme.png'; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

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
              id="topTextInput"
              onChange={(event) => setTopTextInput(event.currentTarget.value)}
            />{' '}
          </div>

          <div>
            <label htmlFor="bottomTextInput">Bottom text </label>
            <input
              id="bottomTextInput"
              onChange={(event) =>
                setBottomTextInput(event.currentTarget.value)
              }
            />
          </div>
          <div>
            <label htmlFor="memeTemplate">Meme template </label>
            <input
              id="memeTemplate"
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
        <button onClick={downloadMeme}>Download</button>
      </header>
    </div>
  );
}
