import {createSelector} from 'reselect';

const selectDataDomain = (state: {data: number}): number => state.data;

export const getLength: Function = () => createSelector(
    selectDataDomain,
    (data: number) => Number.isInteger(data) ? data : 0
);
