$i = 0;
$("#start").click(function () {
  $i++;
  if ($i >= 6) {
    $("#start").hide();
    $("#stop").show();
  }
});
$("#stop").click(function () {
  alert("中午就吃这个了！");
  $(this).hide();
});