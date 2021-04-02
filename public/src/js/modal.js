const modal = $('#main-modal');

function closeModal(e) {
	modal.css('display', 'none');
}

$('.modal-image').on('click', function(e) {
	const src = $(this).attr('src');
	const caption = $(this).attr('alt');
	modal.find('img').attr('src', src);
	modal.find('.caption').text(caption);
	modal.css('display', 'block');
})

// closing modal
$('span.close').on('click', closeModal);
$(document).on('keyup', function(e) {
	if(e.key === 'Escape')
		closeModal();
		$('#nav.nav').removeClass('open');
})