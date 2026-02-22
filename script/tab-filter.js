

// All tab Controll
document.getElementById('all-tab-btn')
    .addEventListener('click', function(){
        removeHidden('all-card')
        addHidden('interview-tab-section')
        addHidden('reject-tab-section')
        addHidden('number-of-interview-job')
        addHidden('number-of-reject-job')
        

    })

// Interview tab Controll
document.getElementById('interview-tab-btn')
    .addEventListener('click', function(){
        const interviewJobList = getElementFromId('interview-job-list');
        // Step 1 check the condition
        if(interviewJobList.children.length === 0){
            removeHidden('interview-tab-section')   
        }
        // step 2
        addHidden('all-card')
        addHidden('reject-tab-section')
        addHidden('number-of-reject-job')
        removeHidden('number-of-interview-job')

    })

// reject tab Controll
document.getElementById('reject-tab-btn')
    .addEventListener('click', function(){
        const rejectJobList = getElementFromId('reject-job-list');
        // Step 1 check the condition
        if(rejectJobList.children.length === 0){
            removeHidden('reject-tab-section')
        }
        // step 2
        addHidden('all-card')
        addHidden('interview-tab-section')
        addHidden('number-of-interview-job')
        removeHidden('number-of-reject-job')

    })