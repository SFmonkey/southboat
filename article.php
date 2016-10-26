<?php require 'db_connect.php'?>
<?php
/**
 * Created by sifu.
 * User: Administrator
 * Date: 2016/10/11
 * Time: 19:52
 */
class result{
    public $article = array();
    public $radio = array();
    public function pushData($source,$target){
        for($i=0;$i<count($target);$i++){
            array_push($source,$target[$i]);
        }
        return $source;
    }
}
$db = new db();
$db ->setAttribute(PDO::ATTR_CASE,PDO::CASE_UPPER);
$statement_1 = $db ->sel("select * from article");
$statement_2 = $db ->sel("select * from radio");
$statement_1 ->execute();
$statement_2 ->execute();
$statement_1 ->setFetchMode(PDO::FETCH_NUM);
$result_arr_1 = $statement_1->fetchAll();
$statement_2 ->setFetchMode(PDO::FETCH_NUM);
$result_arr_2 = $statement_2->fetchAll();
$result = new result();
$result->article=$result->pushData($result->article,$result_arr_1);
$result->radio=$result->pushData($result->radio,$result_arr_2);
echo json_encode($result);