<?php require 'db_connect.php'?>
<?php
    $db=new db();
    $db ->setAttribute(PDO::ATTR_CASE,PDO::CASE_UPPER);
    $statement = $db ->sel("select * from members");
    $statement ->execute();
    $statement ->setFetchMode(PDO::FETCH_NUM);
    $result_arr = $statement->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="about">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>航海日志</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap-theme.css">
    <!-- SouthBoat-->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/remodal.css">
    <link rel="stylesheet" href="css/remodal-default-theme.css">
    <!-- fontAwesome-->
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <!-- icon-->
    <link rel="shortcut icon" href="images/favicon.ico">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style>
        .remodal-bg.with-red-theme.remodal-is-opening,
        .remodal-bg.with-red-theme.remodal-is-opened {
            filter: none;
        }

        .remodal-overlay.with-red-theme {
            background-color: #f44336;
        }

        .remodal.with-red-theme {
            background: #fff;
        }
    </style>
</head>
<body>
<!--nav-->
<nav id="header" class="navbar" style="background: #232323">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">
                    <img alt="southboat" src="images/logo.jpg">
                    <span>南船北海</span>
                </a>
            </div>
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="index.html">首页</a></li>
                    <li><a href="article.html">甲板故事</a></li>
                    <li class="active"><a href="#">航海日志</a></li>
                    <li><a href="contact.html">联系我们</a></li>
                </ul>
            </div>
        </div>
    </nav>
<!--southBoatHistory-->
<div class="container">

    <ol class="breadcrumb">
        <li><a href="index.html">主页</a></li>
        <li class="active">关于</li>
    </ol>


    <div class="row">
        <header class="page-header">
            <h1 class="page-title">About us</h1>
        </header>

        <!-- Article main content -->
        <article class="col-sm-8 maincontent">
            <h3>上古时期 <span><i class="fa fa-child fa-lg"></i></span></h3>
            <p>本着专门做电台的想法，南船北海最初由船长、舵手、帆手共同成立于 2014 年 7 月。后来开着船一路航行，遇到很多有趣的人，邀请他们上船，于是南船也渐渐热闹了。</p>
            <h3>石器时代 <span><i class="fa fa-paw fa-lg"></i></span></h3>
            <p>从一开始的电台节目，做了一系列的东西，到了现今的订阅号。订阅号内容很杂，主要发布船员们写的东西，还有电台节目或者舵手唱的歌，甚至船员们的聊天截图。</p>
            <h3>蒸汽朋克 <span><i class="fa fa-hand-spock-o"></i></span></h3>
            <p>这些内容的共同点，就是自由。我们相处在这自由里，似乎也有了另一种生活。</p>
            <p></p>
            <h3>号角吹响 <span><i class="fa fa-paper-plane-o fa-lg"></i></span></h3>
            <p>我们生活在船上，生活在海上。现实中在餐厅吃着饭，想起还有一个我在南船的甲板上望着海洋，这本身就是一件很酷的事不是吗？</p>
            <hr>

            <div>


            </div>
        </article>
        <!-- /Article -->

        <!-- Sidebar -->
        <aside class="col-sm-4 sidebar sidebar-right">

            <div class="widget">
                <img src="images/about.jpg" alt="" class="pull-center img-rounded"  height="150" width="220" >
                <h4><span><i class="fa fa-comment"></i></span>南船夜话</h4>
                <div class="night-talk">
                    <p> 白树:中国天眼刚投入使用就监听到可以信号 霍金警告：不要回答任何信息<br>
                        向死：我擦<br>
                        向死：这消息可靠吗<br>
                        白树：新闻是真的<br>
                        向死：哈哈哈，我倒希望回复<br>
                        向死：如果真的来毁灭我们的<br>
                        向死：就来毁灭吧<br>
                        向死：此生见一次外星人我也无憾了<br>
                        白树：。。。<br>
                        白树：我想晚点见<br>
                        白树：五六十岁什么的<br>
                        向死：。。。
                    </p>
                </div>
            </div>

        </aside>
        <!-- /Sidebar -->

    </div>
</div>
<section class="namecard" id="member">

    <div class="container">
        <!-- start of MemberList -->
        <div class="u-textCenter">
            <h3>成员列表</h3>
        </div>

        <div id="page" class="row">
            <!--Start of u-textCenter-->
            <div class="u-textCenter">

                <!--Start of Grid-cell-->
                <?php
                    for($i=0;$i<count($result_arr);$i++){
                ?>
                <div class="col-lg-3  col-md-3 col-sm-4 col-xs-4 Profile ">
                    <figure class="profile-figure">
                        <!-- 连接至模态框编号 -->
                        <a href="#No_<?php echo $result_arr[$i][0] ?>"><img src="images/<?php echo $result_arr[$i][3] ?>.jpg"
                                                            alt=""
                                                            class="img-circle img-circle-hover"
                                                            width="100" height="100"></a>
                    </figure>
                    <h4 class="text-center">
                        <?php echo $result_arr[$i][1] ?>
                    </h4>

                    <p class="text-center"><?php echo $result_arr[$i][2] ?></p>

                    <!-- Start of modal -->
                    <div class="remodal" data-remodal-id="No_<?php echo $result_arr[$i][0] ?>" role="dialog"
                         aria-labelledby="modal1Title"
                         aria-describedby="modal1Desc">
                        <button data-remodal-action="close" class="remodal-close" aria-label="Close"></button>

                        <div><!-- start of description in modal -->
                            <img src="images/<?php echo $result_arr[$i][3] ?>.jpg" alt="" class="img-circle"
                                 width="100"
                                 height="100">

                            <h3 class="Text Text--spacedSmall"><?php echo $result_arr[$i][1] ?></h3>

                            <p class="Text Text--small" ><?php echo $result_arr[$i][2] ?></p>

                            <p class="self--descript">
                                <?php echo $result_arr[$i][4] ?>
                            </p>
                            <hr>
                            <!-- 社交信息 -->
                            <div class="social_link">
                                <span><a href="<?php echo $result_arr[$i][6] ?>"><i class=""></i><?php echo $result_arr[$i][5] ?></a></span>
                            </div>

                        </div>
                        <!-- Enb of description in modal-->
                        <br>
                    </div>
                    <!-- Enb of modal -->
                </div>
                <?php

                    }
                ?>
                <!--End of Grid-cell-->

            </div>
            <!--End of u-textCenter-->
        </div>
        <!-- End of Grid -->
    </div>
    <!--End of container-->
</section>
<!--footer-->
<footer class="footer">
    <div class="footer1">
        <div class="container">
            <div class="row">

                <div class="col-md-3 widget">
                    <h3 class="widget-title">联系我们</h3>
                    <div class="widget-body">
                        <p><b>邮箱:</b><a href="">admin@southboat.org</a><br></p>
                    </div>
                </div>

                <div class="col-md-3 widget">
                    <h3 class="widget-title">Follow Us</h3>
                    <div class="widget-body">
                        <p class="follow-me-icons">
                            <a class="social-btn bspopover" data-toggle="popover" data-placement="top" data-trigger="hover" data-html="true" data-content="<img src=images/wechat.jpg style='width: 140px; height: 140px;'>" data-original-title="" title="">
                                <i class="fa fa-weixin fa-2"></i>
                            </a>
                            <a href="http://weibo.com/u/5385345004" target="_blank"><i class="fa fa-weibo fa-2"></i></a>
                        </p>
                    </div>
                </div>

                <div class="col-md-6 widget">
                    <h3 class="widget-title">内容许可</h3>
                    <div class="widget-body">
                        <p>本站由 <a href="https://www.digitalocean.com/?refcode=3c8422b30f9d">DigitalOcean</a> 提供服务器支持<a href="http://www.qiniu.com/"> 七牛 </a>提供 CDN 存储服务</p>
                        <p>除特别说明外，用户内容均采用
                            <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-sa/3.0/cn/">知识共享署名-相同方式共享 3.0 中国大陆许可协议</a>进行许可</p>
                    </div>
                </div>

            </div> <!-- /row of widgets -->
        </div>
    </div>
    <div class="footer2">
        <div class="container text-center">
            <small class="copyright">Copyright © 2016 南船北海</small>
        </div><!--//container-->
    </div>
</footer>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
<script src="js/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
<script src="js/remodal.js"></script>
<script>$(function () {$('[data-toggle="popover"]').popover()})</script>
</body>
</html>