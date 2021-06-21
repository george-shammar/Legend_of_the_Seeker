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
        it('should be defined', async () => {
          fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
          const response = await allScores();
          expect(response).toBeDefined();
        });
    });


});