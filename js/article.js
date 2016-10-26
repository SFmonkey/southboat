/**
 * Created by sifu on 2016/10/11.
 */
$(function(){
    $.ajax({
        url: 'http://localhost/southboat/article.php',
        type: 'GET',
        async: true,
        cache: false,
        dataType: 'json',
        success: function(data) {
            source(data);
            article_page(data);
            $('.page-title a:first').click(function(){
                article_page(data);
            });
            $('.page-title a:last').click(function(){
                radio_page(data);
            });
        },
        error: function(e) {
            alert("Get article failed");
        }
    });
    var source = function (data) {
        var article=data.article.length;
        var radio=data.radio.length;
        var holder = document.getElementById('holder');
        for(var j=0;j< article;j++){
                holder.innerHTML+='<div class="article_page_'+parseInt(j/6+1)+'">'+
                    '<div class="col-xs-12 col-sm-6 col-md-4">'+
                    '<div class="thumbnail">'+
                    '<img src="images/'+data.article[j][1]+'.jpg" alt="...">'+
                    '<div class="caption text-center">'+
                    '<a href="'+data.article[j][4]+'"><h5>'+data.article[j][2]+'</h5></a>'+
                    '<p>'+data.article[j][3]+'</p>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
            }
        for(var j=0;j< radio;j++){
            holder.innerHTML+='<div class="radio_page_'+parseInt(j/6+1)+'" style="display:none">'+
                '<div class="col-xs-12 col-sm-6 col-md-4">'+
                '<div class="thumbnail">'+
                '<img src="images/'+data.radio[j][1]+'.jpg" alt="...">'+
                '<div class="caption text-center">'+
                '<a href="'+data.radio[j][4]+'"><h5>'+data.radio[j][2]+'</h5></a>'+
                '<p>'+data.radio[j][3]+'</p>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'
        }
    };
    var article_page = function (data) {
        var i=1;
        var l1,l2;
        if(data.article.length%6==0){
            l1=data.article.length/6;
        }else{
            l1 = parseInt(data.article.length/6+1);
        }
        if(data.radio.length%6==0){
            l2=data.radio.length/6;
        }else{
            l2 = parseInt(data.radio.length/6+1);
        }
        $('#pager_2').css("display","none");
        $('#pager_1').css("display","");
        $("#pager_1 .previous").addClass('disabled');
        $("#pager_1 .next").removeClass('disabled');
        for(var j=2;j<=l1;j++){
            $('.article_page_'+j).css("display","none");
        }
        for(j=1;j<=l2;j++){
            $('.radio_page_'+j).css("display","none");
        }
        $('.article_page_1').css("display","");

        document.getElementById('pager_5').onclick=function () {
            i--;
            if(i<1){
                i++;
                return 0;
            }
            $('#pager_1 .next').removeClass('disabled');
            $('.article_page_'+(i+1)).css("display","none");
            if(i===1){
                $('#pager_1 .previous').addClass('disabled');
            }
            $('.article_page_'+i).css("display","block");
        };
        document.getElementById('pager_3').onclick =function () {
            i++;
            if(i>l1){
                i--;
                return 0;
            }
            $('#pager_1 .previous').removeClass('disabled');
            $('.article_page_'+(i-1)).css("display","none");
            if(i===l1){
                $('#pager_1 .next').addClass('disabled');
            }
            $('.article_page_'+i).css("display","block");
        }
    };
    var radio_page = function (data) {
        var r=1;
        if(data.article.length%6==0){
            l2=data.article.length/6;
        }else{
            l2 = parseInt(data.article.length/6+1);
        }
        if(data.radio.length%6==0){
            l1=data.radio.length/6;
        }else{
            l1 = parseInt(data.radio.length/6+1);
        }
        $('#pager_1').css("display","none");
        $('#pager_2').css("display","");
        $('.previous').addClass('disabled');
        if(l1==1){
            $('#pager_2 .next').addClass('disabled');
        }else{
            $('#pager_2 .next').removeClass('disabled');
        }
        for(var j=2;j<=l1;j++){
            $('.radio_page_'+j).css("display","none");
        }
        for(j=1;j<=l2;j++){
            $('.article_page_'+j).css("display","none");
        }
        $('.radio_page_1').css("display","");
        document.getElementById('pager_6').onclick=function () {
            r--;
            if(r<1){
                r++;
                return 0;
            }
            $('#pager_2 .next').removeClass('disabled');
            $('.radio_page_'+(r+1)).css("display","none");
            if(r===1){
                $('#pager_2 .previous').addClass('disabled');
            }
            $('.radio_page_'+r).css("display","block");
        };
        document.getElementById('pager_4').onclick=function () {
            r++;
            if(r>l1){
                r--;
                return 0;
            }
            $('#pager_2 .previous').removeClass('disabled');
            $('.radio_page_'+(r-1)).css("display","none");
            if(r===l1){
                $('#pager_2 .next').addClass('disabled');
            }
            $('.radio_page_'+r).css("display","block");
        }

    };
});