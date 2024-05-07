const readMarker= document.querySelector(".title em");
const articles = Array.from(document.querySelectorAll("article"));
const newArticles = [];
const unreadMessagesNumber= document.querySelector("h2");

//console.log(articles);
for(let i=0;i<articles.length;i++){
	if(articles[i].classList.contains("new")){
		newArticles.push(articles[i]);
	}
}

readMarker.addEventListener("click",function(){
	for(let i=0;i<newArticles.length;i++){
		newArticles[i].classList.remove("new");
	}
	unreadMessagesNumber.textContent = 0;
});
