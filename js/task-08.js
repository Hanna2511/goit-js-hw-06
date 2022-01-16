const form = document.querySelector(',login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
const { currentTarget } = event;
const { email, password} = currentTarget.elements;
showPrompt("Введите что-нибудь:)", function(event) {
    alert(event);
  });
    console.log (currentTarget.elements)
} )