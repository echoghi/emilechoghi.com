export function portfolioState(
    state = {
        width: 0,
        previousRoute: null
    },
    action
) {
    switch (action.type) {
        case 'SAVE_WIDTH':
            return Object.assign({}, state, {
                width: action.data
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
