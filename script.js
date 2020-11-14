document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn-login");
  button.addEventListener("click", validarLogin);
});

function validarLogin() {
  const userLogin = {
    user: "admin",
    password: 123456,
  };

  const userEmail = document.getElementById("user");
  const userPassword = document.getElementById("password");

  if (
    userEmail.value == userLogin.user &&
    userPassword.value == userLogin.password
  ) {
    showAlert("Authenticated user");
    setTimeout(() => {
      window.location.href = "https://github.com/CristhianFSantos";
    }, 500);
  } else {
    showAlert("Incorrect username or password");
  }
}

function showAlert(message) {
  const $snackBar = document.querySelector(".snack-bar");
  $snackBar.innerText = message;
  $snackBar.classList.add("show");
  setTimeout(() => {
    $snackBar.classList.remove("show");
  }, 4000);
}
