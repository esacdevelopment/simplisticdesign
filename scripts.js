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
    if (parseInt($("body").css('width')) > 720) {
        var a = $(document).scrollTop() / 3;
        $(".sd-page-header").css('background-position', '0px -' + a + 'px');
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
        $(".sd-nav button").each(function() {
                buttoncount++;
                $(this).html("<i class='fa fa-" + $(this).data('icon') + "'></i>");
            buttonshow = true;
            $(".sd-nav button.sd-show-options i").css("transform", 'rotate(180deg)');
        });
        } else {
            $(".sd-nav button:not(.sd-show-options)").fadeOut(1);
            $(".sd-nav .sd-nav-co").fadeIn(100);
            $(".sd-nav button.sd-show-options i").css('transform', 'rotate(0deg)');
            $(".sd-nav button").each(function() {
                switch ($(this).html().trim()) {
                    case '<i class="fa fa-home"></i>':
                        $(this).html('Home');
                        break;
                    case '<i class="fa fa-download"></i>':
                        $(this).html('Download');
                        break;
                    case '<i class="fa fa-info"></i>':
                        $(this).html('About');
                        break;
                    case '<i class="fa fa-user"></i>':
                        $(this).html('Creator');
                        break;
                    case '<i class="fa fa-phone"></i>':
                        $(this).html('Contact');
                        break;
                    case '<i class="fa fa-ellipsis-v"></i>':
                        $(this).html('Examples');
                        break;
                }
                buttonshow = false;
            });
        }
    $(".sd-nav button").css('width', 'calc(99vw / ' + buttoncount + ' - 1px)');
});