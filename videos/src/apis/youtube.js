import axios from 'axios';

const KEY = 'AIzaSyAuU580xFLX47u67UqbqteYJV-wy6Vx1IA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});