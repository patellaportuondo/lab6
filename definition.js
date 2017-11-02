$(document).ready(function (){
    $("#search").click(function(){
        $.ajax({
            type:"GET",
            url:"request.php",
            data: { q: $("#input").val()},
            success: function(data){
                $("#result").html(data);
            }
        })
    })
})