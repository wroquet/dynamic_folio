$( document ).ready(function() {
    
	$('#plusieurslivres li').click(function(){
			var text = $(this).children('p');

			if (text.is(':hidden')){
				text.slideDown('slow');


			}
			else{
				text.slideUp('slow');
			}

	});
});