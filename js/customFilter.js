function customFilter() {

    let caption;

    let userInput = document.getElementById('search');
    let filter = userInput.value.toLowerCase();

let gallery = document.getElementById('gallery');
let images = gallery.getElementsByTagName('a');

  for (let i=0; i< images.length; i++) {
    caption = images[i].getAttribute('data-caption');
    if (caption.toLowerCase().includes(filter)) {
      images[i].style.display = "";
    } else {
      images[i].style.display = "none";
    }
  }
}
