$(document).ready(function () {
    // Thêm class 'Doi' cho tất cả các ghế trong hàng H
    $('.seat.H > .chair').addClass('Doi');

    // Biến để lưu tổng tiền
    var totalPrice = 0;

    // Hàm cập nhật tổng tiền
    function updateTotalPrice() {
        $('#total-price').text(totalPrice.toLocaleString() + ' VND');
    }

    // Hàm cập nhật danh sách ghế đã chọn
    function updateSelectedSeats() {
        var selectedSeats = [];
        var selectedChairs = document.querySelectorAll('.DaChon');
        for (var i = 0; i < selectedChairs.length; i++) {
            selectedSeats.push(selectedChairs[i].textContent);
        }
        document.getElementById('selected-seats').textContent = selectedSeats.join(', ');
    }

    // Sự kiện click cho các ghế
    $('.seat > .chair').not('.DaDat').on('click', function () {
        $(this).toggleClass('DaChon');
        if ($(this).hasClass('DaChon')) {
            if ($(this).parent().hasClass('H')) {
                totalPrice += 160000;
            } else {
                totalPrice += 85000;
            }
        } else {
            if ($(this).parent().hasClass('H')) {
                totalPrice -= 160000;
            } else {
                totalPrice -= 85000;
            }
        }
        updateTotalPrice();
        updateSelectedSeats();
    });
    

    // Sự kiện click cho nút "Quay Lại"
    $('#back-button').on('click', function () {
        window.history.back();
    });

    // Sự kiện click cho nút "Thanh Toán"
    $('#pay-button').on('click', function () {
        alert('Xác nhận thanh toán cho các ghế: ' + $('#selected-seats').text() + '\nTổng tiền: ' + $('#total-price').text());
    });

    // Khởi tạo tổng tiền ban đầu
    updateTotalPrice();
});