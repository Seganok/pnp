<?php

$project_name = trim($_POST["name"]);
$admin_email  = "welcome@forppl.ru";
$form_subject = 'Бесплатная консультация';
$customerNumber = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["comment"]);

$message = 'Шаблон';

function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <info@'.$_SERVER['HTTP_HOST'].'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );

header("Location: /index.html");
die();

