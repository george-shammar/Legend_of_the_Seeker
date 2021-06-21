/**
 * @jest-environment jsdom
 */

import form from '../scoreForm';

describe('form', () => {
    
    it('add two numbers', () => {
      expect(form(2, 3)).toBe(5);
    });
});