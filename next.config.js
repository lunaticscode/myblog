require('dotenv').config();

const setApiUrl = ( mode ) => {
    const mapModeToApiUrl = {
        LOCAL: "http://localhost:3000/api",
        STAGE: "http://3.36.124.157/api"
    }
    return mapModeToApiUrl[mode];
} 

module.exports = {
    env: {
        MODE: process.env.MODE,
        API_URL: setApiUrl(process.env.MODE),
    }
}