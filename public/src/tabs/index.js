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