let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news(){
	list.innerHTML = list.innerHTML + `
	<div class="news">
		<h2>${title.value}</h2>
		<p>${content.value}</p><hr>		
	</div>	
	`;
	title.value = "";
	content.value = "";
}let i=0, imgArr=new Array(); 
imgArr[0] = "https://stickershop.line-scdn.net/stickershop/v1/product/7834/LINEStorePC/main.png;compress=true";
imgArr[1] = "https://stickershop.line-scdn.net/stickershop/v1/product/6310/LINEStorePC/main.png;compress=true";
imgArr[2] = "https://stickershop.line-scdn.net/stickershop/v1/product/16339/LINEStorePC/main.png;compress=true";

function showImg() {
  document.getElementById('icon').src = imgArr[i]; 
  i = (i+1) % 3;  
} 

function show() { 
  setInterval(showImg, 1500);  
}