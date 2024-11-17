const pass = document.querySelector(`#password`);
const confirmPass = document.querySelector(`#confirmPass`);
const submitBtn = document.querySelector(`#submit`);
const form = document.querySelector(`#form`);
const checkPassword = document.querySelector(`#checkPassword`);
const hidePassword = document.querySelector(`#hidePassword`);
const emailForm = document.querySelector(`#email`);
const emailLabel = document.querySelector(`#emailLabel`);

function checkPasswordMatch() {
    const error = document.querySelector(`#errorMessage`);
    if (pass.value !== confirmPass.value) {
        error.classList.add('error-valid');
        error.style.opacity = 1;
        error.style.display = 'block';
        submitBtn.disabled = true;
    } else {
        error.classList.remove('error-valid');
        error.style.opacity = 0;
        error.style.display = 'none';
        submitBtn.disabled = false;
    }
}

pass.addEventListener('input', () => {
    checkPasswordMatch();
});

confirmPass.addEventListener('input', () => {
    checkPasswordMatch();
});


function viewPassword() {
    if (pass.type === 'password') {
        pass.type = 'text';
        hidePassword.style.display = 'block';
        hidePassword.style.opacity = 1;
        checkPassword.style.opacity = 0;
        checkPassword.style.display = 'none';
    } else {
        pass.type = 'password';
        hidePassword.style.display = 'none';
        hidePassword.style.opacity = 0;
        checkPassword.style.opacity = 1;
        checkPassword.style.display = 'block';
    }
}

checkPassword.addEventListener('click', () => {
    viewPassword();
})

hidePassword.addEventListener('click', () => {
    viewPassword();
})

emailForm.addEventListener('input', () => {
    if (emailForm.value) {
        emailLabel.style.transform = 'translateY(-4.5rem)';
        emailLabel.style.backgroundColor = '#FFFFFF';
        emailLabel.style.fontSize = '11px';
        emailLabel.style.width = 'max-content';
    } else {
        emailLabel.style.transform = 'translateY(-3.4rem)';
        emailLabel.style.backgroundColor = 'transparent';
        emailLabel.style.fontSize = '16px';
    }
});

function message() {
    window.alert("Yipee! It's time to login!");
}