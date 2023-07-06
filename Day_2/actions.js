const bars = document.querySelector('.bars');
bars.addEventListener('click', function(){
    bars.classList.contains('bars-open') ?
    bars.className = 'bars-closed'
    :
    bars.className = 'bars-open'
})