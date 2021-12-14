import axios from 'axios';
import { GOOGLE_SE, BING_SE } from '../constants';

const {
    REACT_APP_RAPID_KEY,
    REACT_APP_RAPID_GOOGLE_SEARCH,
    REACT_APP_RAPID_GOOGLE_BASEURL,
    REACT_APP_RAPID_GOOGLE_HOST,
    REACT_APP_RAPID_BING_SEARCH,
    REACT_APP_RAPID_BING_BASEURL,
    REACT_APP_RAPID_BING_HOST,
} = process.env;

const googleConfig = {
    baseUrl: REACT_APP_RAPID_GOOGLE_BASEURL,
    headers: {
        'x-rapidapi-host': REACT_APP_RAPID_GOOGLE_HOST,
        'x-rapidapi-key': REACT_APP_RAPID_KEY
    }
};

const bingConfig = {
    baseUrl: REACT_APP_RAPID_BING_BASEURL,
    headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': REACT_APP_RAPID_BING_HOST,
        'x-rapidapi-key': REACT_APP_RAPID_KEY
    }
};

const googleInstance = axios.create(googleConfig);
const bingInstance = axios.create(bingConfig);

const searchByGoogle = (searchText) => {
    const options = {
        params: {
            hl: 'en',
            gl: 'us',
            q: searchText,
        },
    };

    return new Promise((resolve, reject) => {
        googleInstance.get(REACT_APP_RAPID_GOOGLE_BASEURL + REACT_APP_RAPID_GOOGLE_SEARCH, options)
            .then(response => resolve({
                webPages: response.data.organic,
                videos: response.data.videos,
                pagination: response.data.pagination,
                totalResults: response.data.totalResults,
            }))
            .catch(error => reject(error))
    });
};

const searchByBing = (searchText, resultsCount = 10, offset = 0) => {
    const options = {
        params: {
            q: searchText,
            mkt: 'en-us',
            safeSearch: 'Off',
            textFormat: 'Raw',
            count: resultsCount,
            offset
        },
    };

    return new Promise((resolve, reject) => {
        bingInstance.get(REACT_APP_RAPID_BING_BASEURL + REACT_APP_RAPID_BING_SEARCH, options)
            .then(response => {
                const webPages = response.data.webPages.value.map(webPage => {
                    return {
                        id: webPage.id,
                        title: webPage.name,
                        url: webPage.url,
                        snippet: webPage.snippet,
                    }
                });

                resolve({
                    webPages,
                    totalResults: response.data.webPages.totalEstimatedMatches
                })
            })
            .catch(error => reject(error))
    });
};

export const search = (searchText, searchEngine) => {
    if (searchEngine === GOOGLE_SE) {
        return new Promise((resolve, reject) => {
            searchByGoogle(searchText)
                .then(response => resolve(response))
                .catch(error => reject(error));
        });
    } else if (searchEngine === BING_SE) {
        return new Promise((resolve, reject) => {
            searchByBing(searchText)
                .then(response => resolve(response))
                .catch(error => reject(error));
        });
    } else {
        return new Promise((resolve, reject) => {
            Promise.all([searchByGoogle(searchText), searchByBing(searchText)])
                .then(response => {
                    const resp = {
                        ...response[0],
                        ...response[1],
                        webPages: response[0].webPages.concat(response[1].webPages),
                        totalResults: response[0].totalResults + response[1].totalResults,
                    };
                    resolve(resp)
                })
                .catch(error => reject(error));
        });
    }
};
