const form = () => {
    const formHead = document.createElement('form');
    const formLabel = document.createElement('label');
    formLabel.setAttribute('for', 'score');
    formLabel.innerHTML = 'Enter Your Username Here To Save Your Score';
    const lineBreak = document.createElement('br');
    formLabel.appendChild(lineBreak);

    formHead.appendChild(formLabel);

    const scoreInput = document.createElement('input');
    scoreInput.setAttribute('type', 'text');
    scoreInput.setAttribute('id', 'score');
    scoreInput.setAttribute('name', 'score');
    scoreInput.setRangeText('placeholder', 'Enter your username here');

    formHead.appendChild(scoreInput);

    const submitForm = document.createElement('input');
    submitForm.setAttribute('type', 'submit');
    submitForm.setAttribute('value', 'Save Score');

    formHead.appendChild(submitForm);

}

<form>
    <label for="fname">Enter Your Username Here To Save Your Score</label><br>

    <input type="text" id="fname" name="fname" placeholder="Enter your username">
    <input type="submit" value="Save Score">
  </form> 