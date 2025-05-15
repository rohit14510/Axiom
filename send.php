<?php
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\Exception; 
 
// Include PHPMailer library files 
require 'PHPMailer/PHPMailer/Exception.php'; 
require 'PHPMailer/PHPMailer/PHPMailer.php'; 
require 'PHPMailer/PHPMailer/SMTP.php'; 
 
// Create an instance of PHPMailer class 

if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $movefrom = $_POST['movefrom'];
        $moveto = $_POST['moveto'];
        $services = $_POST['services'];
        $msg = $_POST['msg'];
        
$mail = new PHPMailer;
// SMTP configuration
// $mail->isSMTP();
$mail->Host     = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'standupstartups1@gmail.com';
$mail->Password = 'Standup@123';
$mail->SMTPSecure = 'tls';
$mail->Port     = 587;
// Sender info 
$mail->setFrom('info@bharatmovingcompany.com', 'Bharat Packers and Movers'); 
$mail->addReplyTo('info@bharatmovingcompany.com', 'Test Email'); 
 
// Add a recipient 
$mail->addAddress('bharatpackers001@gmail.com'); 
 
// Add cc or bcc  
// $mail->addCC('cc@example.com'); 
// $mail->addBCC('bcc@example.com'); 
 
// Email subject 
$mail->Subject = 'Enquiry Received'; 
 
// Set email format to HTML 
$mail->isHTML(true); 
 
// Email body content 
$mailContent = ' 
    <h2>New Enquiry Received</h2> 
    <p>Name :'.$name.'</p> 
    <p>Email :'.$email.'</p> 
    <p>Phone :'.$phone.'</p> 
    <p>Movefrom :'.$movefrom.'</p> 
    <p>Moveto :'.$moveto.'</p> 
    <p>Selected Service :'.$services.'</p>
    <p>Message :'.$msg.'</p> 
    <p>Thanks and Regards</p>  
    <p>Bharat Packers and Movers</p>';  
// $mailContent = "Name : ".$name."\n"."Subject : ".$subject."\n"."Email : ".$email."\n"."Mbile : ".$mobile."\n"."Message :".$message; 
$mail->Body = $mailContent; 
$mail->headers  = "From: Sender Name <standupstartups1@gmail.com>" . "\r\n";
$mail->headers .= 'MIME-Version: 1.0' . "\r\n";
$mail->headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
 
// Send email 
if(!$mail->send()){ ?>
    <script>
    alert("Message could not be sent");
    window.location.href="https://bharatmovingcompany.com/thanks.html";
    </script>
    // 
    <?php
    
}else{ ?>
    <script>
    //   $(document).ready(function(){
    //       setTimeout(function() {
             
            //   if( $_GET['status'] == 'success') {
                //  alert("Mail Send Successfully");
                 window.location.href="https://bharatmovingcompany.com/thanks.html";
            //   }
            //   else{
            //       echo 'alert("no good");';
            //   }
              
    //           }, 500);
    //   });
  </script>
  <?php
  
}
}
?>
