import {setLength} from 'src/containers/demo/actions';
import {SET_LENGTH} from 'src/containers/demo/actionTypes';

describe('Tests for the demoActions', (): void => {

    const expectedAction: {type: string, payload: number} = {
        type: SET_LENGTH,
        payload: 10,
    };

    it('should create an action to set the random list length.', (): void => {
        expect(setLength(10)).toEqual(expectedAction);
    });
});