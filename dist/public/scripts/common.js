/**
 *@author Hancoson
 *@date 2015-01-22
 **/
jQuery(function () {
    var VSOUI = {
        init: function () {
            this.eventHandler();
            if ($("#J_sildNav").length > 0) {
                this.InitSlid();
            }
            this.mobileNav();
        }
    };
    jQuery.extend(VSOUI, {
        eventHandler: function () {
            for (var i = 0; i < $("pre").length; i++) {
                var _html = $("pre:eq( " + i + ")").html();
                var RexStr = /\<|\>|\"|\'|\&/g;
                _html = _html.replace(RexStr, function (MatchStr) {
                    switch (MatchStr) {
                    case "<":
                        return "&lt;";
                        break;
                    case ">":
                        return "&gt;";
                        break;
                    case '"':
                        return '\"';
                        break;
                    default:
                        break;
                    }
                });
                $("pre:eq( " + i + ")").html(_html);
            }
            jQuery("pre").addClass("prettyprint linenums");
            prettyPrint();
        },
        //代码高亮
        InitSlid: function () {
            $('#J_sildNav').onePageNav();
            var _elm = $('#J_sildNav');
            var _startPos = $(_elm).offset().top;
            $.event.add(window, "scroll", function () {
                var _p = $(window).scrollTop();
                $(_elm).css('position', ((_p) > _startPos) ? 'fixed' : 'static');
                $(_elm).css('top', ((_p) > _startPos) ? '0' : '');
            });
            if (document.body.clientWidth < 769) {
                $("#J_sildNav").hide();
            }

            //左侧导航
        },
        
        mobileNav : function(){
            $("#J_mobNav_btn").click(function(event) {
                $("#J_nav").slideToggle({"height":"150px"}, 500)
            });
        }

    });
    VSOUI.init();
});