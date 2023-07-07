const bar=document.getElementById('bar');//used for three dots at right side in phone.bar is an id used in html
const close=document.getElementById('close');// forclose button
const nav=document.getElementById('navbar');

if(bar)//if anyone clicks on nav bar it gets activated
{
    bar.addEventListener('click',()=>{
        nav.classList.add('active');//now create active class in css and when u click on three lines in phone it will slide and show options like home.
    })
}

if(close)//if anyone clicks on nav bar it gets removed
{
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
