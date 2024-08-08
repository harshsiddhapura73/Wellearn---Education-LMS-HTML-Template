$(document).ready(function(){
    $("#home-menu").mouseenter(function(){
        $("#home-list").slideDown("1000");
    });

    $("#home-menu").mouseleave(function(){
        $("#home-list").slideUp("1000");
    });


    $("#courses-menu").mouseenter(function(){
        $("#courses-list").slideDown("1000");
    });

    $("#courses-menu").mouseleave(function(){
        $("#courses-list").slideUp("1000");
    });


    $("#pages-menu").mouseenter(function(){
        $("#pages-list").slideDown("1000");
    });

    $("#pages-menu").mouseleave(function(){
        $("#pages-list").slideUp("1000");
    });


    $("#blog-menu").mouseenter(function(){
        $("#blog-list").slideDown("1000");
    });

    $("#blog-menu").mouseleave(function(){
        $("#blog-list").slideUp("1000");
    });


    $("#shop-menu").mouseenter(function(){
        $("#shop-list").slideDown("1000");
    });

    $("#shop-menu").mouseleave(function(){
        $("#shop-list").slideUp("1000");
    });


    $("#instructor-menu").mouseenter(function(){
        $("#instructor-list").slideDown("1000");
    });

    $("#instructor-menu").mouseleave(function(){
        $("#instructor-list").slideUp("1000");
    });

    $("#language-btn").click(function(){
        $("#language-blog").slideToggle("1000");
    });
});