//function to change on scroll 
var prevScrollpos = window.pageYOffset;
var navLinkNew = document.querySelectorAll(".navlink");

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  let y = window.matchMedia("(min-width: 768px)");
  var navLinks = document.querySelectorAll(".navlink");  
  if (prevScrollpos > 300) {  
	document.getElementById("myTopnav").style.backgroundColor = "white";
	if (y.matches) {
			navLinks.forEach(navLink => {
			navLink.style.color = "pink";
		});
	} else {
			navLinks.forEach(navLink => {
			navLink.style.color = "white";
		});
	}
  } else {
	document.getElementById("myTopnav").style.backgroundColor = "transparent";
	navLinks.forEach(navLink => {
		navLink.style.color = "white";
	});
  }; 
  
  prevScrollpos = currentScrollPos;
};



//function to close Nav
function openNav() {
	let x = window.matchMedia("(max-width: 768px)");
	function myFunction(x) {
		if (x.matches) {
			document.getElementById("myNav").style.width = "250px";
			//document.body.style.backgroundColor = "green";
		} else {
			document.getElementById("myNav").style.width = "100%";
			//document.body.style.backgroundColor = "blue";
		}
	}
	myFunction(x);
	x.addListener(myFunction);
} 

//function to open Nav
function closeNav() {
	let x = window.matchMedia("(max-width: 768px)");
	function myFunction(x) {
		if (x.matches) {
			document.getElementById("myNav").style.width = "0";
			//document.body.style.backgroundColor = "green";
		} else {
			document.getElementById("myNav").style.width = "100%";
			//document.body.style.backgroundColor = "blue";
		}
	}
	myFunction(x);
	x.addListener(myFunction);
} 