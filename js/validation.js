$(function(){
	$('form[name="enquiry_form"]').submit(function(e){
		e.preventDefault();
		var action = $(this).attr('action');
		var data = $(this).serialize();
		var enquiry_first_name = $('input[name="enquiry_first_name"]').val();
		var enquiry_last_name = $('input[name="enquiry_last_name"]').val();
		var enquiry_email = $('input[name="enquiry_email"]').val();
		var enquiry_subject = $('input[name="enquiry_subject"]').val();
		var enquiry_message = $('textarea[name="enquiry_message"]').val();
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var response = grecaptcha.getResponse();

		if (enquiry_first_name=="" || enquiry_last_name=="" || (enquiry_email=="" || !emailReg.test(enquiry_email)) || response.length == 0 || enquiry_message=="") {

			//First Name Validation
			if(enquiry_first_name==""){
				if (!$('#enquiry_first_name').parent().hasClass('error')) {
					$('#enquiry_first_name').parent().addClass('error');
				} else {
					/* DO NOTHING */
				}
			} else if (enquiry_first_name.length > 0) {
				$('#eenquiry_first_name').parent().removeClass('error');
			}
      //last Name Validation
			if(enquiry_last_name==""){
				if (!$('#enquiry_last_name').parent().hasClass('error')) {
					$('#enquiry_last_name').parent().addClass('error');
				} else {
					/* DO NOTHING */
				}
			} else if (enquiry_last_name.length > 0) {
				$('#eenquiry_last_name').parent().removeClass('error');
			}
			//Email if Blank Validation
			if(enquiry_email==""){
				if (!$('#enquiry_email').parent().hasClass('error')) {
					$('#enquiry_email').parent().addClass('error');
				} else {
					/* DO NOTHING */
				}
			} else if (enquiry_email.length > 0 && emailReg.test(enquiry_email)) {
				$('#enquiry_email').parent().removeClass('error');
			}
			//Valid email Valdiation
			else if (enquiry_email.length > 0 && !emailReg.test(enquiry_email)) {
				if(!emailReg.test(enquiry_email)) {
					$('#enquiry_email').val('');
					$('#enquiry_email').attr('placeholder', 'Please enter a valid email address.');
				} else {
					$('#enquiry_email').parent().removeClass('error');
					$('#enquiry_email').removeAttr('placeholder');
				}
			}

			if(enquiry_message==""){
				if (!$('#enquiry_message').parent().hasClass('error')) {
					$('#enquiry_message').parent().addClass('error');
				} else {
					/* DO NOTHING */
				}
			} else if (enquiry_message.length > 1) {
				$('#enquiry_message').parent().removeClass('error');
			}


			if(response.length == 0){
			$('.g-recaptcha').addClass('error');
			}
		} else {
			$.ajax({
				type: "POST",
				dataType: "json",
				url: action,
				data: {
					enquiry_first_name: enquiry_first_name,
					enquiry_last_name: enquiry_last_name,
					enquiry_email: enquiry_email,
					enquiry_subject: enquiry_subject,
					enquiry_message: enquiry_message
				},
				success: function(data){
					console.log(data);
					if(data){
						thank_you_message();
						//Setting Time to run function clear_form 350 milliseconds after data has been sent through php mailer
						var setTimer;
						clearTimeout(setTimer);
						setTimer = setTimeout(function() {
							clear_form();
						}, 350);
					}
				}
			});
		}
	});
	function clear_form() {
		$('input[name="enquiry_first_name"]').val('');
		$('input[name="enquiry_last_name"]').val('');
		$('input[name="enquiry_subject"]').val('');
		$('input[name="enquiry_email"]').val('');
		$('textarea[name="enquiry_message"]').val('');
		$('.enquiry-control').parent().removeClass('error');
		$('.enquiry-control').removeAttr('placeholder');
		$('.g-recaptcha').removeClass('recaptcha-error');
		grecaptcha.reset();
	}
	function thank_you_message(){
		$('form#enquiry_form').fadeOut(200);
		$('.enquiry-form-message').fadeIn(500);
	}
});
