var imgNameArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
var index = 0;

$(document).ready(function(){


	var timer = setInterval(beginScroller, 5000);
	$('.scroller').attr("src", "images/scroll/1.jpg");

	//Page redirects
	$('#nav1').on('click', function(){
		window.location.replace('works.html');
	});

	$('#nav2').on('click', function(){
		window.location.replace('about.html');
	});

	$('#nav3').on('click', function(){
		window.location.replace('contact.html');
	});
});

function beginScroller(){
	var container = $('.scroller');
	container.fadeOut(800, function(){
		changeScrollerImage(container, index);
		container.fadeIn(800);
	});
	index++;
	if (index >= imgNameArray.length)
		index = 0;
}


function changeScrollerImage(container, index){
	var fileName = imgNameArray[index];
	var url = "images/scroll/" + fileName;
	//container.css("background-image", 'url('+ url +')');
	container.attr("src", url);

}