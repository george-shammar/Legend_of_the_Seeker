const form = () => {
    const formHead = document.createElement('div');
    formHead.setAttribute('id', 'form');
    formHead.setAttribute('class', 'float-form');
    const scoreInput = document.createElement('input');
    scoreInput.setAttribute('type', 'text');
    scoreInput.setAttribute('id', 'score');
    scoreInput.setAttribute('class', 'py-2');
    scoreInput.setAttribute('placeholder', 'Enter your username here');

    formHead.appendChild(scoreInput);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('class', 'btn butoon btn-primary mx-2');
    submitButton.setAttribute('id', 'click-submit');
    submitButton.innerHTML = "Save Score";

    formHead.appendChild(submitButton);

    return formHead;

}

export default form;
