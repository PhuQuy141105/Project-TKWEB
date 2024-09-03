// Hiệu ứng khi nhập thông tin
$(document).ready(function() {
    $('input').focus(function() {
        var label = $(this).siblings('label');
        label.addClass('on');
    });

    $('input').blur(function() {
        var label = $(this).siblings('label');
        if ($(this).val() === '') {
            label.removeClass('on');
        }
    });
});

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btn-login')
const closeIcon = document.querySelector('.close-icon')
registerLink.addEventListener('click' ,function() {
    wrapper.classList.add('on');

});
loginLink.addEventListener('click' ,function() {
    wrapper.classList.remove('on');
});
btnLogin.addEventListener('click', function() {
    wrapper.classList.add('appear');

});
closeIcon.addEventListener('click', function() {
    wrapper.classList.remove('appear');

});


