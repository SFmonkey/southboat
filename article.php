<?php require 'db_connect.php'?>
<?php
/**
 * Created by sifu.
 * User: Administrator
 * Date: 2016/10/11
 * Time: 19:52
 */
$db = new db();
$db ->setAttribute(PDO::ATTR_CASE,PDO::CASE_UPPER);
$statement = $db ->sel("select * from article");
$statement ->execute();
$statement ->setFetchMode(PDO::FETCH_NUM);
$result_arr = $statement->fetchAll();
echo json_encode($result_arr);