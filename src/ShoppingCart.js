$(document).ready(function () {
    function Contains(text_inp, text_out){
        if(text_inp.indexOf(text_out) != -1)
            return true;
    }

    $("#search").keyup(function (){
        var search = $("#search").val().toLowerCase();
        $(".search").each(function(){
            if(!Contains($(this).text().toLowerCase(), search)){
                $(this).hide();
            }else{
                $(this).show();
            }
        })
    })
});