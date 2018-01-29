<?php

$recepient = "ogairodion@mail.ru";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name\nТелефон: $phone \nПочта: $email \nТекст: $message";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient , $pagetitle , $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
