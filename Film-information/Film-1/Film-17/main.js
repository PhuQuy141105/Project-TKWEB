// Sự kiện cho nút choose time 
var timeItems = document.querySelectorAll('.time-item')
for ( var i = 0; i < timeItems.length; i++)
{
    timeItems[i].addEventListener('click', function() {
        for (let j = 0; j < timeItems.length; j++) {
            timeItems[j].classList.remove("selected");
        }
        // Thêm lớp selected cho phần tử được nhấp
        this.classList.add("selected");
    });
};

// Sự kiện trượt ảnh ở phần review
var reviewBox = document.querySelector('.review-box');
var reviewCard = document.querySelectorAll('.review-card');
var reviewCardLength = reviewCard.length;
let current = 0;
const ScrollLeft = function() {
    if ( current === reviewCardLength - 1)
    {   
        current = 0;
        reviewBox.style.transform = `translateX(${150 * -1 * current}px)`;
    }
    else {
        current++;
        reviewBox.style.transform = `translateX(${150 * -1 * current}px)`;
    }
}

var eventScroll = setInterval(ScrollLeft,3000);
var btnLeft = document.querySelector('.btn-left');
var btnRight = document.querySelector('.btn-right');

// Sự kiện cho nút phải 
btnRight.addEventListener('click', function() {
    clearInterval(eventScroll);
    ScrollLeft();
    eventScroll = setInterval(ScrollLeft,3000);
});

// Sự kiện cho nút  trái 
btnLeft.addEventListener('click', function() {
    clearInterval(eventScroll);
    if ( current === 0)
        {   
            current = reviewCardLength-1;
            reviewBox.style.transform = `translateX(${150 * -1 * current}px)`;
        }
    else 
        {
            current--;
            reviewBox.style.transform = `translateX(${150 * -1 * current}px)`;
        }
    eventScroll = setInterval(ScrollLeft,3000);
    
});

