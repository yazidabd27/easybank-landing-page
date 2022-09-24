let hambugerIcon=document.querySelector('#hamburger-icon img');
let navBar=document.querySelector('.nav-bar');
let mockupsImg=document.querySelector('.mockups-img')
let hidden=true;

hambugerIcon.onclick=()=>{
    if(hidden){
        navBar.classList.add('d-block');
        mockupsImg.classList.add('d-none');
        hambugerIcon.src="images/icon-close.svg";
        hidden=false;
    }else{
        navBar.classList.remove('d-block');
        mockupsImg.classList.remove('d-none');
        hambugerIcon.src="images/icon-hamburger.svg";
        hidden=true;
    }
}