const protocol = window.location.protocol;
const hostname = window.location.hostname;

// let API_base = `${protocol}//${hostname}:5005/`; // for development
let API_base = `${protocol}//${hostname}/`; // for production

const API_paths = {
    contact: 'contact/',
    tracking: 'tracking/'
};

const buildURL = (path) => {
    'use strict';
    return API_base + API_paths[path];
}
