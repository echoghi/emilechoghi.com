import { hashHistory } from 'react-router';
import ReactGA from 'react-ga';
export const LOADING_DATA = 'LOADING_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const DATA_ERROR = 'DATA_ERROR';
export const RESET_ERROR = 'RESET_ERROR';
export const RESET_FORM = 'RESET_FORM';
export const FORM_SUCCESS = 'FORM_SUCCESS';
export const FORM_ERROR = 'FORM_ERROR';
export const ACTIVATE_PAGE = 'ACTIVATE_PAGE';

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

export function resetForm() {
    return {
        type: RESET_FORM
    };
}

export function formSuccess() {
    return {
        type: FORM_SUCCESS
    };
}

export function formError() {
    return {
        type: FORM_ERROR
    };
}

export function activatePage(page) {
    return {
        type: ACTIVATE_PAGE,
        data: page
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

export function handleNav(page, prev) {
    // Route to...
    if (page === 'home') {
        hashHistory.push('/');
    } else {
        hashHistory.push(`/${page}`);
    }

    return {
        type: 'NAVIGATE',
        data: page,
        previousRoute: prev
    };
}

export function postForm(data) {
    return dispatch => {
        dispatch(loadingData());
        return fetch('/api/postForm', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        })
            .then(response => {
                if (response.status === 200) {
                    dispatch(formSuccess());
                    ReactGA.event({
                        category: 'Form Success',
                        action: 'Message Submitted',
                        label: 'Success Notification'
                    });
                    setTimeout(function() {
                        dispatch(resetForm());
                    }, 3000);
                } else {
                    dispatch(formError());
                }
            })
            .catch(error => {
                dispatch(formError());
                throw error;
            });
    };
}
