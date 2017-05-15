<?php

//Script Foreach
$c = true;
$project_name = trim($_POST["project_name"]);
$admin_email  = "zhirotopka@yandex.ru";
$form_subject = trim($_POST["form_subject"]);
$customerNumber = trim($_POST["E-mail"]);

foreach ( $_POST as $key => $value ) {
	if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
		$message .= "
		" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>";
	}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <info@'.$_SERVER['HTTP_HOST'].'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );

$customer_message = "<h3>Привет, жиротоп! :)
</h3><p>Данное письмо является подтверждением твоей оплаты и регистрации в проекте “Беговая Жиротопка”. Старт твоей беговой жиротопки 14 мая (13 мая вечером будет доступно первое задание).</p><p>Для того чтобы принять участие в проекте тебе понадобится:</p><ul><li>Профиль в Вконтакте (обязательно)</li><li>Профиль в Instagram (по желанию - в случае, если ты  хочешь принимать участие в розыгрыше денежных призов от автора БЖ)</li><li>Смартфон с камерой и возможностью записывать видео и делать фото</li></ul>";

$customer_message .= "<p>Все задания ты будешь получать в закрытой группе в Вконтакте. Чтобы вступить в группу - перейди по ссылке: <a href='https://vk.com/runfatburn102'>https://vk.com/runfatburn101</a></p>";

$customer_message .= "<p>Все отчеты о выполнении заданий тебе нужно будет прикреплять к своей карточке в закрытой группе!</p>";

$customer_message .= "<ul><li>Отчеты по беговым заданиям - это скриншот (фотография экрана твоего мобильного телефона) любого приложения для бега</li></ul><p>Что такое отчет о выполнении заданий?</p>";

$customer_message .= '<ul><li>Отчеты по беговым заданиям - это скриншот (фотография экрана твоего мобильного телефона) любого приложения для бега (Runtastic, Runkeeper, Strava и так далее). Главное чтобы на этом скриншоте были видны дата/время и подтверждение выполнения задания: например, если заданий было “Пробежать 20 минут”, то значит на скриншоте должно быть видно, что твоя пробежка была не менее 20 минут; а если задание было “Пробежать 3 км”, то на скриншоте должно быть видно, что твоя пробежка была не менее 3 км. Думаю, что так понятно :)</li><li>Отчеты по всем остальным заданиям - это видео-записи выполнения заданий. Например, если задание было “20 приседаний * 2 подхода”.</li></ul>';

$customer_message .= "<p>Уверен, что все у тебя получится!</p>";

$customer_message .= $message;

$customer_message .= "<p style='padding: 20px 0px;'>Если Вы не заполнили форму ниже, то пришлите пожалуйста недостающие данные на почту <a href='zhirotopka@yandex.ru'>zhirotopka@yandex.ru</a> или ответом на это письм. Спасибо!</p>";

$customer_message .= "<table style='width: 100%;'>";

$mess_array = array(
		array("С уважением,","Беговая Жиротопка,"),
		array("Автор проекта БЖ Дима Санджиев","<a href='http://беговаяжиротопка.рф'>http://беговаяжиротопка.рф</a>"),
		array("<a href='https://vk.com/dimasandzhiev'>https://vk.com/dimasandzhiev</a>","<a href='https://vk.com/runfatburn'>https://vk.com/runfatburn</a>"),
		array("<a href='https://www.facebook.com/dima.sandzhiev'>https://www.facebook.com/dima.sandzhiev</a>","<a href='https://www.facebook.com/runfatburn/'>https://www.facebook.com/runfatburn/</a>"),
		array("instagram @dimasandzhiev","instagram @runfatburn"),
	);

foreach ( $mess_array as $mess ) {
	$customer_message .= "<tr><td>";
	$customer_message .= $mess[0]."</td><td>".$mess[1];
	$customer_message .= "</td></tr>";
}

$customer_message .= "</table>";

mail($customerNumber, adopt($form_subject), $customer_message, $headers );

// $headers2 = "MIME-Version: 1.0" . PHP_EOL .
// "Content-Type: text/html; charset=utf-8" . PHP_EOL .
// 'From: '.adopt($project_name).' <info@'.$_SERVER['HTTP_HOST'].'>' . PHP_EOL .
// 'Reply-To: '.$admin_email.'' . PHP_EOL;

// mail($customerNumber, adopt($form_subject), $message, $headers2 );
