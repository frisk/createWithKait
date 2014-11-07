<?php

date_default_timezone_set('America/Los_Angeles');

// Swift Mailer Library
require_once 'lib/swift/lib/swift_required.php';
require_once 'config.php';

$mail_conf = $config['mail'];
$email = htmlspecialchars($_POST['email']);
$name = htmlspecialchars($_POST['name']);
$comment = htmlspecialchars($_POST['comments']);
$kait_email = $mail_conf['recipient'];
$kait_name = $mail_conf['name'];
//$test_email = 'randall.frisk@gmail.com';
//$test_name = 'John Doe';

// Mail Transport
$transport = Swift_SmtpTransport::newInstance($mail_conf['host'], $mail_conf['port'], $mail_conf['protocol'])
    ->setUsername($mail_conf['gmail_user']) // Your Gmail Username
    ->setPassword($mail_conf['gmail_pass']); // Your Gmail Password

// Mailer
$mailer = Swift_Mailer::newInstance($transport);

// Create a message
$message = Swift_Message::newInstance($mail_conf['subject'])
    ->setFrom(array($email => $name)) // can be $_POST['email'] etc...
    ->setTo(array($kait_email => $kait_name)) // your email / multiple supported.
    ->setBody(
      $mail_conf['intro'] 
      .$email 
      .":\n\n"  
      .$comment
    );

// Send the message
if ($mailer->send($message)) {
    echo json_encode(array('message' => 'You\'re message has been send successfully! I\'ll get back to you soon!'));
} else {
    echo json_encode(array('error' => 'I am sure, your configuration are not correct. :('));
}
