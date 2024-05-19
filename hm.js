 document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn.btn-sm.btn-outline-secondary');
    const overlay = document.getElementById('overlay');
    const popupBox = document.querySelector('.popup-box');
    const closeBtn = document.querySelector('.overlay button');

    buttons.forEach(button => {
       button.addEventListener('click', function() { 
        var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, 
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        overlay.style.height = documentHeight + 'px';
        overlay.style.display = 'block';
        const imagePath = button.dataset.imagePath;
        popupBox.innerHTML = `<img src="${imagePath}" alt="Popup Image" style="height:300%; width:500%;" class="pop-img">`;
        popupBox.insertAdjacentHTML('beforeend', `<p class="float-end mb-1"><a href="#"><img src="close.png" width="50px" height="50px" alt="Close" class="back"/></a></p>`);
       });
    });
    closeBtn.addEventListener('click', function() {
        popupBox.innerHTML = ''; 
        overlay.style.display = 'none';
    });
});


