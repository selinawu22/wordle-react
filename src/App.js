import './App.css';
import { useState } from 'react';
import Page from './components/pages/Page';
import HomePage from './components/pages/HomePage';

const WORD_LENGTH = 5;
const TOTAL_ATTEMPTS = 5;

function App() {
  const setPageStateHandler = (page) => setPageState(page);
  const [pageState, setPageState] = useState(<HomePage setPageState={setPageStateHandler}/>);

  return (
    <Page pageState={pageState} pageElement={pageState}/>
  )
}

export default App;
