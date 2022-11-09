const colorWithJs = document.getElementsByClassName('color-with-js');
for(let color of colorWithJs){
    color.style.color='royalblue';
}

const backPack = document.getElementById('backpack-back');
backPack.style.backgroundColor = 'lavender';
backPack.style.display = 'inline';

const cards = document.getElementsByClassName('change-radious');
for (let card of cards){
    card.style.borderRadius = '10px'
}

const headPhone = document.getElementById('headPhone');
headPhone.onclick = function(event){
    console.log("I'm Head Phone.");
}

const TvBtn = document.getElementById('TvBtn');
TvBtn.onclick = function(){
    console.log("I'm LED TV.");
}

const XboxBtn = document.getElementById('XboxBtn');
XboxBtn.onclick = function(){
    console.log("I'm Xbox 360.");
}

// using delegate mathod

const btnParant = document.getElementsByClassName('btn-parant');
for(let parantBtn of btnParant){
    parantBtn.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    })
}

// using display none

// const vanishBtn = document.getElementsByClassName('vanish-btn');
// for (let vanish of vanishBtn){
//     vanish.addEventListener('click', function(){
//         vanish.style.display = 'none';
//     })
// }

const inputSubmit = document.getElementById('submitInput');
inputSubmit.addEventListener('keyup', function(){
    if(inputSubmit.value == "submit"){
        document.getElementById('submitBtn').removeAttribute('disabled');
    }
    else{
        document.getElementById('submitBtn').setAttribute('disabled', true);
    }
})

const changeImg = document.getElementById('change-img');

changeImg.addEventListener('mouseenter', function(){
    changeImg.style.display = 'none'
    const img = document.createElement('img');
    img.setAttribute('src', "images/shoes/shoe-2.png");
    img.setAttribute('class', 'card-img-top');
    const appendImg = document.getElementById('append-img');
    appendImg.appendChild(img);
})

