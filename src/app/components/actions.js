import { browserHistory } from 'react-router';
export const LOADING_DATA = 'LOADING_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const DATA_ERROR = 'DATA_ERROR';
export const RESET_ERROR = 'RESET_ERROR';

export function receiveData(data) {
    return {
        type: RECEIVE_DATA,
        data
    };
}

export function loadingData() {
    return {
        type: LOADING_DATA
    };
}

export function dataError() {
    return {
        type: DATA_ERROR
    };
}

export function resetError() {
    return {
        type: RESET_ERROR
    };
}

export function fetchData(query) {
    return dispatch => {
        return fetch(query)
            .then(dispatch(loadingData()))
            .then(response => {
                if (response.status >= 200 && response.status < 304) {
                    return response.json();
                } else {
                    dispatch(dataError());
                }
            })
            .then(json => {
                if (json && !json.error) {
                    dispatch(receiveData(json));
                    console.log('data: ', json);
                    // Route to...
                    browserHistory.push('/home');
                } else {
                    dispatch(dataError());
                }
            })
            .catch(error => {
                dispatch(dataError());
                console.log('Error: ' + error.message);
            });
    };
}

export function handleNav(page) {
    // Route to...
    if(page === 'home') {
        browserHistory.push('/');
    } else {
        browserHistory.push(`/${page}`);
    }
    
    return {
        type: 'NAVIGATE',
        data: page
    };
}
