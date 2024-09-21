function tutupimg(){
  setTimeout(() => {
  $("#popupku").hide();
  },1000)
  setTimeout(() => {
    audio = document.getElementById("bsi");
    audio.play();
    audio.loop = false
  },900)
}