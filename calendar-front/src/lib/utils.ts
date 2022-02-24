export const utils = {
    SECRET_KEY: process.env.REACT_APP_SECRET_KEY || process.env.SECRET_KEY,
    TOKEN_NAME: process.env.REACT_APP_TOKEN_NAME || process.env.TOKEN_NAME,
    API_URI: process.env.REACT_APP_API_URI || process.env.API_URI,
    API_VERSION: process.env.REACT_APP_API_VERSION || process.env.API_VERSION,
    API_PREFIX: process.env.REACT_APP_API_PREFIX || process.env.API_PREFIX,
}

export const URI = `${utils.API_URI}/${utils.API_PREFIX}/${utils.API_VERSION}`;