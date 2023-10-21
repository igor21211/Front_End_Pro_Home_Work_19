document.addEventListener('DOMContentLoaded',()=> {
    hideElement();
})

const hideElement = () => {
    let element = document.querySelector('.root');
    element.addEventListener('focus',() => {
        createNewElement();
    })
}

const createNewElement = () => {
    let body = document.querySelector('body');
    let newDiv = document.createElement("div");
    let element = document.querySelector('.root');
    let html = `<h1>Hello!!!</h1>`
    newDiv.innerHTML = html;
    newDiv.id = 'newDiv';
    body.appendChild(newDiv);
    element.addEventListener('blur', () => {
        newDiv.parentNode.removeChild(newDiv);
    }, { once: true });
}

