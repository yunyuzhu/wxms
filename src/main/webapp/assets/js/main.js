$(function () {

    $("#toggle_site").on('click', function (e) {

        e.preventDefault();
        
        if ($("body").hasClass('sidebar-collapse')) {
            $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
        } else {
            $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
        }

        $(window).trigger('resize');
    });
    
    var mid = "main";
    $("[menus-array]").each(function () {
        $(this).bind("click", function () {
            var arr = $(this).attr("menus-array");
            var sn = arr.split(",");
            
            //添加小标题
            $("#contentTitle").text(sn[1]);
            $("#crumbPathMain").text(sn[0]);
            $("#crumbPathSub").text(sn[1]);
            
            var tb = $("#loadhtml");
            
            tb.load(rootPath + sn[2]);

            //同级排斥
            var id = sn[3];
            if (id != mid) {
                $("#" + mid).removeClass();
                mid = id;
            }

            var id = sn[3];
            $("#" + id).attr("class", "active");

        });
    });
    
    //默认选中第一个
    $("#menuId").children(".treeview").eq(0).find("a").trigger("click");
    $("#menuId").children(".treeview").eq(0).addClass("active").find(".treeview-menu li").eq(0).addClass("active");
});

function collapse2() {
    var _this = this;
    //Find the box parent
    var box = element.parents(".box").first();
    //Find the body and the footer
    var box_content = box.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
    if (!box.hasClass("collapsed-box")) {
        //Convert minus into plus
        element.children(":first")
            .removeClass(_this.icons.collapse)
            .addClass(_this.icons.open);
        //Hide the content
        box_content.slideUp(_this.animationSpeed, function () {
            box.addClass("collapsed-box");
        });
    } else {
        //Convert plus into minus
        element.children(":first")
            .removeClass(_this.icons.open)
            .addClass(_this.icons.collapse);
        //Show the content
        box_content.slideDown(_this.animationSpeed, function () {
            box.removeClass("collapsed-box");
        });
    }
}
