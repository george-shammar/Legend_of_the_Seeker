/**
 * @jest-environment jsdom
 */

 import fetchMock from 'jest-fetch-mock';
 import {allScores, recordScore} from '../apiScore';

 describe('apiScore', () => {
    fetchMock.enableMocks();
    beforeEach(() => {
      fetch.resetMocks();
    });

    describe('allScores', () => {
        it('should returned a defined response', async () => {
          fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
          const response = await allScores();
          expect(response).toBeDefined();
        });

        it('should NOT return an empty response', async () => {
            fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
            const response = await allScores();
            expect(response).not.toBe("");
        });

        it('should NOT return a Null response', async () => {
            fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
            const response = await allScores();
            expect(response).not.toBeNull();
        });

        it('should return a response with a name/user property type string', async () => {
            fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
            const response = await allScores();
            expect(typeof response[0].user).toEqual('string');
        });

        it('should NOT return a response with a name/user property that is another data type', async () => {
            fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
            const response = await allScores();
            expect(typeof response[0].user).not.toEqual([]);
        });

        it('should NOT return a response with a name/user property that is null', async () => {
            fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
            const response = await allScores();
            expect(typeof response[0].user).not.toBeNull();
        });

        it('should NOT return a response with a name/user property that is defined', async () => {
            fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
            const response = await allScores();
            expect(typeof response[0].user).not.toBeUndefined();
        });

        it('should return a response for the score property with a data type of number', async () => {
            fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
            const response = await allScores();
            expect(typeof response[0].score).toEqual('number');
        });
    });


});