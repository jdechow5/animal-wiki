$(document).ready(function () {
  $("form#animalType").submit(function (event) {
    event.preventDefault();
    const animalChoice = $("#animal-choice").val();
    console.log(animalChoice);


    $(".animal-image").hide();
    $(".hidden-text").hide();


    if (animalChoice === "Lion") {
      $("#lion-pic").toggle();
      $("#lion-info").toggle();
    } else if (animalChoice === "Hippopotomus") {
      $("#hippo-pic").toggle();
      $("#hippo-info").toggle();
    } else {
      $("#turtle-pic").toggle();
      $("#turtle-info").toggle();
    }
  })
})