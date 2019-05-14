import axios from 'axios';

const KEY = 'AIzaSyAbb2niP7uBZNuyEYrXjE5E3h1cPNSobdk';
const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
        part: 'snippet',
        maxResults: 25,
        q: 'surfing'

    },
    headers: {
        Authorization: 'Client-ID dd310449052c5386feb5b27def6ad7115bc63a4808c1490624fed9b4c083b9a5'
    }
});

export default youtube;