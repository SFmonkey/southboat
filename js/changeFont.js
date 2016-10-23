/**
 * Created by Administrator on 2016/5/1.
 */
window.onload = function() {
    var font1 = ['M', 'e', 'd', 'i', 'c', 'i', 'n', 'e'];
    var font2 = ['J', 'o', 'u', 'r', 'n', 'a', 'l', 'i', 's', 'm'];
    var font3 = ['P', 'o', 'l', 'i', 't', 'i', 'c', 's'];
    var font4 = ['F', 'a', 's', 'h', 'i', 'o', 'n'];
    var font5 = ['B', 'u', 's', 'i', 'n', 'e', 's', 's'];
    var font6 = ['D', 'e', 's', 'i', 'g', 'n'];
    var font7 = ['S', 'c', 'i', 'e', 'n', 'c', 'e'];
    var font8 = ['M', 'e', 'd', 'i', 'c', 'i', 'n', 'e'];
    var font9 = ['P', 'h', 'y', 's', 'i', 'c', 's'];
    var font10 = ['A', 'r', 'c', 'h', 'i', 't', 'e', 'c', 't', 'u', 'r', 'e'];
    var font11 = ['P', 'h', 'o', 't', 'o', 'g', 'r', 'a', 'p', 'h', 'y'];
    var font12 = ['T', 'e', 'c', 'h', 'n', 'o', 'l', 'o', 'g', 'y'];
    var font13 = ['E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', 'i', 'n', 'g'];
    var font14 = ['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n'];
    var font15 = ['A', 'r', 't', 's'];
    var font16 = ['J', 'o', 'u', 'r', 'n', 'a', 'l', 'i', 's', 'm'];
    var font17 = ['L', 'a', 'w'];
    var font = [font1, font2, font3, font4, font5, font6, font7, font8, font9, font10, font11, font12, font13, font14, font15, font16, font17];

    var i = 0;
    //var show = [];
    var iID=setInterval(time, 3000);
    function time()
    {
        //show = font[i] ;
        var j = 0;
        var iShow = [];
        var iTD = setInterval(timeI,200);
        function timeI(){
            iShow[j] = font[i][j];
            $('#typed').html(iShow);
            j = j+ 1;
            if(j>=font[i].length)
            {
                clearInterval(iTD);
            }
        }
        i = (i+1)%17;
        if(0)
        {
            clearInterval(iID);
        }
    }
};


