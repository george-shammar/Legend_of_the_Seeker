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

  it('should not be undefined', () => {
    expect(scoreForm.tagName).not.toBeUndefined();
  });
  
  test('Should contain DOM element created with form function', () => {
    document.body.innerHTML = '<input type="text" id="score" class="py-2" placeholder="Enter your username here"></input>';
    const input = document.getElementById('score');
    expect(input.innerHTML).toContain("");
  });

  test('Should NOT contain any input before users input from the form function', () => {
    document.body.innerHTML = '<input type="text" id="score" class="py-2" placeholder="Enter your username here"></input>';
    const input = document.getElementById('score');
    expect(input.innerHTML).not.toContain("username");
  });

});