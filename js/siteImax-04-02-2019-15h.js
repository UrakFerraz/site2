var hamburgerMenuBtnIn = document.querySelector('.hamburgerMenuBtnIn');
var hamburgerMenuBtnOut = document.querySelector('.hamburgerMenuBtnOut');
var hamburgerMenuWrapperIn = document.querySelector('.hamburgerMenuWrapperIn');
var hamburgerMenuWrapperOut = document.querySelector('.hamburgerMenuWrapperOut');
var linksWrapperHamburger = document.querySelector('.linksWrapperHamburger');
var totalWrapper = document.querySelector('.totalWrapper');
var closeSvgPath1 = document.querySelector('.closeSvgPath1');
var closeSvgPath2 = document.querySelector('.closeSvgPath2');


var video1WindowWrapper = document.querySelector('.video1WindowWrapper');
var video1WindowCloseSvg = document.querySelector('#video1WindowCloseSvg');
var playBtn = document.querySelector('.playBtn');
var video1 = document.querySelector('.video1');
var video1Boolean = false;


var video2WindowWrapper = document.querySelector('.video2WindowWrapper');
var video2WindowCloseSvg = document.querySelector('#video2WindowCloseSvg');
var playBtn1 = document.querySelector('.playBtn1');
var video2 = document.querySelector('.video2');
var video2Boolean = false;


var video3WindowWrapper = document.querySelector('.video3WindowWrapper');
var video3WindowCloseSvg = document.querySelector('#video3WindowCloseSvg');
var playBtn2 = document.querySelector('.playBtn2');
var video3 = document.querySelector('.video3');
var video3Boolean = false;


// hamburgerMenuBtn.addEventListener('click', function() {
// 	if (linksWrapperHamburger.classList.contains("displayGrid")) {
// 		linksWrapperHamburger.classList.remove("displayGrid");
// 	} else {
// 		linksWrapperHamburger.classList.add("displayGrid");
// 	}
// });





hamburgerMenuBtnIn.addEventListener('click', function() {
	linksWrapperHamburger.style.transform = 'translateX(0%)';
	hamburgerMenuWrapperIn.style.display = 'none';
	hamburgerMenuWrapperOut.style.display = 'block';
	totalWrapper.style.position = 'fixed';
});





hamburgerMenuBtnOut.addEventListener('click', function() {
		linksWrapperHamburger.style.transform = 'translateX(120%)';
		hamburgerMenuWrapperOut.style.display = 'none';
		hamburgerMenuWrapperIn.style.display = 'block';
		totalWrapper.style.position = 'absolute';
});


playBtn.addEventListener('click', function() {
	totalWrapper.style.position = 'fixed';
	video1WindowWrapper.style.display = 'flex';
	video1.play();
});


video1WindowCloseSvg.addEventListener('click', function() {
	totalWrapper.style.position = 'absolute';
	video1WindowWrapper.style.display = 'none';
	video1.pause();
});


playBtn1.addEventListener('click', function() {
	totalWrapper.style.position = 'fixed';
	video2WindowWrapper.style.display = 'flex';
	video1.play();
});


video2WindowCloseSvg.addEventListener('click', function() {
	totalWrapper.style.position = 'absolute';
	video2WindowWrapper.style.display = 'none';
	video1.pause();
});


playBtn2.addEventListener('click', function() {
	totalWrapper.style.position = 'fixed';
	video3WindowWrapper.style.display = 'flex';
	video2.play();
});


video3WindowCloseSvg.addEventListener('click', function() {
	totalWrapper.style.position = 'absolute';
	video3WindowWrapper.style.display = 'none';
	video2.pause();
});






window.addEventListener('load', function(){
    var newVideo = document.getElementById('videoDiv');
    newVideo.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    newVideo.play();

});


