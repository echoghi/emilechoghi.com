import ReactGA from 'react-ga';
export const LOADING_DATA = 'LOADING_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const DATA_ERROR = 'DATA_ERROR';
export const RESET_ERROR = 'RESET_ERROR';
export const RESET_FORM = 'RESET_FORM';
export const FORM_SUCCESS = 'FORM_SUCCESS';
export const FORM_ERROR = 'FORM_ERROR';
export const ACTIVATE_PAGE = 'ACTIVATE_PAGE';
export const SAVE_WIDTH = 'SAVE_WIDTH';
export const SAVE_ROUTE = 'SAVE_ROUTE';

export function receiveData(data) {
    return {
        type: RECEIVE_DATA,
        data
    };
}

export function saveWidth(data) {
    return {
        type: SAVE_WIDTH,
        data
    };
}

export function saveRoute(route) {
    return {
        type: SAVE_ROUTE,
        route
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
                    // Reset form to clear success notification
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
