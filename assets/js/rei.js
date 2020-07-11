function pseudolazy_load() {
  var img = new Image();
  img.src = "./images/banner.jpg";
  console.log("pseudolazy_load");
  img.onload = () => {
    document.getElementById("banner").style.backgroundImage = img;
    console.log("pseudolazy_load OK");
  };
}
