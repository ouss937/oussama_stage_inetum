

                
$(document).ready( function() { 
    $('#lienaccordeonotherpage').on('click', function () {
        window.location.href = 'testaccordion.html';
    });

    $("iframe").hide();

    $("#lienaccordeonthispage").click(function(){
        $("iframe").toggle();
      }); 
});