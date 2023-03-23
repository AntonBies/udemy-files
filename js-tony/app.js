const button = document.querySelector("#login");
button.addEventListener("click", (event) => {
    const language = document.querySelector("#logindiv select").value;
    G$("Anton", "Bies").setLang(language).updateGreeting("#greeting").log();
});
