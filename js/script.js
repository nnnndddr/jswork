
/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    
    
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}

let coll = document.getElementsByClassName('collapsible');
let first = localStorage.getItem('first');
  let second = localStorage.getItem('second');
  let third = localStorage.getItem('third');
    let plus ="fa-solid fa-circle-plus";
let minus ="fa-solid fa-circle-minus";
 if(first==='1'){
   document.getElementById("qwe1").className=minus;
    document.getElementById("c1").style.width = 532 + 'px';  
     document.getElementById("c1").style.maxHeight = document.getElementById("c1").scrollHeight + 'px';
 }
    if(second==='1'){
   document.getElementById("qwe2").className=minus;
    document.getElementById("c2").style.width = 532 + 'px';  
     document.getElementById("c2").style.maxHeight = document.getElementById("c2").scrollHeight + 'px';
 }
    if(third==='1'){
   document.getElementById("qwe3").className=minus;
    document.getElementById("c3").style.width = 532 + 'px';  
     document.getElementById("c3").style.maxHeight = document.getElementById("c3").scrollHeight + 'px';
 }

for (let i = 0; i < coll.length; i++){
coll[i].addEventListener('click', function() {
this.classList.toggle('active');
let content = this.nextElementSibling;
  if(i===0){
      document.getElementById("qwe1").className=minus;
      localStorage.setItem('first','1');
  }
  if(i===1){
      document.getElementById("qwe2").className=minus;
      localStorage.setItem('second','1');
  }
  if(i===2){
      document.getElementById("qwe3").className=minus;
      localStorage.setItem('third','1');
  }
  content.style.width = 532 + 'px';
if (content.style.maxHeight) {
    
   if(i===0){
      document.getElementById("qwe1").className=plus;
       localStorage.setItem('first','0');
  }
    
  if(i===1){
      document.getElementById("qwe2").className=plus;
      localStorage.setItem('second','0');
  }
  if(i===2){
      document.getElementById("qwe3").className=plus;
      localStorage.setItem('third','0');
  }
 
content.style.maxHeight = null;
}else{
  
content.style.maxHeight = content.scrollHeight + 'px'}
})
}
