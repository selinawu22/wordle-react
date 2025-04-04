const PORT = 4300
const WORD_LENGTH = 5;
const WORD_GEN_API_URL = `https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase`;
const WORD_CHECK_API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/getword', async (req, res) => {
    try {
        const response = await fetch(WORD_GEN_API_URL);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
})

app.get('/checkword', async (req, res) => {
    const w = req.query.word;

    if (!w) {
      return res.status(400).json({ error: 'Empty word' });
    }
    
    try {
      const response = await fetch(`${WORD_CHECK_API_URL}/${w}`);
      res.json(response.data);
    } catch (error) {
      console.error('Error checking word', error);
      res.status(500).json({ error: 'Failed to word validation data' });
    }
});

app.listen(4300, () => {console.log('listening on 4300')})