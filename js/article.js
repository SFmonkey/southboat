/**
 * Created by sifu on 2016/10/11.
 */
$(function(){
    var i=1;
    $.ajax({
        url: 'http://localhost/southboat/article.php',
        type: 'GET',
        async: true,
        cache: false,
        dataType: 'json',
        success: function(data) {
            article(data);
            page(data);
        },
        error: function(e) {
            alert("Get article failed");
        }
    });
    var article = function (data) {
        var l=data.length;
        var holder = document.getElementById('holder');
        for(var j=0;j< l;j++){
                holder.innerHTML+='<div class="page_'+parseInt(j/6+1)+'">'+
                    '<div class="col-sm-6 col-md-4">'+
                    '<div class="thumbnail">'+
                    '<img src="images/'+data[j][1]+'.jpg" alt="...">'+
                    '<div class="caption text-center">'+
                    '<a href="'+data[j][4]+'"><h5>'+data[j][2]+'</h5></a>'+
                    '<p>'+data[j][3]+'</p>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
            }
    };
    var page = function (data) {
        var l = parseInt(data.length/6+1);
        for(var j=2;j<=l;j++){
            $('.page_'+j).css("display","none");
        }
        $('.page_1').css("display","");
        $('.previous').click(function () {
            i--;
            if(i<1){
                i++;
                return 0;
            }
            $('.next').removeClass('disabled');
            $('.page_'+(i+1)).css("display","none");
            if(i===1){
                $('.previous').addClass('disabled');
            }
            $('.page_'+i).css("display","block");
        });
        $('.next').click(function () {
            i++;
            if(i>l){
                i--;
                return 0;
            }
            $('.previous').removeClass('disabled');
            $('.page_'+(i-1)).css("display","none");
            if(i===l){
                $('.next').addClass('disabled');
            }
            $('.page_'+i).css("display","block");
        })
    }

});