document.addEventListener("DOMContentLoaded", function () {
  const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#post-title").value;
    const content = document.querySelector("#post-content").value;

    if (title && content) {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        window.location.replace("/dashboard");
      } else {
        const responseData = await response.json();
        alert(responseData.error);
      }
    }
  };

  // Ensure the form element with the correct ID exists in your HTML
  const newPostForm = document.querySelector("#new-post-form");

  if (newPostForm) {
    newPostForm.addEventListener("submit", newPostHandler);
  }
});