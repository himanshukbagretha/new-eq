<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer\PHPMailer.php';
require 'PHPMailer\Exception.php';
require 'PHPMailer\SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = htmlspecialchars($_POST['first_name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST['phone']);
    $gender = htmlspecialchars($_POST['gender']);
    $comments = htmlspecialchars($_POST['comments']);

    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Set your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'your-email@gmail.com'; // Your Gmail address
        $mail->Password = 'your-email-password'; // Your Gmail password (use App Passwords for security)
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        //Recipients
        $mail->setFrom('your-email@gmail.com', 'Your Name');
        $mail->addAddress('recipient-email@example.com'); // Add a recipient

        //Content
        $mail->isHTML(true);
        $mail->Subject = 'New Form Submission';
        $mail->Body = "
            Name: $first_name<br>
            Email: $email<br>
            Phone: $phone<br>
            Gender: $gender<br>
            Comments: $comments
        ";

        $mail->send();
        echo "<script>alert('Form submitted successfully!'); window.location.href='';</script>";
    } catch (Exception $e) {
        echo "<script>alert('Mail could not be sent. Error: {$mail->ErrorInfo}'); window.location.href='';</script>";
    }
}
?>
