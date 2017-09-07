window.onload = function(){
	var slidePagesContainer = document.getElementById("slidePagesContainer"),
	    slidePagesPaginations = document.getElementById("slidePagesPaginations"),
	    slidePagePagination = slidePagesPaginations.getElementsByTagName("a"),
	    len = slidePagePagination.length,
	    next = document.getElementById("arrow"),
	    index = 0;
	function switchPage(){
		var x = -index*100+"%";
		console.log(x);
		next.style.display = "block";
		if(index == len-1){
			console.log(index);
			next.style.display = "none";
		}
		for(i = 0; i < len; i++){
			slidePagePagination[i].getElementsByTagName("i")[0].className = "circle";
			slidePagesContainer.style.transform = "translate3d(0, 0, 0)";
		}
		slidePagePagination[index].getElementsByTagName("i")[0].className = "circle active";
		slidePagesContainer.style.transform = "translate3d(0, " + x + ", 0)";
		slidePagesContainer.style.transition = "700ms ease";
	}
	for(i = 0; i < len; i++){
		slidePagePagination[i].id = i;
		slidePagePagination[i].onclick = function(){
			index = this.id;
			switchPage();
		}
	}
	next.onclick = function(){
		index++;
		if(index == len){
			index = 0;
		}
		switchPage();
	}
}