/**
 * Created by chun
 */
//操作按钮切换
function faceHandleShow(flag){
    var $faceHandle = $("#faceHandle");
    if(flag){
        $faceHandle.show();
    }else{
        $faceHandle.hide();
    }
}
//头像预览
function facePrev(imgSrc){
    var $facePrev = $("#facePrev");
    var $img = $facePrev.find('img');
    if(typeof imgSrc != 'undefined'){
        $facePrev.show();
        $img.attr('src', imgSrc);
    }
    else{
        $facePrev.hide();
        $img.attr('src', '');
    }
    $("#faceInput").val("");
}
var photoFile;
function getObjectURL(file) {
    var url = null;
    window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
    url = window.URL && window.URL.createObjectURL(file) || file;
    // URL.revokeObjectURL(url);
    return url;
}
//加载页面
function loadhtml(){
    inSubmit();
    //选择图片
    $("#faceInput").on('change', function(event){
        var input = event.target;
        var imgSrc = $(this).val();
        var file = input.files[0];
        console.log(file);
        imgSrc = getObjectURL(file);
        console.log(imgSrc);
        facePrev(imgSrc);
        faceHandleShow(true);
        photoFile = imgSrc;
        var reader = new FileReader();//新建一个FileReader
        reader.readAsText(file, "UTF-8");//读取文件
        reader.onload = function(evt){ //读取完文件之后会回来这里
            var fileString = evt.target.result;
            console.log(fileString);
            photoFile = fileString;
        }
    });
    //保存
    $("#faceSave").on('click', function(){
        faceSave();
    });
    //取消
    $("#faceCancle").on('click', function(){
        faceCancle();
    });
}
$(document).ready(function(){
    loadhtml();
});
//提交
function inSubmit(){
    //隐藏图片预览
    facePrev();
    //隐藏保存按钮
    faceHandleShow(false);
}
//保存头像
function faceSave(){
    var inData = {photoInfo: photoFile};
    //发送服务器
    $.ajax({
        type: "get",
        url: mUrlBase + "/portalAccount/updatePhoto",
        dataType: "json",
        data: inData,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            layer.msg('保存头像成功');
            //重新加载
            inSubmit();
        },
        error:function(error){
            console.log(error);
        }
    });
}
//取消头像
function faceCancle(){
    facePrev();
    faceHandleShow(false);
}
