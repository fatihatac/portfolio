$(".nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$("#page-top").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});


// console.log();

$("#projects a").each((index,e) => console.log(e.target));