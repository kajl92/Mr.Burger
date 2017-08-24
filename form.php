<?php
$name = $_POST ['name'];
$phone = $_POST ['phone'];
$street = $_POST ['street'];
$home = $_POST ['home'];
$part = $_POST ['part'];
$appt = $_POST ['appt'];
$floor = $_POST ['floor'];
$comment = $_POST ['comment'];

$callback = $_POST['callback']; //1 или null
$callback = isset($callback) ? 'Нет' : 'Да';


$status = array();
$result = true;
$status['error']='';
$mail_massage = '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<h2>Заказ</h2>
<ul>
    <li>Имя:' . $name . '</li>
    <li>Телефон:' . $phone . '</li>
    <li>Улица:' . $street . '</li>
    <li>Дом:' . $home . '</li>
    <li>Корпус:' . $part . '</li>
    <li>Квартира:' . $appt . '</li>
    <li>Этаж:' . $floor . '</li>
    <li>Перезвонить:' . $callback . '</li>
    <li>Коментарий:'. $comment . '</li>
</ul>
    
</body>
</html>
';

if($_POST['name']==""){
    $status['error']='Поле имя пустое';
    $result=false;
}
if($_POST['phone']==""){
    $status['error']='Поле телефон пустое';
    $result=false;
}
if($_POST['street']==""){
    $status['error']='Поле улица пустое';
    $result=false;
}
if($_POST['home']==""){
    $status['error']='Поле дом пустое';
    $result=false;
}
if($_POST['part']==""){
    $status['error']='Поле корпус пустое';
    $result=false;
}

if($_POST['appt']==""){
    $status['error']='Поле квартира пустое';
    $result=false;
}

if($_POST['floor']==""){
    $status['error']='Поле этаж пустое';
    $result=false;
}

if($_POST['street']==""){
    $status['error']='Поле улица пустое';
    $result=false;
}

if($_POST['comment']==""){
    $status['error']='Поле комментарий пустое';
    $result=false;
}

if(!isset($_POST['payment']))
{
    $status['error']='Выберите тип оплаты';
}

if($result){
    mail('kajl92@mail.ru', 'Заказ', $mail_message);//Отправляем на почту
}
echo json_encode($status);
?>