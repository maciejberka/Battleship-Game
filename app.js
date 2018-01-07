$(document).ready(function () {

  var countValue = 20;
  //Event listener at cells of player board
  $(".boardPlayer td").on("click", putShips);
  //function to putting ships, counting them and activate startGame button
  function putShips() {
    //toggle .yourShips class at clicked td's 
    $(this).toggleClass("yourShips");
    //counting placed ships
    if ($(this).hasClass("yourShips")) {
      countValue--;
    } else {
      countValue++;
    }
    //remove previous value from counter
    $(".count").empty();
    //append actual value to .count div
    $(".count").append(countValue);
    //when countValue is zero
    if (countValue == 0) {
      //remove 'disabled' attr from .startGame button
      $(".startGame").removeAttr("disabled") 
    } else {
      //if countValuer is less or more than zero make .startGame button no active
      $(".startGame").prop('disabled', true);
    }
  }









});
