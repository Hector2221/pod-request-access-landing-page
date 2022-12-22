const email = document.getElementById('email');
const form = document.querySelector('form');

form.addEventListener("submit", e=>{
    e.preventDefault();
    let regulaExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const alert = document.getElementById('alert');


    if(regulaExpEmail.test(email.value)){
        alert.classList.add('alert-green')
        alert.innerHTML = "registration completed"
    }else{
        alert.classList.remove('alert-green')
        alert.classList.add('alert')
        alert.innerHTML = "Oops! Please check your email"
    }
});
