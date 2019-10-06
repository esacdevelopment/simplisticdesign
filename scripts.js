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
    var a = $(document).scrollTop() / 3;
    $(".sd-page-header").css('background-position', '0px -' + a + 'px');
});
$(document).on('click', '.sd-nav button', function() {
    if ($(this).data("url") !== undefined) {
        window.location = $(this).data('url');
    }
});
$(document).ready(function() {
    $(".sd-nav").prepend('<button class="sd-show-options"><i class="fa fa-chevron-right"></i></button>');
}).on('click', '.sd-show-options', function() {
    var buttoncount = 0;
    $(".sd-nav-co, .sd-show-options").fadeOut(100);
    $(".sd-nav button:not(.sd-show-options)").each(function() {
        buttoncount++;
        switch ($(this).html().trim()) {
            case "Home":
                $(this).html('<i class="fa fa-home"></i>');
                break;
            case "Download":
                $(this).html('<i class="fa fa-download"></i>');
                break;
            case "About":
                $(this).html('<i class="fa fa-info-circle"></i>');
                break;
            case "Creator":
                $(this).html('<i class="fa fa-user-circle"></i>');
                break;
            case "Contact":
                $(this).html('<i class="fa fa-phone"></i>');
                break;
            case "Examples":
                $(this).html('<i class="fa fa-ellipsis-v"></i>');
                break;
        }
    });
    $(".sd-nav button").css('width', 'calc(99vw / ' + buttoncount + ' - 4px)');
});