// Define all the errors in the page
var noicon = false;

// Output all SD errors into the console.
$(document).ready(function () {
    $(".sd-nav button").each(function () {
        noicon = false;
        if ($(this).data("icon") == undefined) {
            noicon = true;
        };
        if (noicon === true) {
            console.error("SD Error: No property \"data-icon\" on a button element in the navigation bar");
        }
    });
});
$(document).ready(function () {
    // Determine the navbar's background:
    var scrollHeight = $(document).scrollTop();
    var bodyHeight = parseInt($("body").css('height')) / 2;
    if (scrollHeight >= bodyHeight) {
        $(".sd-nav.show-header").removeClass('transparent');
    } else {
        $(".sd-nav.show-header").addClass('transparent');
    }
});
$(document).scroll(function (e) {
    // Determine the navbar's background:
    var scrollHeight = $(document).scrollTop();
    var bodyHeight = parseInt($("body").css('height')) / 3;
    if (scrollHeight >= bodyHeight) {
        $(".sd-nav.show-header").removeClass('transparent');
    } else {
        $(".sd-nav.show-header").addClass('transparent');
    }
    // Parallax effect
    //parseInt($("body").css('width')) > 720 && -- might need to add to the following if statement
    if (!$(".sd-page-header").hasClass("sd-no-parallax")) {
        var a = $(document).scrollTop() / 2;
        $(".sd-page-header").css('background-position', '0px ' + a + 'px');
    }
});
$(document).on('click', '.sd-nav button', function () {
    if ($(this).data("url") !== undefined) {
        window.location = $(this).data('url');
    }
});
var buttonshow = false;
$(document).ready(function () {
    $(".sd-nav").prepend('<button class="sd-show-options"><i class="fa fa-chevron-right"></i></button>');
}).on('click', '.sd-show-options', function () {
    var buttoncount = 0;
    $(".sd-nav-co").fadeOut(100);
    $(".sd-nav button").css('display', 'inline-block');
    if (buttonshow === false) {
        $(".sd-nav button").each(function () {
            buttoncount++;
            $(this).data('originaltext', $(this).html());
            if (!$(this).hasClass("sd-show-options")) {
                $(this).html("<i class='fa fa-" + $(this).data('icon') + "'></i>");
            }
        });
        buttonshow = true;
        $(".sd-nav button.sd-show-options i").css('transform', 'rotate(180deg)');
        $(".sd-nav button").css('width', 'calc(100vw / (' + buttoncount + ')');
    } else {
        $(".sd-nav button:not(.sd-show-options)").css('display', 'none');
        $(".sd-nav .sd-nav-co").fadeIn(100);
        $(".sd-nav button.sd-show-options i").css('transform', 'rotate(0deg)');
        $(".sd-nav button:not(.sd-show-options)").each(function () {
            $(this).html($(this).data('originaltext'))
            buttonshow = false;
        });
        $(".sd-nav button.sd-show-options").css('width', '30%');
    }
    $(".sd-nav").css('width', '100%');
});
$(window).resize(function () {
    var size = parseInt($("body").css('width'));
    if (size > 720) {
        $(".sd-nav button").css('display', 'inline-block').css('width', 'auto');
        $(".sd-nav button.sd-show-options").fadeOut(1);
    } else {
        $(".sd-nav button").css('display', 'none');
        $(".sd-nav button.sd-show-options").fadeIn(100);
    }
});