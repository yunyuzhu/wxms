/**
 * Created by chun
 */
//操作按钮切换
function modifyBtnShow(flag){
    var $faceHandle = $("#faceHandle");
    var ismodify = "ismodify";
    if(flag){
        $faceHandle.removeClass(ismodify);
    }else{
        $faceHandle.addClass(ismodify);
    }
}
//加载页面
function loadhtml(){
    inSubmit();
}
$(document).ready(function(){
    loadhtml();
});
//提交
function inSubmit(){
    //修改
    $("#faceModify").on('click', function(){
        accModify();
    });
    //保存
    $("#faceSave").on('click', function(){
        accSave();
    });
}
