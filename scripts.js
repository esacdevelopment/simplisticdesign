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
        $("sd-opts button").each(function () {
            if ($(this).hasClass('sd-button-ripple')) {
                $(this).removeClass('sd-button-ripple');
                console.error("SD Error: Select options do not support the ripple effect as of now");
            }
        });
    });
});
$(document).ready(function () {
    // Determine the navbar's background:
    var scrollHeight = $(document).scrollTop();
    var bodyHeight = parseInt($("body").css('height')) / 3;
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
        $(".sd-page-header").css('background-position-y', a + 'px');
    }
});
$(document).on('click', '.sd-nav button', function () {
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
        $(".sd-nav button:not(.sd-show-options)").css('width', 'calc(97vw / ' + buttoncount + '');
    } else {
        if ($(".sd-side-nav").length) {
            hidesidebarmobile();
            function waitasec() {
                $(".sd-nav a.sd-nav-co").css('line-height', '10vh');
                $(".sd-nav").css('max-height', '10vh').css('height', '10vh').removeClass('js-nav-open').children('button').css('height', '100%');
                $(".sd-nav button:not(.sd-show-options)").css('display', 'none');
                $(".sd-nav .sd-nav-co").fadeIn(100);
                $(".sd-nav button.sd-show-options i").css('transform', 'rotate(0deg)');
                $(".sd-nav button:not(.sd-show-options)").each(function () {
                    $(this).html($(this).data('originaltext'));
                    buttonshow = false;
                });
                $(".sd-nav button.sd-show-options").css('width', '30%').css('height', '100%');
            }
            setTimeout(waitasec, 300);
        } else {
            $(".sd-nav a.sd-nav-co").css('line-height', '10vh');
            $(".sd-nav").css('max-height', '10vh').css('height', '10vh').removeClass('js-nav-open').children('button').css('height', '100%');
            $(".sd-nav button:not(.sd-show-options)").css('display', 'none');
            $(".sd-nav .sd-nav-co").fadeIn(100);
            $(".sd-nav button.sd-show-options i").css('transform', 'rotate(0deg)');
            $(".sd-nav button:not(.sd-show-options)").each(function () {
                $(this).html($(this).data('originaltext'));
                buttonshow = false;
            });
            $(".sd-nav button.sd-show-options").css('width', '30%').css('height', '100%');
        }
    }
    $(".sd-nav").css('width', '100%');
});
$(window).resize(function () {
    var size = parseInt($("body").css('width'));
    if (size > 720) {
        $(".sd-nav button:not(.sd-show-side-nav)").css('display', 'inline-block').css('width', 'auto');
        $(".sd-nav button.sd-show-options").fadeOut(1);
    } else {
        $(".sd-nav button:not(.sd-show-side-nav)").css('display', 'none');
        $(".sd-nav button.sd-show-options").fadeIn(100);
    }
});
// Side Nav for desktop
$(document).on('click', '.sd-nav button.sd-show-side-nav', function () {
    $(".sd-side-nav").css('left', '0');
    $("body > *").css('filter', 'blur(5px)');
    if ($("body").hasClass('sd-dark-theme')) {
        $("body > *").css('filter', 'blur(5px) grayscale(60%)');
    }
    $("body > .sd-side-nav").css('filter', 'none');
});
function showsidebarmobile() {
    $(".sd-side-nav").css('width', '100vw')
        .css('height', '75vh')
        .css('top', '25vh')
        .css('z-index', '9999')
    function iminside() {
        $(".sd-side-nav").css('left', '0vw');
    }
    setTimeout(iminside, 200);
}
function hidesidebarmobile() {
    $(".sd-side-nav").css('top', '-102vh');
    function waitformetohide() {
        $(".sd-side-nav").css('left', '-100vw')
            .css('height', '100vh')
            .css('z-index', '100000');
    }
    setTimeout(waitformetohide, 300);
    function manthisisialotoffuncctions() {
        $('.sd-side-nav').css('top', '0');
    }
    setTimeout(manthisisialotoffuncctions, 600);
}
// The scripts so far have been for the main page for Simplistic Design, not for all the elements. This marks the beginning of the section for all the elements on the "examples.html" page
// Side Nav Dropdown menu
$(document).ready(function () {
    $('.sd-side-nav button').each(function () {
        if ($(this).data('menu') !== undefined) {
            $(this).append('<span class="sd-js-drop-icon"><i class="fa fa-chevron-down"></i></span>').addClass('sd-js-dropdown');
        }
    });
});
// Side Nav Menus
$(document).on('click', '.sd-side-nav button', function () {
    if ($(this).data('menu') !== undefined) {
        var openMe = $(this).data('menu');
        var buttonCount = 0;
        if ($("div.sd-side-nav-menu#" + openMe).css('height') == "0px") {
            $("div.sd-side-nav-menu#" + openMe + ' button').each(function () {
                buttonCount++;
            });
            buttonCount = buttonCount * 8;
            $("div.sd-side-nav-menu#" + openMe).css('height', buttonCount + 'vh');
            $(this).addClass('js-menuopen').children('span').children('i').css('transform', 'rotate(180deg)');
        } else {
            $("div.sd-side-nav-menu#" + openMe).css('height', '0px');
            $(this).removeClass('js-menuopen').children('span').children('i').css('transform', 'rotate(0deg)');
        }
    }
});
// Dialogs

function createDialog(dialogid, header, message, buttons, actions) {
    var id = dialogid;
    var btns = buttons;
    var head = header;
    var msg = message;
    $('body').append('<div class="sd-dialog" id="' + id + '"><div class="sd-dialog-header">' + head + '<button class="sd-dialog-close"><i class="fa fa-close"></i></button></div><div class="sd-dialog-message">' + msg + '</div><div class="sd-dialog-footer"></div></div>');
    if (actions !== undefined) {
        var acts = actions;
        for (var i = 0; i < btns.length; i++) {
            if (acts[i] !== "none") {
                $("#" + id + " .sd-dialog-footer").append('<button class="sd-button sd-button-ripple" onclick="' + acts[i] + '">' + btns[i] + '</button>');
            } else {
                $('#' + id + ' .sd-dialog-footer').append('<button class="sd-button sd-button-ripple">' + btns[i] + '</button>');
            }
        }
    } else {
        for (var i = 0; i < btns.length; i++) {
            $('#' + id + ' .sd-dialog-footer').append('<button class="sd-button sd-button-ripple">' + btns[i] + '</button>');
        }
    }
}
function showDialog(showid) {
    var dialogID = showid;
    $(".sd-dialog#" + dialogID).css('transform', 'scale(1)');
    $("body > *:not(.sd-dialog)").css('filter', 'blur(10px)');
    $("body, html").css('overflow: hidden');
    if ($("body").hasClass('sd-dark-theme')) {
        $("body > *:not(.sd-dialog)").css('filter', 'blur(10px) grayscale(60%)');
    }
};
function hideDialog(hideid) {
    var dialogId = hideid;
    $(".sd-dialog#" + dialogId).css('transform', 'scale(0)');
    $("body > *:not(.sd-dialog)").css('filter', 'blur(0px) grayscale(0%)');
}
$(document).on('click', '.sd-dialog-close', function () {
    $("body > *:not(.sd-dialog)").css('filter', 'blur(0px)');
    $(this).parent().parent().css('transform', 'scale(0)');
});

var buttonid = 0;
var activerips = [];
var buttonheight = 0;
$(document).on('mousedown touchdown', 'button.sd-button-ripple', function (e) {
    buttonid++;
    buttonheight = Math.max(
        parseInt($(this).css('height')),
        parseInt($(this).css('width'))
    ) * 3;
    var ex = e.clientX - $(this).offset().left - buttonheight / 2;
    var why = e.pageY - $(this).offset().top - buttonheight / 2;
    $(this).append('<div class="sd-js-ripple" id="' + buttonid + '"></div>');
    $(".sd-js-ripple#" + buttonid).css('top', why + 'px').css('left', ex + 'px').css('height', buttonheight + 'px').css('width', buttonheight + 'px');
    function h() {
        $(".sd-js-ripple#" + buttonid).css('transform', 'scale(1)');
    } setTimeout(h, 1);
    activerips.push(buttonid);
}).on('mouseup touchup', '*', function (e) {
    for (var r = 0; r < activerips.length; r++) {
        $(".sd-js-ripple#" + activerips[r]).css('opacity', '0');
        removeRipple(activerips[r]);
    }
});
function removeRipple(ripid) {
    function afterasecond() {
        $(".sd-js-ripple#" + ripid).remove();
    }
    setTimeout(afterasecond, 300);
}
$(document).on('click', '.sd-side-nav button', function () {
    if ($(this).data('url') !== undefined) {
        $("body, html").animate({
            scrollTop: $($(this).data('url')).offset().top - 80
        }, 300)
        if ($("body").width() > 720) {
            $(".sd-side-nav").css("left", '-100vw');
            $("body > *").css("filter", 'blur(0px)');
        }
    }
    if ($(this).parent().hasClass('sd-side-nav-menu')) {
        $(this).parent().css('height', '0');
        var id = $(this).parent().prop('id');
        $(".sd-side-nav button[data-menu='" + id + "']").removeClass('js-menuopen').children('span').children('i').css('transform', 'rotate(0deg)');
    }
});
$(document).on("focus", '.sd-input-wrapper input', function () {
    var thisid = $(this).prop('id');
    if ($(".sd-input-wrapper label[for=" + thisid + "]").length) {
        $(".sd-input-wrapper label[for=" + thisid + "]").css('top', '-15px').css('left', '8px').css('font-size', '0.8em');
        if ($(this).parent().hasClass('sd-accent')) {
            $(".sd-input-wrapper label[for=" + thisid + "]").css('color', '#ff69b4');
        } else {
            if (!$("body").hasClass('sd-dark-theme')) {
                $(".sd-input-wrapper label[for=" + thisid + "]").css('color', '#2c67e3');
            } else {
                $(".sd-input-wrapper label[for=" + thisid + "]").css('color', '#20add8');
            }
        }
    }
}).on('blur', '.sd-input-wrapper input', function () {
    var thisid = $(this).prop('id');
    if ($(this).val() == "") {
        if ($(".sd-input-wrapper label[for=" + thisid + "]").length) {
            $(".sd-input-wrapper label[for=" + thisid + "]").css('top', '12px').css('color', '#888').css('left', '16px').css('font-size', '1em');
        }
    } else {
        $(".sd-input-wrapper label[for=" + thisid + "]").css('color', '#888');
    }
});
var btncnt = 0;
var settheheightto = 0;
// Select Boxes 
$(document).on('click', 'body *:not(.wrapper)', function (e) {
    e.stopPropagation();
    if (!$(this).hasClass('sd-js-select')) {
        $("sd-opts").css('height', '0').css('overflow', 'hidden');
        $("sd-select").removeClass('sd-js-menuopen');
    }
});
var seltop;
$(document).on('click', 'sd-select', function () {
    btncnt = 0;
    var off = 0;
    var menu = $("sd-opts#opts_" + $(this).data('select'));
    if (menu.length) {
        $(this).addClass('sd-js-menuopen');
        menu.children("button").each(function () {
            btncnt++;
            if ($(this).hasClass('opt-selected')) {
                off = btncnt - 1;
                sel = true;
            }
            if (sel = false) {
                menu.children('button:first-of-type').addClass('opt-selected');
            }
        });
        var height = Math.ceil(parseInt(menu.children('button:first-of-type').css('height')));
        settheheightto = btncnt * height;
        menu.css('height', settheheightto + 'px');
    }
    var x = $(this).offset().left;
    var y = $(this).offset().top - (off * height);

    menu.css('left', x).css('top', y);
    if (settheheightto + y - $(document).scrollTop() > $(window).height()) {
        var calc = y - settheheightto + (off + 1) * height;
        menu.css('top', calc);
    }
    if (parseInt(menu.css('top')) - $(document).scrollTop() < 0) {
        seltop = parseInt($(this).offset().top) - $(document).scrollTop();
        menu.css('height', seltop + 'px').css('top', $(document).scrollTop()).css('overflow', 'auto');
        if (seltop < height * 5) {
            if (btncnt >= 5) {
                menu.css('height', height * 5);
            } else {
                menu.css('height', height * btncnt);
            }
        }
    }
});

$(document).ready(function () {
    $("sd-select").each(function () {
        var id = $(this).data('select'); // cars
        $("body").append('<sd-opts id="opts_' + id + '"></sd-opts>'); // add custom sd-opts element
        $("select#" + id + " option").each(function () { // for each option in the actual select, 
            $(this).parent().css('display', 'none'); // Hide the select element
            var val = $(this).attr('value'); // get the value of the select option
            $("sd-opts#opts_" + id).append('<button data-value="' + val + '">' + $(this).html() + '</button>'); // add the button to the custom opts element
        });
    });
});
$(document).on('click', 'sd-opts button', function () {
    var btnval = $(this).html();
    var id = $(this).parent().prop('id');
    var optval = $(this).data('value');
    var setid = id.replace('opts_', '');
    $(this).parent().children('button').removeClass('opt-selected');
    $(this).addClass('opt-selected');
    $("sd-select[data-select='" + setid + "']").html(btnval + "<i class='fa fa-chevron-down'></i>").attr('data-val', btnval);
    $(this).parent().css('height', '0');
    // Set the actual select value
    $("select#" + setid).val(optval);
});
$(document).ready(function () {
    var btnsetvalofselect = false;
    $("sd-select").each(function () {
        var h = $(this).css('height');
        var menu = $("sd-opts#opts_" + $(this).data('select'));
        if (menu.length) {
            var w = parseInt(menu.css('width'));
            menu.css('width', parseInt(menu.css('width')) + 16 + 'px');
            $(this).css('width', w + 'px');
            menu.children('button').each(function () {
                if ($(this).hasClass('opt-selected')) {
                    btnsetvalofselect = true;
                }
            });
            if (btnsetvalofselect === false) {
                menu.children('button:first-of-type').addClass('opt-selected');
            }
            $(this).html(menu.children('button.opt-selected').html());
            menu.children('button').css('height', parseInt(h) + 16 + 'px');
        }
    });
});
$(document).ready(function () {
    $("sd-select").append('<i class="fa fa-chevron-down"></i>');
});
$(document).ready(function () {
    if (!$(".sd-page-header").length) {
        $(".wrapper").css('padding-top', '80px');
    }
});
$(document).on('click', '*:not(.sd-side-nav):not(.sd-side-nav button):not(.sd-side-nav *)', function (e) {
    if (parseInt($('.sd-side-nav').css('left')) == 0) {
        if (parseInt($('body').css('width')) > 720) {
            $("body > *").css('filter', 'blur(0px)');
            $(".sd-side-nav").css('left', '-100vw');
        }
    }
});
// Checkboxes
$(document).ready(function () {
    $("input[type=checkbox]").each(function () {
        var sdbox = $("sd-checkbox[data-box=" + $(this).attr('name') + "]");
        if (sdbox.length) {
            $(this).css('display', 'none');
            sdbox.append('<i class="fa fa-check"></i>').children('i').css('opacity', '0');
            if ($(this).prop('checked') === true) {
                sdbox.addClass('sd-box-checked');
                sdbox.children('i').css('opacity', '1');
                if (sdbox.parent(".sd-remove").length) {
                    sdbox.parent('.sd-remove').children('span').addClass('sd-js-removed');
                }
            }
        }
    });
}).on('click', 'sd-checkbox, sd-checkbox i', function () {
    if ($(this).hasClass('fa')) {
        var check = $("input[type=checkbox][name=" + $(this).parent().data('box') + "]");
        if (check.length) {
            if ($(this).parent().hasClass('sd-box-checked')) {
                $(this).parent().removeClass('sd-box-checked').children('i').css('opacity', '0');
                check.attr('checked', false);
                if ($(this).parent().parent(".sd-remove").length) {
                    $(this).parent().parent().children('span').removeClass('sd-js-removed');
                }
            } else {
                $(this).parent().addClass('sd-box-checked').children('i').css('opacity', '1');
                check.attr('checked', true);
                if ($(this).parent().parent(".sd-remove").length) {
                    $(this).parent().parent().children('span').addClass('sd-js-removed');
                }
            }
        }
    } else {
        var check = $("input[type=checkbox][name=" + $(this).data('box') + "]");
        if (check.length) {
            if ($(this).hasClass('sd-box-checked')) {
                $(this).removeClass('sd-box-checked').children('i').css('opacity', '0');
                check.attr('checked', false);
                if ($(this).parent(".sd-remove").length) {
                    $(this).parent().children('span').removeClass("sd-js-removed");
                }
            } else {
                $(this).addClass('sd-box-checked').children('i').css('opacity', '1');
                check.attr('checked', true);
                if ($(this).parent(".sd-remove").length) {
                    $(this).parent().children('span').addClass('sd-js-removed');
                }
            }
        }
    }
});
// Radio Inputs
$(document).ready(function () {
    $("input[type=radio]").each(function () {
        var sdradio = $("sd-radio[data-radio='" + $(this).prop('id') + "']");
        if (sdradio.length) {
            $(this).css('display', 'none');
            if ($(this).is(':checked')) {
                sdradio.addClass('sd-radio-selected');
            }
            var innercircle = $(this).children('sd-radio-circle');
            if (!innercircle.length) {
                sdradio.append('<sd-radio-circle></sd-radio-circle>');
            }
        }
    });
}).on('click', 'sd-radio', function () {
    var actualradio = $("input[type=radio]#" + $(this).data('radio'));
    if (actualradio.length) {
        var name = actualradio.attr('name');
        var c = false;
        $("input[type=radio][name=" + name + "]").each(function () {
            if ($(this).attr('checked') == "checked") {
                c = true;
            }
        });
        if (c === true) {
            $("input[type=radio][name='" + name + "']").attr('checked', false);
        }
        $("sd-radio[data-radio-group='" + name + "']").removeClass('sd-radio-selected');
        $(this).addClass('sd-radio-selected');
        $("input[type=radio]#" + $(this).data('radio')).attr('checked', true);
    }
});
$(document).on('click', 'button i.fa, sd-select i', function () {
    $(this).parent().click();
}).on('click', '.sd-side-nav button span i', function () {
    $(this).parent().parent().click();
});