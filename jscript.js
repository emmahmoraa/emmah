var i=0;
var time=3000;
var images=[];

images[0]="IMAGES/FASHION/KIDS/Pageant-dresses.jpg"
images[1]='IMAGES/COSMETICS/HAIR OILS/amla-herbal-hair-oil.jpg';
images[2]='IMAGES/FASHION/KIDS/roayl-blue-dress.jpg';
images[3]='APHRODITE BODY LOTION.jpg';
images[4]='IMAGES/COSMETICS/PERFUMES/Guess Girl Perfume.jpg'

function changeImg(){
	document.slide.src=images[i];
	
	if(i<images.length-1){
		i++;
	}else{
		i=0;
	}
	
	setTimeout("changeImg()",time);
}
window.onload=changeImg;


function menu_list (message){
	Fashion
	Cosmetics
	}
function validation(){
	alert("All field required");
}
	