const containerData = document.querySelector('.data');
const btnSearch = document.querySelector('.btn');
const containerSearch = document.querySelector('.search');
const load = document.querySelector('.load');
const hide = document.querySelectorAll('.hide');
const msg = document.querySelector('.msg')

btnSearch.addEventListener('click', (e)=>{
    e.preventDefault();

    if(inputSearch.value === ""){
        errorMsg("A barra de pesquisa está vazia");
        return;

    }else{
        showData();
    }    
 } 
);

function errorMsg(mensagem){
    msgalert.innerHTML = mensagem;
    msg.style.opacity = '1';

        setTimeout(()=>{
            msg.style.opacity = '0';
        },1200);
}

