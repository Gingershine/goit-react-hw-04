import axios from 'axios';
 
axios.defaults.baseURL = 'https://api.unsplash.com';
// axios.defaults.headers.common['Authorization'] = 'Client-ID Sutydj1T35CniTGuzyBONubxGK6Q83QuE5gDMNUCKJg';
const API_KEY = 'Sutydj1T35CniTGuzyBONubxGK6Q83QuE5gDMNUCKJg'

const fetchImagesByName = async (query) => {
    const data = axios.get(`search/photos?client_id=${API_KEY}&query=${query}`);
    return data;
  
}

export default fetchImagesByName;