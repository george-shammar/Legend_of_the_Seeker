/**
 * @jest-environment jsdom
 */

 import fetchMock from 'jest-fetch-mock';
 import {allScores, recordScore} from '../apiScore';