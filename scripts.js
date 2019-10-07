// Define all the errors in the page
var noicon = false;

// Output all SD errors into the console.
$(document).ready(function() {
    $(".sd-nav button").each(function() {
        noicon = false;
        if ($(this).data("icon") == undefined) {
            noicon = true;
        };
        if (noicon === true) {
            console.error("SD Error: No property \"data-icon\" on a button element in the navigation bar");
        }
    });
});
$(document).ready(function() {
    // Determine the navbar's background:
    var scrollHeight = $(document).scrollTop();
    var bodyHeight = parseInt($("body").css('height')) / 2;
    if (scrollHeight >= bodyHeight) {
        $(".sd-nav.show-header").removeClass('transparent');
    } else {
        $(".sd-nav.show-header").addClass('transparent');
    }
});
$(document).scroll(function(e) {
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
        var a = $(document).scrollTop() / 3;
        $(".sd-page-header").css('background-position', '0px ' + a + 'px');
    }
});
$(document).on('click', '.sd-nav button', function() {
    if ($(this).data("url") !== undefined) {
        window.location = $(this).data('url');
    }
});
var buttonshow = false;
$(document).ready(function() {
    $(".sd-nav").prepend('<button class="sd-show-options"><i class="fa fa-chevron-right"></i></button>');
}).on('click', '.sd-show-options', function() {
    var buttoncount = 0;
    $(".sd-nav-co").fadeOut(100);
    $(".sd-nav button:not(.sd-show-options)").fadeIn(1);
    if (buttonshow == false) {
        $(".sd-nav button:not(.sd-show-options)").each(function() {
                buttoncount++;
                $(this).data('originaltext', $(this).html());
                $(this).html("<i class='fa fa-" + $(this).data('icon') + "'></i>");
            buttonshow = true;
            $(".sd-nav button.sd-show-options").html('<i class="fa fa-chevron-left"></i>');
        });
        } else {
            $(".sd-nav button:not(.sd-show-options)").fadeOut(1);
            $(".sd-nav .sd-nav-co").fadeIn(100);
            $(".sd-nav button.sd-show-options").html('<i class="fa fa-chevron-right"></i>');
            $(".sd-nav button:not(.sd-show-options)").each(function() {
                $(this).html($(this).data('originaltext'))
                buttonshow = false;
            });
        }
    $(".sd-nav button").css('width', 'calc(99vw / ' + buttoncount + ' - 1px)');
});