import { useState, useEffect } from 'react';
import Keypad from '../Keypad';
import WordGrid from '../WordGrid';
import FinishPage from './FinishPage';
import Logo from '../Logo';

const PORT = 4300;
const WORD_LENGTH = 5;
const EMPTY_WORD = '     '
const TOTAL_ATTEMPTS = 6;

const WORD_GEN_API_URL = `https://random-word-api.herokuapp.com/word?length=${WORD_LENGTH}`;
const WORD_CHECK_API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';
const SERVER_URL = `http://localhost:${PORT}`

let wordOfTheDay;


function GamePage({setPageState}) {
    const [attempts, setAttempts] = useState(0);
    const [wordGrid, setWordGrid] = useState(Array(TOTAL_ATTEMPTS).fill(EMPTY_WORD));
    const [word, setWord] = useState([]);
    const [keyColor, setKeyColor] = useState({});


    const gameOver = () => attempts === TOTAL_ATTEMPTS - 1;
    const gameWon = () => word === wordOfTheDay;
    const loadFinishPage = (text) => setPageState(<FinishPage setPageState={setPageState} text={text}/>);
    const greenKeyCheck = (i) => word[i] === wordOfTheDay[i];
    const modifyCurrentWord = (newWord) => setWordGrid(wordGrid.map((e, ind) => (ind !== attempts) ? e : newWord.padEnd(WORD_LENGTH, ' ')));
    

    // get 5 letter word via API
    useEffect(() => {getWord()}, []);

    const getWord = () => { 
      fetch(`${SERVER_URL}/getword`)
      .then((data) => {
        if (!data.ok) {
          console.error('Error getting data:')
        }
        return data.json()
      }).then((word) => {
        wordOfTheDay = word[0];
      })
      .catch((error) => {
          console.error('Error fetching data:', error)
          wordOfTheDay = "SMILE"
      });
    }

    // checks valid 5 letter word via API
    const checkValidWord = () => {
      return fetch(`${SERVER_URL}/checkword?word=${word}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('invalid word')
        }
      })
    }
    
    const processAttempt = () => {
      updateKeyColor();
      setAttempts(attempts + 1);
      setWordGrid(wordGrid.map((e, ind) => (ind !== attempts) ? e : word));
      setWord('');
    }

    const handleDeleteKey = () => {
      if (word.length > 0) {
        setWord(word.slice(0, -1));
        modifyCurrentWord(word.slice(0, -1));
      } else {
        applyRowShakeAnimation();
      }
    };


    const handleLetterKey = (w) => {
      if (word.length < WORD_LENGTH) {
        let newWord = word + w;
        setWord(newWord);
        modifyCurrentWord(newWord);
      }
    };

    const handleEnterKey = () => {
      if (word.length === WORD_LENGTH) {
        if (gameWon()) {
          loadFinishPage('Congratulations, you won!');
        } else if (gameOver()) {
          loadFinishPage(`Game over. The word was ${wordOfTheDay}`);
        } else {
          checkValidWord().then(processAttempt).catch(applyRowShakeAnimation);
        }
      } else {
        applyRowShakeAnimation();
      }
    };

    const updateKeyColor = () => {
      let newColor = {};
      for (let i = 0; i < word.length; i++) {
        if (greenKeyCheck(i)) {
          newColor[word[i]] = 'green';
        } else if (!keyColor[word[i]] && wordOfTheDay.includes(word[i])) {
          newColor[word[i]] = 'yellow';
        } else if (!keyColor[word[i]]) {
          newColor[word[i]] = 'grey';
        }
      }
      setKeyColor({ ...keyColor, ...newColor});
    }

    const handleKeyDown = (keyVal) => {
      switch (keyVal) {
        case 'Backspace':
          handleDeleteKey();
          break;
        case 'Delete':
          handleDeleteKey();
          break;
        case 'Enter':
          handleEnterKey();
          break;
        default:
          if (keyVal.match(/^[a-zA-Z]$/)) {
            handleLetterKey(keyVal.toLocaleUpperCase());
          }
      };

    }

    const applyRowShakeAnimation = () => {
      document.getElementById('currWordRow').classList.add('apply-shake');
    }
    
    // resets shake animation event listener + changes row based on attempt no
    useEffect(() => {
      const currWordRow = document.getElementById('currWordRow');
      const stopShakeAnimation = () => currWordRow.classList.remove('apply-shake');

      currWordRow.addEventListener('animationend', stopShakeAnimation);

      return () => currWordRow.removeEventListener('animationend', stopShakeAnimation);
    }, [attempts]);

    return (
      <div className="page flex" onKeyDown={(e) => handleKeyDown(e.key)} tabIndex="0">
        <Logo height='15vh'/>
        <WordGrid word={word} wordGrid={wordGrid} wordOfTheDay={wordOfTheDay} attempt={attempts}/>
        <Keypad keyColor={keyColor} setWord={handleKeyDown}/>
      </div>
    );
}

export default GamePage