const containerData = document.querySelector('.data');
const btnSearch = document.querySelector('.btn');
const containerSearch = document.querySelector('.search');
const load = document.querySelector('.load');
const hide = document.querySelectorAll('.hide');

btnSearch.addEventListener('click', (e)=>{
    e.preventDefault();
    containerSearch.style.animationName = 'up';

    setTimeout(()=>{
        containerData.style.display = 'flex';
    },100);

    
    setTimeout(()=>{
        for( let i = 0; i<hide.length;i++){
            hide[i].style.opacity = 1;
        }
    },700);
    
});
