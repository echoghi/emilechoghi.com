export function navigationState(
    state = {
        home: false,
        about: false,
        portfolio: false,
        contact: false
    },
    action
) {
    switch (action.type) {
        case 'NAVIGATE':
            let temp = Object.assign({}, state, {
                home: false,
                about: false,
                portfolio: false,
                contact: false
            });

            return Object.assign({}, temp, {
                [action.data]: true
            });

        default:
            return state || '';
    }
}

export function portfolioState(
    state = {
        data: {},
        loading: false,
        success: null,
        error: null
    },
    action
) {
    switch (action.type) {
        case 'LOADING_DATA':
            return Object.assign({}, state, {
                loading: true
            });

        case 'DATA_ERROR':
            return Object.assign({}, state, {
                loading: false,
                error: true
            });

        case 'RESET_ERROR':
            return Object.assign({}, state, {
                error: false
            });

        case 'RECEIVE_DATA':
            return Object.assign({}, state, {
                data: action.data,
                loading: false,
                success: true,
                error: false
            });

        case 'FORM_SUCCESS':
            return Object.assign({}, state, {
                loading: false,
                success: true
            });
        case 'FORM_ERROR':
            return Object.assign({}, state, {
                loading: false,
                error: true
            });

        default:
            return state || '';
    }
}
