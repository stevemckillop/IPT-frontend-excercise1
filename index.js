window.addEventListener('load', () => {


  const checkPassword = () => {

    let passwordInputText1 = document.getElementById('Password1InputText').value;
    let passwordInputText2 = document.getElementById('Password2InputText').value;

    if (passwordInputText2.length === 0 || passwordInputText1.length === 0){
      document.getElementById('passwordError').innerText = "Please complete both password fields!"
    }
    else if (passwordInputText1.length < 12 || passwordInputText2.length < 12){
      document.getElementById('passwordError').innerText = "Please enter 12 or more combination of letters, number, and symbols"
    }
    else if (passwordInputText2 !== passwordInputText1){
      document.getElementById('passwordError').innerText = "These passwords do not match!"
    }
  }
  
  CreateAccountButton.addEventListener("click", checkPassword);


});