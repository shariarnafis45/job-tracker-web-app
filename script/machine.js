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

// Machine Calculate the number of total , interview , rejected

function calculateAll(){
    // total job numbers
    const totalJobNums = document.querySelectorAll('.total-job-number');
    const allCard = document.getElementById('all-card');
    const totalJob = allCard.children.length;
    for(let num of totalJobNums){
        num.innerText = totalJob;
    }
    // total Interview job numbers
    const totalInterviewJobNums = document.querySelectorAll('.total-interview-job');
    const interviewJobCard = document.getElementById('interview-job-list');
    const totalInterviewJob = interviewJobCard.children.length;
    for(let num of totalInterviewJobNums){
        num.innerText = totalInterviewJob;
    }
    
    // total Reject job numbers
    const totalRejectJobNums = document.querySelectorAll('.total-reject-job');
    const rejectJobCard = document.getElementById('reject-job-list');
    const totalRejectJob = rejectJobCard.children.length;
    for(let num of totalRejectJobNums){
        num.innerText = totalRejectJob;
    }
    
}

calculateAll();
