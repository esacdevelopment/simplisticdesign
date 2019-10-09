// Define all the errors in the page
var noicon = false;

// Output all SD errors into the console.
$(document).ready(function () {
    $(".sd-nav button:not(.sd-show-side-nav)").each(function () {
        noicon = false;
        if ($(this).data("icon") == undefined) {
            noicon = true;
        };
        if (noicon === true) {
            console.error("SD Error: No property \"data-icon\" on a button element in the navigation bar");
        }
    });
}).on('click', 'body > *:not(.sd-side-nav)', function (e) {
    if (parseInt($('.sd-side-nav').css('left')) == 0) {
        if (parseInt($('body').css('width')) > 720) {
            $("body > *").css('filter', 'blur(0px)');
            $(".sd-side-nav").css('left', '-100vw');
        }
    }
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
$(document).on('click', '.sd-nav button, .sd-side-nav button', function () {
    if ($(this).data("url") !== undefined) {
        window.location = $(this).data('url');
    }
});
var buttonshow = false;
$(document).ready(function () {
    $(".sd-nav").prepend('<button class="sd-show-options"><i class="fa fa-chevron-down"></i></button>');
}).on('click', '.sd-show-options', function () {
    var buttoncount = 0;
    // $(".sd-nav-co").fadeOut(100);
    $(".sd-nav button, .sd-nav a.sd-nav-co").css('height', '50%');
    $(".sd-nav a.sd-nav-co").css('line-height', '12.5vh');
    $(".sd-nav").css('max-height', '25vh').css('height', '25vh').addClass('js-nav-open').children('.sd-show-options').css('height', '50%');
    $(".sd-nav button").css('display', 'inline-block');
    if (buttonshow === false) {
        showsidebarmobile();
        $(".sd-nav button:not(.sd-show-options):not(.sd-show-side-nav)").each(function () {
            buttoncount++;
            $(this).data('originaltext', $(this).html());
            if (!$(this).hasClass("sd-show-options")) {
                $(this).html("<i class='fa fa-" + $(this).data('icon') + "'></i>");
            }
        });
        buttonshow = true;
        $(".sd-nav button.sd-show-options i").css('transform', 'rotate(180deg)');
        $(".sd-nav button:not(.sd-show-options)").css('width', 'calc(100vw / (' + buttoncount + ')');
    } else {
        hidesidebarmobile();
        function waitasec() {
            $(".sd-nav a.sd-nav-co").css('line-height', '10vh');
            $(".sd-nav").css('max-height', '10vh').css('height', '10vh').removeClass('js-nav-open').children('button').css('height', '100%');
            $(".sd-nav button:not(.sd-show-options)").css('display', 'none');
            $(".sd-nav .sd-nav-co").fadeIn(100);
            $(".sd-nav button.sd-show-options i").css('transform', 'rotate(0deg)');
            $(".sd-nav button:not(.sd-show-options)").each(function () {
                $(this).html($(this).data('originaltext'))
                buttonshow = false;
            });
            $(".sd-nav button.sd-show-options").css('width', '30%').css('height', '100%');
        }
        setTimeout(waitasec, 300);
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
$(document).on('click', '.sd-side-nav-wrapper', function () {
    if (!$('.sd-side-nav').hasClass('open')) {
        // Close the navbar
    }
});
// Side Nav for desktop
$(document).on('click', '.sd-nav button.sd-show-side-nav', function () {
    $(".sd-side-nav").css('left', '0');
    $("body > *").css('filter', 'blur(5px) grayscale(100%)');
    $("body > .sd-side-nav").css('filter', 'none');
});
function showsidebarmobile() {
    $(".sd-side-nav").css('width', '100vw')
        .css('height', '75vh')
        .css('background', '#dddddd')
        .css('top', '-100vh')
        .css('z-index', '9999');
    function iminside() {
        $(".sd-side-nav").css('left', '0');
    }
    setTimeout(iminside, 200);
    function anotherone() {
        $(".sd-side-nav").css('top', '25vh');
    }
    setTimeout(anotherone, 400);
}
function hidesidebarmobile() {
    $(".sd-side-nav").css('top', '-1000vh');
    function waitformetohide() {
        $(".sd-side-nav").css('left', '-100vw')
            .css('height', '100vh')
            .css('background', '#fff')
            .css('z-index', '100000');
    }
    setTimeout(waitformetohide, 300);
    function manthisisialotoffuncctions() {
        $('.sd-side-nav').css('top', '0');
    }
    setTimeout(manthisisialotoffuncctions, 600);
}