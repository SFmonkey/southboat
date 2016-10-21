<?php require 'db_connect.php' ?>
<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/10/13
 * Time: 14:29
 */
if(isset($_POST['name'])){ $name = $_POST['name']; }
if(isset($_POST['email'])){ $email = $_POST['email']; }
if(isset($_POST['phone'])){ $phone = $_POST['phone']; }
if(isset($_POST['information'])){ $information = $_POST['information']; }
$db= new db();
$db ->setAttribute(PDO::ATTR_CASE,PDO::CASE_UPPER);
$statement = $db ->sel(" INSERT INTO contact (id, name, email, phone, information) VALUES ('', '$name', '$email', '$phone', '$information');");
$statement ->execute();
echo true;