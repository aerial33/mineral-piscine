$(".btn-filt").click((event) => {
  const tag = event.currentTarget.dataset.filter;
  if (tag === "all") {
    $(".filter").show("2000");
  } else {
    $(".filter").not(`.${tag}`).hide("2000");
    // $(".filter").filter('.' + tag).show("2000");
    $(".filter").filter(`.${tag}`).show("2000");
  }
});

$('.btn-filt').click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
