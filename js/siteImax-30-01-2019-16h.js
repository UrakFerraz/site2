var hamburgerMenuBtnIn = document.querySelector('.hamburgerMenuBtnIn');
var hamburgerMenuBtnOut = document.querySelector('.hamburgerMenuBtnOut');
var hamburgerMenuWrapperIn = document.querySelector('.hamburgerMenuWrapperIn');
var hamburgerMenuWrapperOut = document.querySelector('.hamburgerMenuWrapperOut');
var linksWrapperHamburger = document.querySelector('.linksWrapperHamburger');




// hamburgerMenuBtn.addEventListener('click', function() {
// 	if (linksWrapperHamburger.classList.contains("displayGrid")) {
// 		linksWrapperHamburger.classList.remove("displayGrid");
// 	} else {
// 		linksWrapperHamburger.classList.add("displayGrid");
// 	}
// });



hamburgerMenuBtnIn.addEventListener('click', function() {
	linksWrapperHamburger.style.display = 'grid'
	setTimeout(linksWrapperHamburger.style.transform = 'translateX(0%)', 100);
	hamburgerMenuWrapperIn.style.display = 'none';
	hamburgerMenuWrapperOut.style.display = 'block';
});




hamburgerMenuBtnOut.addEventListener('click', function() {
		linksWrapperHamburger.style.transform = 'translateX(120%)';
		hamburgerMenuWrapperOut.style.display = 'none';
		hamburgerMenuWrapperIn.style.display = 'block';
});


