
	
/*



$(document).ready(function(){
    $('#profilebtn').click(function(){
			var text = $('#about');

			if (text.is(':hidden')){
				text.slideDown('slow');


			}
			else{
				text.slideUp('slow');
			}

	});
});
});
*/


$(document).ready(function(){
    $('#profilebtn').click(function(){
        if ($('#about').is(':hidden')){
				$('#about').show(1000);


			}
			else{
				$('#about').hide(1000);
			}

    });
});


/*
$(document).ready(function(){
    $('#profilebtn').click(function(){
        $('#about').show(1000);

    });
});
*/

$('#about').show(1000);