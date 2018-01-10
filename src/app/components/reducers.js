export function navigationState(
    state = {
        home: false,
        about: false,
        portfolio: false,
        contact: false,
        previousRoute: null
    },
    action
) {
    switch (action.type) {
        case 'SAVE_ROUTE':
            let temp = Object.assign({}, state, {
                home: false,
                about: false,
                portfolio: false,
                contact: false,
                previousRoute: null
            });

            return Object.assign({}, temp, {
                [action.data]: true,
                previousRoute: action.route
            });

        case 'ACTIVATE_PAGE':
            let temp2 = Object.assign({}, state, {
                home: false,
                about: false,
                portfolio: false,
                contact: false
            });

            return Object.assign({}, temp2, {
                [action.data]: true
            });

        default:
            return state || '';
    }
}

export function portfolioState(
    state = {
        data: {},
        width: 0,
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

        case 'SAVE_WIDTH':
            return Object.assign({}, state, {
                width: action.data
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

        case 'RESET_FORM':
            return Object.assign({}, state, {
                error: null,
                success: null
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
