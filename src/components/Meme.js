import React from 'react';

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1bij.jpg',
  });

  const [memes, setMemes] = React.useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  function getMemeImage() {
    const randomNum = Math.floor(Math.random() * memes.length);
    const url = memes[randomNum].url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  React.useEffect(function () {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className="form-button">
          Get new meme image 🖼
        </button>
      </div>
      <div className="meme-image-div">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
