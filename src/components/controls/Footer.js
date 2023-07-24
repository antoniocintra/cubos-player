import { useRef } from 'react'; 
import playIcon from '../../assets/play.svg';
import pauseIcon from '../../assets/pause.svg';
import nextIcon from '../../assets/next.svg';
import previousIcon from '../../assets/previous.svg';
import stopIcon from '../../assets/stop.svg';
import './style.css';

export default function Controls({
  audioRef,
  actualMusic,
  musicBtn,
  setMusicBtn,
  handleChangeMusic,
}) {
  const progressRef = useRef(null);
  const progressIntervalRef = useRef(null); 

  function playPause() {
    if (audioRef.current.paused) {
      
      progressIntervalRef.current = setInterval(() => {
        const totalTime = audioRef.current.duration / 60;
        const currentProgress =
          (audioRef.current.currentTime / 60) * 100 / totalTime;

        progressRef.current.style.width = `${currentProgress}%`;
      }, 1000);

      audioRef.current.play();
      setMusicBtn('pause');
    } else {
      clearInterval(progressIntervalRef.current); 
      audioRef.current.pause();
      setMusicBtn('play');
    }
  }

  function stop() {
    setMusicBtn('play');
    clearInterval(progressIntervalRef.current); 
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  return (
    <div className='footer-controls'>
      <div className='music-names'>
        <h2>{actualMusic.title}</h2>
        <span>{actualMusic.artist}</span>
      </div>
      <div className='music-container'>
        <div className='icons'>
          <img
            className='music-icons'
            src={stopIcon}
            alt='button to play music'
            onClick={() => stop()}
          />
          <img
            className='music-icons'
            src={previousIcon}
            alt='button to play music'
            onClick={() => handleChangeMusic('previous')}
          />
          <img
            className='play'
            src={musicBtn === 'play' ? playIcon : pauseIcon}
            alt='button to play or pause music'
            onClick={() => playPause()}
          />
          <img
            className='music-icons'
            src={nextIcon}
            alt='button to play music'
            onClick={() => handleChangeMusic('next')}
          />
        </div>

        <div className='timeline'>
            <span className='left-span'>1.45</span>
          <div className='div-bar'>
            <div className='progress-bar'></div>
            
            <div className='color-progress' ref={progressRef}>

            </div>
          </div>
          <span className='right-span'>3.34</span>
        </div>
      </div>
    </div>
  );
}
