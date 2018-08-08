export const SAVE_WIDTH = 'SAVE_WIDTH';
export const SAVE_ROUTE = 'SAVE_ROUTE';

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
