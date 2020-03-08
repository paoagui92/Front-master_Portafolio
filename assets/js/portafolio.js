// --------init Masonry---------
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
//--------Fin Masonry-----------

//-------------Variables-------------
const elem = document.getElementsByClassName("grid-item");
console.log(elem);

//--------Event listener-------------
CargarEventListeners();

function CargarEventListeners() {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("mousemove", overFunction);
    elem[i].addEventListener("mouseout", outFunction);
    var item = elem[i];
  }
  return item;
}

//----------Funciones----------------
//----------Over Function------------
function overFunction(item) {
    const l = item.target;
    l.style.opacity="0.5";
    console.log(l);
}
//----------Over Function------------
function outFunction(item) {  
  const l = item.target;
  l.style.opacity="1";
  console.log(l);
}