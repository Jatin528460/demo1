let navAddContainer = document.getElementById('navAddContainer');
let containerAdd = document.getElementById('containerAdd');
let article = document.getElementById('article');
let containerAddNav = document.getElementById('containerAddNav');
let containerAddBody = document.getElementById('containerAddBody');

let a = 0;
navAddContainer.addEventListener('click',function(){
    if(a%2 === 0){
        containerAdd.style.display = 'block';
        article.style.display = 'none';
    }
    else{
        containerAdd.style.display = 'none';
        article.style.display = 'block';
    } 
    a++;
});

let b = 0,c = 0;
containerAddNav.addEventListener('click',funAddNavHideb);
containerAddNav.addEventListener('mousemove',funAddNavHidec);
containerAddBody.addEventListener('mousemove',funAddNavHided);
function funAddNavHideb(){
    b = -1;
    c = 0;
}
function funAddNavHidec(){
    if(b === -1){
        c = -2;
        b = 0;
    }
}
function funAddNavHided(){
    console.log(b,c);

    if(c === -2){
        b = 0; c = 0;
        containerAdd.style.display = 'none';
        article.style.display = 'block';
    }
}