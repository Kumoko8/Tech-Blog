const loginFormHandler = async (event) => {
  event.preventDefault();

  const usernameInput = document.querySelector("#username-login").value.trim();
  const passwordInput = document.querySelector("#password-login").value.trim();


  if (usernameInput && passwordInput) {
    const response = await fetch("api/user/login", {
      method: "POST",
      body: JSON.stringify({ username: usernameInput.value, password: passwordInput.value }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      alert("Login success!")
    } else {
      alert("Incorrect username or password. Please try again");
    }
  }
};



document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);


