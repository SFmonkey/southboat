<?php
/**
 * Created by sifu.
 * User: Administrator
 * Date: 2016/4/5
 * Time: 17:39
 */
$dsn = "mysql:host=127.0.0.1;dbname=southboat";

$user = "zihan05";

$pass = "";
class db extends PDO{
    public function __construct(){
        try {
            parent::__construct("$GLOBALS[dsn]","$GLOBALS[user]","$GLOBALS[pass]",array(PDO::ATTR_PERSISTENT => true));
            parent::exec("set names utf8");
            //echo "DB connect";
        } catch (PDOException $e) {
            echo 'Connection failed: ' . $e->getMessage();
        }
    }


    public final function sel($sql){
        try{
            return parent::prepare($sql);
        }catch (PDOException $e){
            echo 'error ' . $e->getMessage();
        }
        return false;
    }

    public final function exec($sql){
        try{
            return parent::prepare($sql);
        }catch (PDOException $e){
            echo 'error ' . $e->getMessage();
        }
        return false;
    }

}



