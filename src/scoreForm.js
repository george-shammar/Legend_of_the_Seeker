const form = () => {
    const formHead = document.createElement('form');
    formHead.setAttribute('id', 'form');
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
    scoreInput.setAttribute('placeholder', 'Enter your username here');

    formHead.appendChild(scoreInput);

    const submitForm = document.createElement('input');
    submitForm.setAttribute('type', 'submit');
    submitForm.setAttribute('value', 'Save Score');

    formHead.appendChild(submitForm);
    
    return formHead;

}

export default form;