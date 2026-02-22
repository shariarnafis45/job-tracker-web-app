//machine >> get an element via id 
function getElementFromId (id){
    const element = document.getElementById(id);
    return element;
}
//machine >> get an element innertext text via id 
function getElementTextFromId (id){
    const element = document.getElementById(id);
    return element.innerText;
}

// machine >> add hidden class
function addHidden(id){
    const element = document.getElementById(id);
    element.classList.add('hidden');
}
// machine >> Remove hidden class
function removeHidden(id){
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}