/**
 * @jest-environment jsdom
 */

import form from '../scoreForm';

describe('form', () => {
  const scoreForm = form();
  it('should create a user form to record score', () => {
    expect(scoreForm.tagName).toBe('FORM');
  });
});