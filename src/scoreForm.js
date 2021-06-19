const form = () => {
    const formHead = document.createElement('form');
    formHead.setAttribute('id', 'form');
    const formLabel = document.createElement('label');
    formLabel.setAttribute('for', 'score');
    const lineBreak = document.createElement('br');
    formLabel.appendChild(lineBreak);

    formHead.appendChild(formLabel);

    const scoreInput = document.createElement('input');
    scoreInput.setAttribute('type', 'text');
    scoreInput.setAttribute('id', 'score');
    scoreInput.setAttribute('name', 'score');
    scoreInput.setAttribute('placeholder', 'Enter your username here');

    formHead.appendChild(scoreInput);

    return formHead;

}

export default form;
