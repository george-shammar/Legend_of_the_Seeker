/**
 * @jest-environment jsdom
 */

import fetchMock from 'jest-fetch-mock';
import { allScores, recordScore } from '../apiScore';

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
      expect(response).not.toBe('');
    });

    it('should NOT return a Null response', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
      const response = await allScores();
      expect(response).not.toBeNull();
    });

    it('should return a response with a name/user property', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
      const response = await allScores();
      expect(response[0].user).toEqual('Django');
    });

    it('should NOT return a response with a wrong name/user property', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
      const response = await allScores();
      expect(response[0].user).not.toEqual('Hommer');
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

    it('should return a response with users score', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
      const response = await allScores();
      expect(response[0].score).toEqual(8000);
    });

    it('should NOT return a response that is wrong', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
      const response = await allScores();
      expect(response[0].score).not.toEqual(82000);
    });

    it('should NOT return a response that is undefined', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
      const response = await allScores();
      expect(response[0].score).not.toBeUndefined();
    });

    it('should NOT return a response that is Null', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [{ score: 8000, user: 'Django' }] }));
      const response = await allScores();
      expect(response[0].score).not.toBeNull();
    });
  });

  describe('recordScore', () => {
    it('should resolve succesfully with users input', async () => {
      fetch.mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve('Successfully created record') }));
      await expect(recordScore('Django', 8000)).resolves.toEqual('Successfully created record');
    });

    it('should NOT resolve to an undefined response', async () => {
      fetch.mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve('Successfully created record') }));
      await expect(recordScore('Django', 8000)).resolves.not.toBeUndefined();
    });

    it('should NOT resolve to an Null response', async () => {
      fetch.mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve('Successfully created record') }));
      await expect(recordScore('Django', 8000)).resolves.not.toBeNull();
    });
  });
});