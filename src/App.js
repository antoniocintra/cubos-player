import './App.css';
import { musics } from './musics';
import { useRef, useState } from 'react';
import Controls from './components/controls/Footer.js';
import Header from './components/Header.js';
import Card from './components/Card/Card.js';



function App() {

  const [musicsData] = useState([...musics]);
  const audioRef = useRef(null);
  const [musicBtn, setMusicBtn] = useState('pause');
  const [actualMusic, setActualMusic] = useState({ id: 0, title: '', artist: '' });


  function setMusic(musics) {
    setMusicBtn('play');
    audioRef.current.src = musics.url;
    setActualMusic(musics);
  }

  function handleChangeMusic(option) {
    if (!actualMusic.id) {
      return;
    }

    const nextMusicId = option === 'next'
      ? actualMusic.id + 1
      : actualMusic.id - 1;

    const anotherMusic = musicsData.find((musics) => musics.id === nextMusicId);
    if (!anotherMusic) {
      return;
    }

    setMusic(anotherMusic);
  }

  return (
    <div className="container">
      <Header />
      <main>
        <h1 className='playlist-title'>The best play list</h1>
        <div className='row'></div>
        <div className="cards">
          {musicsData.map((musics) => (
            <div onClick={() => setMusic(musics)}
              key={musics.id}>

              <Card title={musics.title} cover={musics.cover} description={musics.description} />
            </div>

          ))}
        </div>

      </main>
      <Controls audioRef={audioRef} actualMusic={actualMusic} musicBtn={musicBtn} setMusicBtn={setMusicBtn}
        handleChangeMusic={handleChangeMusic} />
      <audio ref = {audioRef} />
    </div >
  );
}

export default App;
