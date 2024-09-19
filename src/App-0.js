import './App.css';
import { useState } from 'react';

// import MemeImage from './MemeImage';

export function MemeImage(props) {
  return (
    <img
      src={`https://api.memegen.link/images/${props.template}/${props.topText}/${props.bottomText}.png?height=450&width=450`}
    />
  );
}

export default function App() {
  const [topTextInput, setTopTextInput] = useState('');
  const [bottomTextInput, setBottomTextInput] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');
  // const [imageUrl, setImageUrl] = useState(
  //   'https://api.memegen.link/images/ugandanknuck.png',
  // );
  // const imageUrl = `https://api.memegen.link/images/${memeTemplate}/${topTextInput}/${bottomTextInput}.png?height=450&width=450`;
  // let imageUrl = 'https://api.memegen.link/images/ugandanknuck.png';
  // if (topTextInput || bottomTextInput) {
  //   imageUrl = `https://api.memegen.link/images/ugandanknuck/${topTextInput}/${bottomTextInput}.png?height=450&width=450`;
  // } else if (memeTemplate) {
  //   imageUrl = `https://api.memegen.link/images/${memeTemplate}/${topTextInput}/${bottomTextInput}.png?height=450&width=450`;
  // } else {
  //   imageUrl = 'https://api.memegen.link/images/ugandanknuck.png';
  // }

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
          <MemeImage
            template={memeTemplate}
            topText={topTextInput}
            bottomText={bottomTextInput}
          />
        </div>
      </header>
    </div>
  );
}
