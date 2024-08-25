import { updateTimes } from './Main';

jest.mock('./Main', () => ({
    ...jest.requireActual('./Main'),
    fetchAPI: jest.fn(),
}));

test('updateTimes returns the correct times based on selected date', () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    const fetchAPI = require('./Main').fetchAPI;
    fetchAPI.mockReturnValue(mockTimes);

    const action = { type: 'update', date: '2024-08-24' };
    const state = updateTimes([], action);
    expect(state).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith(new Date('2024-08-24'));
});
