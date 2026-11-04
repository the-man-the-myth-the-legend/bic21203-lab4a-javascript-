function changeMessage() {
     let p = document.getElementById("message");
	 p.innerHTML = "Hello there!";
	 
	 }
	 
	 let btn = document.getElementById("changeBtn");
	 
	 btn.addEventListener("click", changeMessage);