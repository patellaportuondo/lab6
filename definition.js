/* global $ */
$(document).ready(function (){
    $("#search").click(function(){
        $.ajax({
            type:"GET",
            url:"request.php",
            data: { q: $("#input").val()},
            success: function(data){
                $("#result").html(data);
            }
        });
    });
    
    $("#searchall").click(function(){
        $.ajax({
            type:"GET",
            url:"request.php",
            data: { q: "&all=true"},
            success: function(data){
                $("#result").html("");
                $("#result").append("<ol></ol>");
                $(data).find("definition").each(function(){
                    var list = "<h3>"+$(this).find("name").text()+"</h3>";
                    list += "<p>"+$(this).find("meaning").text()+"</p>";
                    list += "<p>"+"-"+$(this).find("author").text()+"</p>";
                    $("#result ol").append("<li>"+list+"</li>");
                });
                
            }
        });
    });
});