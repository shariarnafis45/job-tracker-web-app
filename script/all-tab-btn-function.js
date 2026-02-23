
// all tab btn
document.getElementById('body')
    .addEventListener('click', function(event){
        const card = event.target.closest('.card');
        const cardClone = card.cloneNode(true);
 
        const interviewBadge = card.querySelector('.interview-badge');
        const rejectBadge = card.querySelector('.reject-badge');


        // Interview Button Click Handle 
        const interviewTabCardContainer = document.getElementById('interview-job-list')
        if(event.target.classList.contains('interview-btn')){

            // show interview badge
            interviewBadge.classList.remove('hidden');
            rejectBadge.classList.add('hidden');
            // check the card is already in interview tab
            const cardId = card.getAttribute('data-id');
            const existCard = getElementFromId('reject-job-list').querySelector(`[data-id='${cardId}']`);
            if(existCard){
                existCard.remove()
            }
            // card theke ager jodi interview te add hea theke tahole added class ta remove
            card.classList.remove('added-reject-tab');

            
            // check the Newcard is already in interview tab or not
            if(card.classList.contains('added-interview-tab')){
                return;
            }
            
            // sign class
             card.classList.add('added-interview-tab');
            
            // clone card badge show
            const cloneInterviewBadge = cardClone.querySelector('.interview-badge');
            const cloneRejectBadge = cardClone.querySelector('.reject-badge');
            cloneInterviewBadge.classList.remove('hidden')
            cloneRejectBadge.classList.add('hidden')
            
            // add the card to interview tab
            interviewTabCardContainer.appendChild(cardClone);
            showHideEmptyInterviewJob();
            showHideEmptyRejectJob();
            
            // 
            
            
        }
        
        

        // reject Button Click Handle 
        const rejectTabCardContainer = document.getElementById('reject-job-list')
        if(event.target.classList.contains('reject-btn')){
            
            // show interview badge
            interviewBadge.classList.add('hidden');
            rejectBadge.classList.remove('hidden');
            
            // check the card is already in interview tab or not
            const cardId = card.getAttribute('data-id');
            const existCard = getElementFromId('interview-job-list').querySelector(`[data-id='${cardId}']`);
            if(existCard){
                existCard.remove()
            }
            // card theke ager jodi interview te add hea theke tahole added class ta remove
            card.classList.remove('added-interview-tab');
            
            // check the Newcard is already in interview tab or not
            if(card.classList.contains('added-reject-tab')){
                return;
            }
            // sign class 
            card.classList.add('added-reject-tab');
            // clone card badge show
            const cloneInterviewBadge = cardClone.querySelector('.interview-badge');
            const cloneRejectBadge = cardClone.querySelector('.reject-badge');
            cloneInterviewBadge.classList.add('hidden')
            cloneRejectBadge.classList.remove('hidden')
            
            // add the card to interview tab
            rejectTabCardContainer.appendChild(cardClone);
            showHideEmptyInterviewJob();
                showHideEmptyRejectJob();

        }
        // delete Button Click Handle 
        
        if(event.target.classList.contains('delete-btn')){
                card.remove();
                // calculate 
                showHideEmptyInterviewJob();
                showHideEmptyRejectJob();
        }
        calculateAll();
    });




    

