const openModal = document.getElementById('open');
var modal = document.getElementById('mymodal');

const save = document.getElementById('save');
const userName = document.getElementById('userName');
var colortheme = document.getElementById('color');
const title = document.getElementById('Name');
var rot = document.querySelector(':root');
const inputs = document.getElementsByName('avatar');
const userimg = document.getElementById('profilepic')
const modalcontent = document.getElementById('modalcontent');
const career = document.getElementById('career');
const inputCareer = document.getElementById('inputcareer');

openModal.addEventListener('click', () => {
    modal.style.display = 'block';
    modal.style.top = '0'
})

settheme = () => {
    rot.style.setProperty('--themecolor', colortheme.value);
 }

inputs.forEach((i) => {
    i.addEventListener('click', (e) => {
        userimg.src = e.target.previousElementSibling.src;
    })
})

save.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.top = "-100%"
    if (userName.value === "") {
    }
    else {
        title.innerText = userName.value;
    }
    rot.style.setProperty('--themecolor', 'pink');
    settheme();
    userName.value = "";
    if (inputCareer.value === "") {
    }
    else {
        career.innerText = inputCareer.value;
    }
    inputCareer.value = "";
   
})

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.top="-100%";
    }
})



