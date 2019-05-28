<?php

$recepient = "gamanm.web@yandex.ru";
$sitename = "Healthy tour";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$tour = trim($_POST["select"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $mail \nТур: $tour";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");