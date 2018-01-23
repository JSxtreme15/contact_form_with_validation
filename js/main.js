$(document).ready(function() {
  //Contact Back button - OnClick will hide Thank you mess and Fade back in the contact form. No page reload needed
  $('.enquiry-form-message > a.back.button').on('click', function() {
    $('form#enquiry_form, .contact_form_text').fadeIn(500);
    $('.enquiry-form-message').fadeOut(200);
  });
});
