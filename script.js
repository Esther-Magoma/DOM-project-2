let openBtn = document.getElementById('open-btn');
letmodalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none';
});

window.addEventListener('click',function(e){
    if (e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
});