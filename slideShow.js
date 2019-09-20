let numberImage;
let currentNumber;
let interval;

function image(){ 
   
    numberImage = document.getElementById("img").getAttribute("src");
    currentNumber=+(numberImage.substring(0,1))+1;
    if(currentNumber==7){
        currentNumber=1;
    }
    document.getElementById("img").setAttribute("src",(currentNumber+".jpg")); 
    
    
} 

function playSlideShow(){
   interval = setInterval(image,500);
}

function stopSlideShow(){
    clearInterval(interval);
}

function next(){
 image();  
    
}

function previous(){
    numberImage = document.getElementById("img").getAttribute("src");
    currentNumber=(+(numberImage.substring(0,1)))-1
    if(currentNumber==0){
        currentNumber=6;
   }
   document.getElementById("img").setAttribute("src",(currentNumber+".jpg"));
}
