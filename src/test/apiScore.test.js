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
    });


});