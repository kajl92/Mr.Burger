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

    $mail_massage = '
    <html>
    <head>
        <title>Заявка</title>
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
  
  $headers = "From: Администратор сайта <kajl9210@gmail.com>" . "\r\n".
  "MIME-Version: 1.0" . "\r\n" .
  "Content-type: text/html; charset=UTF-8" . "\r\n";

  $mail = mail('kajl92@mail.ru', 'Заказ', $mail_message, $headers);
  
    $data = [];

  if ($mail) {
      $data['status'] = "OK";
      $data['mes'] = "Письмо успешно отправлено";
  }else{
      $data['status'] = "NO";
      $data['mes'] = "На сервере произошла ошибка";
  }

  echo json_encode($data);

?>