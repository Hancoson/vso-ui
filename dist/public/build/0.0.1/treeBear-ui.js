/* 
 *@name: TreeBear UI
 *@author: Hancoson <hancoson@163.com>
 *@version: 0.0.1
 *@date: 11-08-2015
*/
/**
 * Created by Guoxing.han on 2015/8/10 0010.
 */
$.fn.extend({
    collapse: function () {
        //alert("自定义的函数");
    }
});
$(function () {
    var goTop = {
        init: function () {
            this.eventHandler();
        }
    }
    $.extend(goTop, {
        eventHandler: function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= 100) {
                    $('#TB_goTop').fadeIn(300);
                }else{    
                    jQuery('#TB_goTop').fadeOut(300);    
                }  
            });
            $('#TB_goTop,.TB_goTop').click(function () {
                $('html,body').animate({
                    scrollTop: '0px'
                }, 800);
            });
        }
    });
    goTop.init();
});
$(function () {
    var Tabs = {
        init: function () {
            this.eventHandler();
        }
    }
    $.extend(Tabs, {
        eventHandler: function () {
            $.tbuiTab = function (tabtit, tab_conbox, event) {
                $(tab_conbox).find("li").hide();
                $(tabtit).find("li:first").addClass("tbui-active").show();
                $(tab_conbox).find("li:first").show();

                $(tabtit).find("li").bind(event, function () {
                    $(this).addClass("tbui-active").siblings("li").removeClass("tbui-active");
                    var activeindex = $(tabtit).find("li").index(this);
                    $(tab_conbox).children().eq(activeindex).show().siblings().hide();
                    return false;
                });

            };
        }
    });
    Tabs.init();
});