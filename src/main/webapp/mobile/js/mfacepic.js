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
	    $("#faceInput").val('');
    }
}
function getObjectURL(file) {
    var url = null;
    window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
    url = window.URL && window.URL.createObjectURL(file) || file;
    // URL.revokeObjectURL(url);
    return url;
}

function imgCheck(fileVal){
    var imgVal = fileVal;
    do{
        if(imgVal == ''){
            layer.msg("上传图片不能为空");
            break;
        }
        if(!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(imgVal))
        {
            layer.msg("图片格式必须为.gif,jpeg,jpg,png中的一种");
            break;
        }
        return true;
    }while(0);
    return false;
}
//加载页面
function loadhtml(){
    inSubmit();
    //选择图片
    $("#faceInput").on('change', function(e){
        var fileVal = $(this).val();
        console.log(fileVal);
        var files = e.target.files;
        var file = files[0];
        var imgSrc = getObjectURL(file);
        if (isNull(imgSrc)) {
            imgSrc = e.target.result;
        }
        facePrev(imgSrc);
        faceHandleShow(true);
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
    //加载头像
    faceLoad();
}
//加载头像
function faceLoad(){
    var $faceImg = $("#faceImg");
    $faceImg.attr('src', mUrlBase+'/mobile/img/face.jpg');
    $.ajax({
        type: "get",
        url: "portalAccount/myAccount",
        dataType:"json",
        data: '',
        async: false,
        jsonp: "callback",
        success:function(data){
            var jsonData = eval(data);
            var imgSrc = jsonData['photoUrl'];
            imgSrc = location.protocol + "//" + location.host + "/img/" + imgSrc;
            //图像是否存在
            if(!isNull(imgSrc)){
                $faceImg.attr('src', imgSrc);
            }
        },
        error:function(error){
            console.log(error);
            layer.msg('头像加载失败');
        }
    });
}
//保存头像
function faceSave(){
    $.ajaxFileUpload({
        type: 'POST',
        url: mUrlBase + "/portalAccount/updatePhoto",
        secureuri: false,
        fileElementId: 'faceInput', //file标签的id
        dataType: 'text', //返回数据的类型
        data: {photoInfo: document.getElementById('faceInput').files[0]},//一同上传的数据
        success: function (data, status) {
            layer.msg('头像上传成功', {icon: 1});
            //把图片替换
            inSubmit();
        },
        error: function (data, status, e) {
            console.log(data);
            layer.msg('头像上传失败', {icon: 0});
        }
    });
}
//取消头像
function faceCancle(){
    facePrev();
    faceHandleShow(false);
}