<?php
session_start();

$enquiry_first_name = $_POST['enquiry_first_name'];
$enquiry_last_name = $_POST['enquiry_last_name'];
$enquiry_email = $_POST['enquiry_email'];
$enquiry_subject = $_POST['enquiry_subject'];
$enquiry_message = $_POST['enquiry_message'];

if(
	!empty($enquiry_first_name)
	AND
	!empty($enquiry_last_name)
	AND
	!empty($enquiry_email)
	AND
	isset($enquiry_subject)
	AND
	!empty($enquiry_message)
)
{
	//Change date_default_timezone_set to your timezone
	date_default_timezone_set('Asia/Hong_Kong');
	$now = date('M j, Y') . ' @ ' . date('g:i a');
	$to      = 'youremail@goes.here';
	$message ='Name: ' . $enquiry_first_name ."\r\n".
'Subject: '. $enquiry_subject ."\r\n".
'E-mail: '. $enquiry_email."\r\n".
'Message: '. $enquiry_message."\r\n\r\n".
'This is a notice that a new enquiry has been generated on:'. $now;
	$headers = 'From: ' . $enquiry_email . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	echo mail($to, $enquiry_subject, $message, $headers);
} else {
	echo '<h1> Please Contact the website Administrator</h1>';
}

?>
