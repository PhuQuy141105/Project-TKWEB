$(document).ready(function() {
    $('.space-btn').click(function() {
        // Thay đổi lớp cho slide
        $('.slide').toggleClass('open');
        //Thay đổi nền blur cho body
        $('.overlay').toggleClass('active');
        // Thay đổi lớp cho spaceBtn
        $(this).toggleClass('open');
        //Xóa lớp blue cho body
    });
});

var searchBar = document.querySelectorAll('.search-bar');
var searchBar01 = document.querySelector('.search-bar-1');
var searchBar02 = document.querySelector('.search-bar-2');
var searchBox = document.querySelectorAll('.search-box');
var buttonSearch = document.querySelectorAll('.button-search');
var button01 = document.querySelector('.button-1');
var button02 = document.querySelector('.button-2');
var filmSelection01 = document.querySelector('.film-selection-1')
var filmSelection02 = document.querySelector('.film-selection-2')
//Chỉnh hiệu ứng cho thanh search
for ( let i = 0; i < searchBar.length; i++) {
    searchBar[i].onfocus = function() {
        searchBar[i].style.borderColor = "#dcd430";
        searchBar[i].style.boxShadow = "0 0 10px #dcd430";
        buttonSearch[i].style.color = "#dcd430";
        searchBox[i].style.width = "600px";
    }
    searchBar[i].onblur = function() {
        searchBar[i].style.borderColor = "white";
        searchBar[i].style.boxShadow = "none";
        buttonSearch[i].style.color = "#000336";
        searchBox[i].style.width = "200px";
    }
}

var videoItems = document.querySelectorAll('.video-item');
var closeIcons = document.querySelectorAll('.close-icon');
var trailers = document.querySelectorAll('.trailer');
var overlayVideo = document.querySelector('.overlay-video');
// Thêm sự kiện click cho tất cả các trailer
    for (let i = 0; i < trailers.length; i++) {
        trailers[i].addEventListener('click', function() {
            videoItems[i].classList.add('on');
            closeIcons[i].classList.add('on');
            overlayVideo.classList.add('on');
        });
    }

// Thêm sự kiện click cho tất cả các nút đóng
    for (let i = 0; i < closeIcons.length; i++) {
        closeIcons[i].addEventListener('click', function() {
            videoItems[i].classList.remove('on');
            overlayVideo.classList.remove('on');
            closeIcons[i].classList.remove('on');
        });
    }

// Thêm sự kiện tìm kiếm-1 ( dành cho khung phim đang chiếu )
 button01.addEventListener('click', function() {
    var searchValue = searchBar01.value.toLowerCase(); 
    var filmItems = document.querySelectorAll('#film-showing .film-item');
        for (var i = 0; i < filmItems.length; i++) {
            var h2 = filmItems[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
                if (h2.indexOf(searchValue) >= 0) {
                    filmItems[i].style.border = "2px solid white"; 
                } 
                else {
                    filmItems[i].style.display = "none"; 
                }
        }
        button01.style.borderColor = "#dcd430";
        button01.style.color = "#dcd430";
        filmSelection01.style.height ="600px";
});

// Thêm sự kiện tìm kiếm-2  ( dành cho khung phim sắp chiếu )
button02.addEventListener('click', function() {
    var searchValue = searchBar02.value.toLowerCase(); 
    var filmItems = document.querySelectorAll('#film-upcoming .film-item');
        for (var i = 0; i < filmItems.length; i++) {
            var h2 = filmItems[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
                if (h2.indexOf(searchValue) >= 0) {
                    filmItems[i].style.border = "2px solid white"; 
                } 
                else {
                    filmItems[i].style.display = "none"; 
                }
        }
        button02.style.borderColor = "#dcd430";
        button02.style.color = "#dcd430";
        filmSelection02.style.height ="600px";

});



