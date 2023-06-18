import './App.css';
import './components/ShazamSearch';
import './components/genres';
import './components/songs'
import axios from 'axios'



const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/shazam-events/list',
  params: {
    artistId: '73406786',
    l: 'en-US',
    from: '2022-12-31',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


function App() {

  
  return (
    <div className="App">

    </div>
  );
}

export default App;
