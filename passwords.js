document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".boxFull");
  const passwords = JSON.parse(localStorage.getItem("passwords")) || [];



  let passwordList = "<h1>Your created passwords:</h1><ul>"; 

  if (passwords.length > 0) {
    // if there is already passwords saved, add to the list

    passwordList += passwords.reduce((acc, password) => {
      const escapedPassword = document.createTextNode(password).textContent; // passwords as text content

      return acc + `<li class="show">${escapedPassword}</li>`; // add passwords to the list (callback, acc = accumulative)
    }, "");

  } else {
    passwordList = "<h1>Your created passwords:</h1> <p>No passwords saved yet.</p>"; // if there is no passwords, show the message
  }

  passwordList += "</ul>";



  // shows the passwords or the message at the container (boxFull div)
  container.innerHTML = passwordList + `<button class="clear" onclick="clearPasswords()">Clear</button>`;
});


function clearPasswords() {
  localStorage.removeItem("passwords"); // //function to clean the passwords
  const container = document.querySelector(".boxFull");
  container.innerHTML = "<h1>Your created passwords:</h1><p>No passwords saved yet.</p>"; 
}