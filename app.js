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

  //Event listener at .startGame button
  $(".startGame").on("click", beginGame);
  //function to random choosing cells at computer's board, removing children of .chat div and removing event listener at player's board
  function beginGame(){
    for (var i = 0; i < 20; i++){
      //get randomNumber 0-99
      var randomNumber = (Math.random() * 100);
      //round randomNumber
      randomNumber = Math.round(randomNumber);
      //choose random cell
      var randomCell = $(".boardComputer td").eq(randomNumber);
      //if randomCell's index is less or equal 64 and cell wasn't already choosed...
      if (randomNumber <= 64 && !randomCell.hasClass("computerShips")){
        //accept randomCell as a computer choice  
        randomCell.addClass("computerShips");
      } else {
          //else - repeat
          i--;
      }
    }
    //remove all elements from .chat div
    $(".chat").empty();
    //remove event listener at cells of player's board
    $(".boardPlayer td").off();
  }








});
