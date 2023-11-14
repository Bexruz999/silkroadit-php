<?php
$configPage = require_once('./config/config_page.php');
$url = substr($_SERVER['REQUEST_URI'], 1);
$variablePage = $configPage[$_SESSION['language']][$url];
?>
<!DOCTYPE html>
<html dir="ltr" class=" js" lang="ru">
    <head>
        <title><?= $variable['title']; ?> | SilkRoadIT</title>
        <?php require_once('./partial/head.php'); ?>
    </head>

    <body class="i18n-ru" data-screen="lg">
        <div class="page-wrapper">

            <?php require_once('./partial/header.php'); ?>

            <main>
                <div id="container">

                    <div class="front-choose">
                        <div class="container">

                            <h2 class="front-choose__title"><?= $variablePage['title']; ?></h2>

                            <article class="front-choose__article">
                                <?= $variablePage['text']; ?>
                            </article>

                        </div>
                    </div>

                </div>
            </main>

            <?php require_once('./partial/footer.php'); ?>

        </div>

    </body>
</html>
