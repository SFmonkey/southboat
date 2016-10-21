/**
 * Created by Administrator on 2016/10/7.
 */
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
        document.write('<a href="#No_'+i+'">');
        document.write('123</a>');
        document.write('<div class="remodal" data-remodal-id="No_'+i+'" role="dialog" aria-labelledby="modal1Title" aria-describedby="modal1Desc">');
        document.write('<button data-remodal-action="close" class="remodal-close" aria-label="Close"></button>');
        document.write('<div>');
        document.write('<img src="img/'+odata[i][0]+'.jpg" alt="" class="img-circle" width="100" height="100">');
        document.write('<h3 class="Text Text--spacedSmall"></h3>');
        document.write('<p class="Text Text--small" ></p>');
        document.write('<p class="self--descript"></p><hr>');
        document.write('</div>');
        document.write('<br>');
        document.write('</div>');
        document.write('</div>');
    }
};
