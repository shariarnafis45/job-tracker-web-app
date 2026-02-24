
// all tab btn
document.getElementById('body')
    .addEventListener('click', function(event){
        const card = event.target.closest('.card');
        
        
        // Interview Button Click Handle 
        if(event.target.classList.contains('interview-btn')){
            
            // show interview badge
            const interviewBadge = card.querySelector('.interview-badge');
            const rejectBadge = card.querySelector('.reject-badge');
            interviewBadge.classList.remove('hidden');
            rejectBadge.classList.add('hidden');
            
            // check the card is already in reject tab
            const cardId = card.getAttribute('data-id');
            const existCard = getElementFromId('reject-job-list').querySelector(`[data-id='${cardId}']`);
            if(existCard){
                existCard.remove()
            }
            // check it is already in interview tab if exist function stop
            const existInInterviewTab = getElementFromId('interview-job-list').querySelector(`[data-id='${cardId}']`);
            if(existInInterviewTab){
                return;
            }
            
            
            // clone card badge show
            const cardClone = card.cloneNode(true);
            const interviewTabCardContainer = document.getElementById('interview-job-list');
            const cloneInterviewBadge = cardClone.querySelector('.interview-badge');
            const cloneRejectBadge = cardClone.querySelector('.reject-badge');
            cloneInterviewBadge.classList.remove('hidden')
            cloneRejectBadge.classList.add('hidden')
            
            // add the card to interview tab
            interviewTabCardContainer.appendChild(cardClone);
            // check the empty job message
            showHideEmptyInterviewJob();
            showHideEmptyRejectJob();
            
            // 
            
            
        }
        
        

        // reject Button Click Handle 
        if(event.target.classList.contains('reject-btn')){
            
            // show interview badge
            const interviewBadge = card.querySelector('.interview-badge');
            const rejectBadge = card.querySelector('.reject-badge');
            interviewBadge.classList.add('hidden');
            rejectBadge.classList.remove('hidden');
            
            // check the card is already in interview tab or not
            const cardId = card.getAttribute('data-id');
            const existCard = getElementFromId('interview-job-list').querySelector(`[data-id='${cardId}']`);
            if(existCard){
                existCard.remove()
            }
            // check it is already in reject tab if exist function stop
            const existInInterviewTab = getElementFromId('reject-job-list').querySelector(`[data-id='${cardId}']`);
            if(existInInterviewTab){
                return;
            }
            
            
            // clone card badge show
            const cardClone = card.cloneNode(true);
            const rejectTabCardContainer = document.getElementById('reject-job-list');
            const cloneInterviewBadge = cardClone.querySelector('.interview-badge');
            const cloneRejectBadge = cardClone.querySelector('.reject-badge');
            cloneInterviewBadge.classList.add('hidden')
            cloneRejectBadge.classList.remove('hidden')
            
            // add the card to interview tab
            rejectTabCardContainer.appendChild(cardClone);
            // check the empty job message
            showHideEmptyInterviewJob();
            showHideEmptyRejectJob();

        }
        // delete Button Click Handle 
        
        if(event.target.classList.contains('delete-btn')){
                card.remove();
                // check the empty job message
                showHideEmptyInterviewJob();
                showHideEmptyRejectJob();
        }
        calculateAll();
    });




    

