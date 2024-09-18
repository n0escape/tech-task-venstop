<?php
require 'vendor/autoload.php'; // Adjust based on your installation method

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// Upload variables form .env
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Getting data from form
    // Validate and sanitize data
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $mail = filter_input(INPUT_POST, 'mail', FILTER_SANITIZE_EMAIL);
    $privacyPolicy = isset($_POST['privacy_policy']) ? 'Yes' : 'No';

    // Enable exceptions
    $mail = new PHPMailer(true);
    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = $_ENV['MAIL_HOST'];
        $mail->Port = $_ENV['MAIL_PORT'];
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['MAIL_USERNAME'];
        $mail->Password = $_ENV['MAIL_PASSWORD'];
        $mail->SMTPSecure = $_ENV['MAIL_ENCRYPTION'];

        // Sender and recipient settings
        $mail->setFrom($_ENV['MAIL_FROM_ADDRESS'], $_ENV['MAIL_FROM_NAME']);
        $mail->addAddress($_ENV['MAIL_TO_ADDRESS']);

        // Sending message to email
        $mail->isHTML(true);
        $mail->Subject = 'Новий запит з форми';
        $mail->Body    = 'Надіслані наступні дані:<br>Ім\'я - $name<br>Пошта - $mail<br>Політика конфіденційності - $privacyPolicy';

        // Send the email
        if(!$mail->send()) {
            echo "Помилка при відправці письма: {$mail->ErrorInfo}";
        } else {
            echo 'Письмо успішно надіслано';
            //header('location: thank-you.html');
            //exit();
        }
    } catch (Exception $e) {
        echo "Помилка при відправці письма: {$e->getMessage()}";
    }
}
?>