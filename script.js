document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const range = document.getElementById("range");
    const slider = document.querySelector(".slider");
    const button = document.querySelector(".generate"); //elements from html
    const copyButton = document.getElementById("copy"); 

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/"; //characters for the password

    function generatePassword(length) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length); //generating random password
            password += characters[randomIndex];
        }


    // Tentando obter senhas armazenadas no localStorage
    let storedPasswords = JSON.parse(localStorage.getItem('passwords')) || []; // Recupera ou cria um array vazio se não houver nada

    // Adicionando a nova senha ao array
    storedPasswords.push(password);

    // Salvando o array de senhas novamente no localStorage
    localStorage.setItem('passwords', JSON.stringify(storedPasswords));

    return password; // Retorna a senha gerada
    }


    range.addEventListener("input", function () {
        slider.textContent = range.value;
    });

    button.addEventListener("click", function () {
        input.value = generatePassword(range.value);
    });



    copyButton.addEventListener("click", function () {
        navigator.clipboard.writeText(input.value);
        alert('Copied to clipboard!'); //copying the password
    });
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  } // hamburguer nav for mobile



  
