export function portfolioState(
    state = {
        data: {},
        width: 0,
        loading: false,
        success: null,
        error: null,
        previousRoute: null
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

        case 'RESET_ERROR':
            return Object.assign({}, state, {
                error: false
            });

        case 'RESET_FORM':
            return Object.assign({}, state, {
                error: null,
                success: null
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

        case 'SAVE_ROUTE':
            let temp = Object.assign({}, state, {
                previousRoute: null
            });

            return Object.assign({}, temp, {
                previousRoute: action.route
            });

        default:
            return state || '';
    }
}
