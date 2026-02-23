

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
        // step-1
        showHideEmptyInterviewJob();
        // step 2
        addHidden('all-card')
        addHidden('reject-tab-section')
        addHidden('number-of-reject-job')
        removeHidden('number-of-interview-job')
        removeHidden('interview-tab-section')

    })

// reject tab Controll
document.getElementById('reject-tab-btn')
    .addEventListener('click', function(){
        // step 1 
        showHideEmptyRejectJob();
        // step 2
        addHidden('all-card')
        addHidden('interview-tab-section')
        addHidden('number-of-interview-job')
        removeHidden('number-of-reject-job')
        removeHidden('reject-tab-section')

    })

    

    