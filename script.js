const containerData = document.querySelector('.data');
const btnSearch = document.querySelector('.btn');
const containerSearch = document.querySelector('.search');
const load = document.querySelector('.load');

btnSearch.addEventListener('click', (e)=>{
    e.preventDefault();
    containerSearch.style.animationName = 'up';
    setTimeout(()=>{
        containerData.style.display = 'flex';
    },1000);
    
});
