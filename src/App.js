import './App.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';

// Initialize the Meme URL and filename variables.
let memeUrl = '';
let memeFileName = '';

// Props function
function MemeImage(props) {
  let topTextOutput = `/${props.topText}`;
  let bottomTextOutput = `/${props.bottomText}`;
  let templateOutput = `/${props.template}`;

  // Adjust the URL in case the top or bottom text entry fields are empty.
  if (!props.topText) {
    topTextOutput = '/ ';
  }
  if (!props.bottomText) {
    bottomTextOutput = '';
  }
  if (!props.template) {
    templateOutput = '';
  }

  // Generate the Meme URL from props
  memeUrl = `https://api.memegen.link/images${templateOutput}${topTextOutput}${bottomTextOutput}.png`;

  // Clean up the filename replacing spaces with dashes
  memeFileName = `${props.template} ${props.topText} ${props.bottomText}.png`
    .trim()
    .replace(/\s+/g, '-');

  return (
    // Generate the Meme Image.
    <img
      src={memeUrl}
      alt={`Your requested meme, using the ${props.template} template with a top text of ${props.topText} and bottom text of ${props.bottomText}.`}
      data-test-id="meme-image"
    />
  );
}

export default function App() {
  // useState Functions
  const [topTextInput, setTopTextInput] = useState('');
  const [bottomTextInput, setBottomTextInput] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('nice');

  // Download the meme image using file-saver
  const downloadMeme = () => {
    saveAs(memeUrl, memeFileName);
  };

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
          <div
            style={{
              paddingBottom: '20px',
            }}
          >
            {/* Meme Template Input waits for user to hit the enter key. */}
            <input
              id="memeTemplate"
              onKeyDown={(event) =>
                event.key === 'Enter'
                  ? setMemeTemplate(event.currentTarget.value)
                  : null
              }
            />
            <label htmlFor="memeTemplate" style={{ fontWeight: '900' }}>
              Meme template
            </label>
          </div>
          <div>
            {/* Top Text Input */}
            <input
              id="topTextInput"
              onChange={(event) => setTopTextInput(event.currentTarget.value)}
            />
            <label htmlFor="topTextInput">Top text</label>
          </div>
          <div>
            {/* Bottom Text Input */}
            <input
              id="bottomTextInput"
              onChange={(event) =>
                setBottomTextInput(event.currentTarget.value)
              }
            />
            <label htmlFor="bottomTextInput">Bottom text</label>
          </div>
        </form>
        {/* Meme Image Area */}
        <div className="memeArea">
          <MemeImage
            template={memeTemplate}
            topText={topTextInput}
            bottomText={bottomTextInput}
          />
        </div>
        {/* Download Button */}
        <button className="download" onClick={downloadMeme}>
          Download
        </button>
      </header>
    </div>
  );
}
