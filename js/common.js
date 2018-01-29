$(document).ready(function() {
	$("#form-open").click(function(){
		$("#form-wrap").fadeIn()
		return false;
	});

	$(document).click(function(e){
		if (!$(e.target).closest("#form").length) {
			$("#form-wrap").fadeOut();
		}
		e.stopPropagation();
	});

	$("#button-close").click(function(){
		$("#form-wrap").fadeOut()
	});

	$("#form").submit(function(){
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: $(this).serialize()
		}).done(function(){
			alert("Спасибо за заявку! Скоро с вами свяжемся.")
		});
	});

});