let topic = document.getElementsByClassName('topic'); 

topic = Array.from(topic) ;

topic.forEach(eachTopic => {
    eachTopic.addEventListener('click', ()=>{
        // console.log(eachTopic)
        eachTopic.classList.add("modified-topic");
        eachTopic.children[0].classList.remove('hidden');
        eachTopic.children[2].classList.remove('hidden');
        eachTopic.children[0].addEventListener('click', () => {
            location.reload();
        })
    })
});