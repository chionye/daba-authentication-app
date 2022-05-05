import Axios from 'axios';

module.exports = function () {
    Axios.create({
        baseURL: 'http://localhost:4000/'
    });
};