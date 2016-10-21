/**
 * Created by Administrator on 2016/10/4.
 * receive remodal data
 */

$.ajax
({
    type:'GET',
    url:'person_info.php',
    dataType:'json',
    success:function(data)
    {
        var odata = data;
        member(odata);
    }
});
var member = function(odata){
    var user = document.getElementById('adduser');
    //var user = $('#adduser');
    alert(odata.length);
    for(var i=0;i<odata.length;i++){
        user.innerHTML += ('<div class="col-lg-3  col-md-3 col-sm-4 col-xs-4 Profile "><figure class="profile-figure"> <a href="#No_'+i+'">'+
            '<img src="img/'+odata[i][0]+'.jpg" alt="'+odata[i][1]+'" class="img-circle img-circle-hover" width="100" height="100"></a>'+
            '</figure>'+
            '<h4 class="text-center">'+odata[i][1]+' </h4>'+
            '<p class="text-center">'+odata[i][2]+'</p>'+
            '<div class="remodal" data-remodal-id="No_'+i+'" role="dialog" aria-labelledby="modal1Title" aria-describedby="modal1Desc">'+
            '<button data-remodal-action="close" class="remodal-close" aria-label="Close"></button>'+
            '<div>'+
            '<img src="img/'+odata[i][0]+'.jpg" alt="" class="img-circle" width="100" height="100">'+
            '<h3 class="Text Text--spacedSmall"></h3>'+
            '<p class="Text Text--small" ></p>'+
            '<p class="self--descript"></p><hr>'+
            '<div class="social_link">'+
            '<span><a href="#"><i class=""></i>半生与秋书信</a></span>'+
            '<span><a href="#"><i class=""></i></a></span>'+
            '<span><a href="#"><i class=""></i></a></span>'+
            '<span><a href="#"><i class=""></i></a></span>'+
            '<span><a href="#"><i class=""></i></a></span>'+
            '<span><a href="#"><i class=""></i></a></span>'+
            '<span><a href="#"><i class=""></i></a></span>'+
            '<span><a href="#"><i class=""></i></a></span>'+
            '</div>'+
            '</div>'+
            '<br>'+
            '</div>'+
            '</div>');
    }
};
