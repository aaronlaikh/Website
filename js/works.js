//var imgNameArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
var imgNameArray = ["2.jpg", "5.jpg"];

var index = 0;

$(document).ready(function(){

	loadThumbnails();

	//page redirect
	$('#works').on('click', function(){
		window.location.replace('works.html');
	});

	$('#about').on('click', function(){
		window.location.replace('about.html');
	});

	$('#contact').on('click', function(){
		window.location.replace('contact.html');
	});
	
	$('.top-name').on('click', function(){
		window.location.replace('index.html');
	});

	$('.thumbnail').on('click', function(){
		openModal();
		focusImage($(this));
	});

	$('.modal-exit').on('click', function(){
		closeModal();
	});
});

//Run this on page load to populate the works page with thumbnails.
function loadThumbnails(){
	var content = $('.content');
	for (var index in imgNameArray)
	{
		var newDiv = $(
			'<div class="thumbnail"></div>');
		newDiv.attr("id", index);
		newDiv.attr("desc", "asdf");
		newDiv.attr("url", imgNameArray[index]);
		setThumbImage(newDiv, imgNameArray[index]);

		content.append(newDiv);
	}
}

function setThumbImage(div, imgurl)
{
	div.css("background-image", 'url("./images/thumbs/'+ imgurl +'")');
}

function focusImage(thumb){
	var imgurl = thumb.attr('url');
	var modal = $('.modal-content');

	var newDiv = $(
		'<div class="modal-img"></div>');
	var divImg = $('<img class="full-img"></img>');
	divImg.attr("src", "./images/full/"+ imgurl);
	newDiv.append(divImg);
	modal.append(newDiv);
}

function openModal(){
	$('.modal').show();
}

function closeModal(){
	$('.modal-content').empty();
	$('.modal').hide();

}
