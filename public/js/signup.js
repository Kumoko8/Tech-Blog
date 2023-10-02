

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const usernameInput = document.querySelector("#username-signup").value.trim();
    const passwordInput = document.querySelector("#password-signup").value.trim();
  
    if (usernameInput && passwordInput) {
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({ username: usernameInput, password: passwordInput }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/")
        alert("Success!");
      } else {
        alert("Sign up failed.");
      }
    }
  };

  document
  .querySelector("#sign-up")
  .addEventListener("submit", signupFormHandler);