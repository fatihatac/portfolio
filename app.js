$(".nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$("#page-top").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$("#projects a").each((index, e) => console.log(e.target));

const toggleLanguageButton = document.querySelector("#toggle-language");

toggleLanguageButton.addEventListener("click", () => {
  let text = toggleLanguageButton.innerHTML == "TR" ? "EN" : "TR";
  toggleLanguageButton.innerHTML = text;
});

document.querySelector("img").classList.toggle;
