var arr = new collection(["/home/chase/donchiart/comics/1.png","/home/chase/donchiart/comics.2.png","/home/chase/donchiart/comics/3.png","/home/chase/donchiart/comics/4.png"]);
function collection(imgs) {
  this.imgs = imgs;
  this.i = 0;

  this.next = function(element) {
    var img = document.getElementById(element);
    
    this.i++;
    if (this.i >= imgs.length) {
      this.i = 0;
    }

    img.src = imgs[this.i];
  };
 
  this.prev = function(element) {
    var img = document.getElementById(element);
  
    this.i--;
    if (this.i < 0) {
      this.i = imgs.length - 1;
    }
  
    img.src = imgs[this.i];
  };
  
  this.next("mainImg"); // to initialize with some image
}



