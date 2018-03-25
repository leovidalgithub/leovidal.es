const protocol = window.location.protocol;
const hostname = window.location.hostname;
const API_base = `${protocol}//${hostname}/`; // for both production & development (backend on port 80)

const API_paths = {
    contact: 'contact/',
    tracking: 'tracking/'
};

const buildURL = (path) => API_base + API_paths[path];
