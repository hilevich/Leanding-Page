$(document).ready(function() {

	$("#form_help").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Дякуємо за заявку. Незабаром ми зв'яжемося з вами");
			$("#form_help").trigger("reset");

			$(document).ready(function(){
  			 PopUpHidePomochClose();
					});

			function PopUpHidePomochClose(){
    				$("#pomoch").hide();
			}

		});
		return false;
	});

});