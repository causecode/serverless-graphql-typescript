import {SET_LENGTH} from 'src/containers/demo/actionTypes';

export function setLength(length: number): {type: string, payload: number} {
    return {
        type: SET_LENGTH,
        payload: length,
    };
}
