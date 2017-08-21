$(document).ready(function(){
    $("form").on("submit", function(e){
        e.preventDefault();
        var dataform = $(this).serialize();
        // console.log(dataform);
        $.ajax({
            url: "form.php",
            data: dataform,
            type: "POST"
        }).done(function(msg){
            $('#success').fadeIn(300);
            $('.status-popup__close').on('click', function (e) {
                e.preventDefault()
            
                $('#success').fadeOut(300);
            
              });
            //Что то выполняет при получении ответа от сервер
            var result = $.parseJSON(msg);
                // console.log(result);
            if(!result.error){
                //С сервера все окей. Отображаем окно что все окей.
                // alert("Мы с Вами свяжемся")
            }else{
                $('#error').fadeIn(300);
                $('.status-popup__close').on('click', function (e) {
                    e.preventDefault()
                
                    $('#error').fadeOut(300);
                
                  });
                // alert(result.error);
            }
        })
    });
});