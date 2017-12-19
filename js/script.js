function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isPhone(phone) {
    var regex = /^\d{11}$/;
    return regex.test(phone);
}

$(function () {
    var nameError = true,
        companyError = true,
        emailError = true,
        phoneError = true,
        msgError = true;

    $('.name').blur(function () {
        if ($(this).val().length < 4) {
            $(this).css('border', '1px solid #F00');
            nameError = true;
        } else {
            $(this).css('border', '1px solid #080');
            nameError = false;
        }
    });

    $('.company').blur(function () {
        if ($(this).val().length < 3) {
            $(this).css('border', '1px solid #F00');
            companyError = true;
        } else {
            $(this).css('border', '1px solid #080');
            companyError = false;
        }
    });

    $('.email').blur(function () {
        if (!isEmail($(this).val())) {
            $(this).css('border', '1px solid #F00');
            emailError = true;
        } else {
            $(this).css('border', '1px solid #080');
            emailError = false;
        }
    });

    $('.phone').blur(function () {
        if (!isPhone($(this).val())) {
            $(this).css('border', '1px solid #F00');
            phoneError = true;
        } else {
            $(this).css('border', '1px solid #080');
            phoneError = false;
        }
    });

    $('.message').blur(function () {
        if ($(this).val().length < 3) {
            $(this).css('border', '1px solid #F00');
            msgError = true;
        } else {
            $(this).css('border', '1px solid #080');
            msgError = false;
        }
    });

    $('.contact-form').submit(function (e) {
        $('.name, .company, .email, .phone, .message').blur();

        if (nameError || companyError || emailError || phoneError || msgError) {
            swal({
                title: "Inavalid inputs!",
                text: "Please fill inputs with the right value",
                icon: "error",
            });
        } else {
            swal({
                title: "Success!",
                text: "Thank you for contactiong us",
                icon: "success",
            });
        }
        e.preventDefault();
    });

    $('.scroll-to').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    (function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().fadeIn(1000).addClass('active');
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).fadeIn(1000).addClass('active');
                    autoSlider();
                });
            }
        });
    }());

});
s