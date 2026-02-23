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
    // total job calculation
    const totolJob = getElementFromId('total-job')
    const cardNumbers = getElementFromId('all-card')
    totolJob.innerText = cardNumbers.children.length;
    const totalJobInTitle = getElementFromId('total-job-intitle')
    totalJobInTitle.innerText = cardNumbers.children.length;

    // Interview job number 
    const interviewJobList = getElementFromId('interview-job-list')
    const interviewNum = getElementFromId('total-interview-job');
    interviewNum.innerText = interviewJobList.children.length;

    const interviewNumInTitle = getElementFromId('interview-job-in-title');
    interviewNumInTitle.innerText = interviewJobList.children.length;

    // reject job number 
    const rejectJobList = getElementFromId('reject-job-list')
    const rejectNum = getElementFromId('total-reject-job');
    rejectNum.innerText = rejectJobList.children.length;

    const rejectwNumInTitle = getElementFromId('reject-job-in-title');
    rejectwNumInTitle.innerText = rejectJobList.children.length;

    

}

calculateAll();
// machine > job msg show / hide
function showHideEmptyRejectJob(){
    const rejectJobList = getElementFromId('reject-job-list');
    // Step 1 check the condition
    if(rejectJobList.children.length === 0){
        removeHidden('empty-reject-job')
    }else{
        addHidden('empty-reject-job')
    }
}

showHideEmptyRejectJob();

function showHideEmptyInterviewJob(){
    const interviewJobList = getElementFromId('interview-job-list');
        // Step 1 check the condition
        if(interviewJobList.children.length === 0){
            removeHidden('empty-interview-job')   
        }else{
            addHidden('empty-interview-job')
        }
}

showHideEmptyInterviewJob();