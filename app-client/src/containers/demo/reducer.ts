import {SET_LENGTH} from 'src/containers/demo/actionTypes';

export const inititalState: number = 10;

export function demoReducer(state: number = inititalState, action: {type: string, payload: number}): number {
    switch (action.type) {

        case SET_LENGTH:
            return action.payload;

        default:
            return state;
    }
}
