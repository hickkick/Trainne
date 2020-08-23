const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const SELECT = document.querySelector('.select');
const BTN = document.querySelector('.show-btn');
const IMG = document.querySelector('.img');
const SPINER = document.querySelector('.spinner');

// entry poin, search all list and add to select
fetch(BREEDS_URL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);

        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            SELECT.appendChild(option);
        }
    })

// listen changes    
SELECT.addEventListener('change' , function(e) {
    let url = `https://dog.ceo/api/breed/${e.target.value}/images/random`;

    changeDoggo(url);
});

function changeDoggo (params) {
    SPINER.classList.add('show');
    IMG.classList.remove('show');

    fetch(params)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            IMG.src = data.message; 
        })
}
IMG.addEventListener('load' , function (){
    SPINER.classList.remove('show');
    IMG.classList.add('show');
});
//btn function
async function getDoggo(event) {
    SPINER.classList.add('show');
    IMG.classList.remove('show');
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const resJson = await res.json();
    IMG.src = resJson.message;
  }
BTN.addEventListener('click', getDoggo);