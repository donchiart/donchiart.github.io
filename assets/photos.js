
/*
var arr = new collection(["https://github.com/donchiart/donchiart.github.io/blob/master/comics/1.png","https://github.com/donchiart/donchiart.github.io/blob/master/comics/2.png","https://github.com/donchiart/donchiart.github.io/blob/master/comics/3.png","https://github.com/donchiart/donchiart.github.io/blob/master/comics/4.png"]);
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


*/

imgArray = new Array(
"1.png",
"2.png",
"3.png",
"4.png",
"5.png",
"6.png"  
);

baseURL = "https://raw.githubusercontent.com/donchiart/donchiart.github.io/master/comics/";
numImages = 6;
curImage = 1;

function f_slideshow( xflip ) {
curImage = curImage + xflip;
if (curImage > numImages)
{ curImage = 1 ; }
if (curImage == 0)
{ curImage = numImages ; }
document.images[2].src = baseURL + imgArray[curImage - 1];
}
