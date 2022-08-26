
let mMenuOpener = document.querySelector(".m-menu-toggler span")
let mMenuClose = document.querySelector(".m-menu-close")
let mMenu = document.querySelector(".mobile-menu")
let body = document.querySelector("body")


mMenuOpener.addEventListener("click", function(){
	mMenu.style.right = "0%"
},true)

body.addEventListener("click", function(){
	mMenu.style.right = "-150%";
},true)

mMenuClose.addEventListener("click", function(){
	mMenu.style.right = "-150%";
},true)

mMenu.addEventListener("click", function(){
	mMenu.style.right = "0%";
},true);