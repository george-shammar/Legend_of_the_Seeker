/**
 * @jest-environment jsdom
 */

import form from '../scoreForm';

describe('form', () => {
  const scoreForm = form();
  it('should create a user form to record score', () => {
    expect(scoreForm.tagName).toBe('FORM');
  });

  it('should not be null', () => {
    expect(scoreForm.tagName).not.toBeNull();
  });

  it('should not create any other element that is not form', () => {
    expect(scoreForm.tagName).not.toBe('div');
  });
});