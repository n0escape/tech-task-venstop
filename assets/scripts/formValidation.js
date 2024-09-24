export const formValidation = () => {
    const form = document.getElementById('subscription-form');
    const nameInput = document.getElementById('input-name');
    const emailInput = document.getElementById('input-email');
    const termsCheckbox = document.getElementById('inpit-privacy');
    const errorMessage = document.getElementById('form-error-message');
    const namePattern = /^[a-zA-Z]+$/;
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameValue = nameInput.value.trim();
            const emailValue = emailInput.value.trim();
            const allFieldsFilled = nameValue && emailValue && termsCheckbox.checked;

            switch(true) {
                case !allFieldsFilled:
                    errorMessage.textContent = 'Fill all form elements.';
                    break;

                case !namePattern.test(nameValue):
                    errorMessage.textContent = 'Use only Latin letters, e.g: Tom, John, ect.';
                    break;

                case !emailPattern.test(emailValue):
                    errorMessage.textContent = 'Enter valid e-mail, e.g: examlpe123@real.domen';
                    break;
                
                default:
                    errorMessage.textContent = ''
                    form.submit();
            }
        })
    }
}