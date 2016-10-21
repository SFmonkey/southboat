/**
 * Created by Administrator on 2016/10/13.
 */
$(function(){
    $('#submit').click(function() {
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var information = $('#information').val();

        $.ajax({
            url: 'contact.php',
            type: 'POST',
            async: true,
            cache: false,
            dataType: 'json',
            data: {
                name: name,
                email: email,
                phone: phone,
                information: information
            },
            success: function (data) {
                reset();
                alert("你的漂流瓶已经漂往南船 ( (－_－)y--~~");
            },
            error: function (e) {
                alert("insert contact failed");
            }
        });
    });
    var reset = function(){
        $('#name').val("");
        $('#email').val("");
        $('#phone').val("");
        $('#information').val("");
    }
});
