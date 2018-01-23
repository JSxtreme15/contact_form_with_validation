<!doctype html>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/main.css">
<link href="https://fonts.googleapis.com/css?family=Anton|Oswald" rel="stylesheet">
<script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>

<main id="main" class="site-main" role="main">
  <div class="container-fluid">
    <div class="title">
      <h1>Responsive Contact Form with Google reCAPTCHA &amp; jQuery validation</h1>
    </div>
  <form id="enquiry_form" action="contact_form_mailer.php" name="enquiry_form">

    <div class="required-text">
    <p>Required <sup>*</sup></p>
    </div>

  <div class="enquiry-form-input transition width-50 underline_error_style">
  <label for="enquiry_first_name">First Name<sup>*</sup></label>
  <input class="enquiry-control" type="text" id="enquiry_first_name" name="enquiry_first_name">
  </div><!-- /.enquiry-form-input -->

  <div class="enquiry-form-input transition width-50 label_error_style">
  <label for="enquiry_last_name">Last Name<sup>*</sup></label>
  <input class="enquiry-control" type="text" id="enquiry_last_name" name="enquiry_last_name">
  </div><!-- /.enquiry-form-input -->

  <div class="enquiry-form-input transition both_error_style">
  <label for="enquiry_email">Email Address<sup>*</sup></label>
  <input class="enquiry-control" type="text" id="enquiry_email" name="enquiry_email">
  </div><!-- /.enquiry-form-input -->

  <div class="enquiry-form-input">
  <label for="enquiry_subject">Subject</label>
  <input class="enquiry-control" type="text" id="enquiry_subject" name="enquiry_subject">
  </div><!-- /.enquiry-form-input -->

  <div class="enquiry-form-input transition message-contact both_error_style">
  <label for="enquiry_message">Message<sup>*</sup></label>
  <textarea class="enquiry-control" id="enquiry_message" name="enquiry_message" rows="10"></textarea>
  </div><!-- /.message-contact -->

  <div class="recaptcha">
  <div class="g-recaptcha" data-sitekey="YOUR DATA KEY GOES HERE"></div>
  </div>

  <div class="contact-submit-button">
  <button type="submit" class="submit-button button">Send</button>
  </div>

  </form>
  <div class="enquiry-form-message" style="display: none;">
  <p>Thank you for contacting Us. We will get back to you shortly.</p>
  <a class="submit-button back button">< Back</a>
  </div>
</div>

</main><!-- #main.site-main -->

<!-- JavaScript Libraries -->
<script src="js/jquery-3.3.1.min.js"></script><!-- JavaScript Libraries -->
<script src="js/bootstrap.min.js"></script>
<script src="js/validation.js"></script>
<script src="js/main.js"></script>

</body>
</html>
