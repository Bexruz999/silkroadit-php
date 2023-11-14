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

            <div class="front-page-slider-wrapper">
                <div class="owl-carousel  owl-theme  front-page-slider">

                    <div class="item" data-img="2018__default/preview.jpg" data-text="Хостинг бизнес-класса">
                        <div class="slider  slider--default  slider--ru" style="position: relative">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12  col-sm-8  col-md-7  col-lg-8">
                                        <h1 class="slider__title"><?= $variable['hostingBusinessClass']; ?></h1>
                                        <div class="slider__text"><?= $variable['doBusiness']; ?></div>
                                    </div>
                                </div>
                            </div>
                            <img class="server" style="position: absolute; bottom: -60px; right: 0; width: 500px; transform: scaleX(-1);" src="/ISPmaster_files/images/server.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <style>
                @media (max-width: 900px) {
                    .server {
                        display: none;
                    }
                }
            </style>
            
            <div class="" id="">
                <br>
                <br>
                <div class="container">
                    <div class="row">
                        <div class="col-12  col-md-6  order-md-1  text-center">
                            <img class="front-panel__notebook img-responsive" alt="Notebook"
                                 src="/ISPmaster_files/vidy-it-comp3-removebg-preview.png">
                        </div>
                        <div class="col-12  col-md-6">
                            <h4 style="line-height: 1.7"
                                class="front-panel__notebook"><?= $variable['Introduction']; ?></h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <style>
                    /*.blocks-wrap {
                        width: 50%;
                    }*/

                    .blocks {
                        color: white;
                        padding: 17px;
                        border-radius: 15px;
                        margin-bottom: 15px;
                    }

                    .blocks h4 {
                        margin-bottom: 10px;
                        font-weight: bolder;
                    }

                    .blocks-title {
                        text-align: center;
                    }
                </style>
                <h2 class="blocks-title">
                    <br>
                    <?= $variable['Blocktitle']; ?>
                    <br>
                    <br>
                </h2>
                <div class="row" style="color: white; border-radius: 15px">
                    <div class="blocks-wrap col-12  col-md-6">
                        <div style="background-color: #02ab92;" class="blocks">
                            <h4><?= $variable['Blockh1']; ?></h4>
                            <p><?= $variable['Blockp1']; ?></p>
                            <br>
                        </div>
                    </div>

                    <div class="blocks-wrap col-12  col-md-6">
                        <div style="background-color: #01b949;" class="blocks">
                            <h4><?= $variable['Blockh2']; ?></h4>
                            <p><?= $variable['Blockp1']; ?></p>
                            <br>
                        </div>
                    </div>

                    <div class="blocks-wrap col-12  col-md-6">
                        <div style="background-color: #ff1922;" class="blocks">
                            <h4><?= $variable['Blockh3']; ?></h4>
                            <p><?= $variable['Blockp3']; ?></p>
                            <br>
                        </div>
                    </div>

                    <div class="blocks-wrap col-12  col-md-6">
                        <div style="background-color: #ff9701;" class="blocks">
                            <h4><?= $variable['Blockh4']; ?></h4>
                            <p><?= $variable['Blockp4']; ?></p>
                            <br>
                        </div>
                    </div>
                </div>
            </div>

            <div id="services">
                <div class="front-services">
                    <div class="container">

                        <div class="front-services__item">
                            <div class="front-services__item-header">
                                <?= $variable['services'][0]['title']; ?>
                            </div>
                            <div class="front-services__item-logo-wrapper">
                                <img class="front-services__item-logo" src="/ISPmaster_files/vds_icon.png">
                            </div>
                            <div class="front-services__item-price">
                                <?= $variable['services'][0]['price']; ?>
                            </div>
                            <div class="front-services__item-desc">
                                <?= $variable['services'][0]['text']; ?>
                            </div>
                            <a href="https://wa.me/77778610063" class="front-services__item-link">
                                <?= $variable['more']; ?>
                            </a>
                        </div>

                        <br class="front-services__row-separator">

                        <div class="front-services__item">
                            <div class="front-services__item-header">
                                <?= $variable['services'][1]['title']; ?>
                            </div>
                            <div class="front-services__item-logo-wrapper">
                                <img class="front-services__item-logo" src="/ISPmaster_files/cloud_icon.png">
                            </div>
                            <div class="front-services__item-price">
                                <?= $variable['services'][1]['price']; ?>
                            </div>
                            <div class="front-services__item-desc">
                                <?= $variable['services'][1]['text']; ?>
                            </div>
                            <a href="https://wa.me/77778610063" class="front-services__item-link">
                                <?= $variable['more']; ?>
                            </a>
                        </div>

                        <div class="front-services__item  front-services__item--dedicated">
                            <div class="front-services__item-header">
                                <?= $variable['services'][2]['title']; ?>
                            </div>
                            <div class="front-services__item-logo-wrapper">
                                <img class="front-services__item-logo" src="/ISPmaster_files/dedic_icon.png">
                            </div>
                            <div class="front-services__item-price">
                                <?= $variable['services'][2]['price']; ?>
                            </div>
                            <div class="front-services__item-desc">
                                <?= $variable['services'][2]['text']; ?>
                            </div>
                            <a href="https://wa.me/77778610063" class="front-services__item-link">
                                <?= $variable['more']; ?>
                            </a>
                        </div>

                    </div>
                </div>

                <div class="container">
                    <div class="front-backup-promo">
                        <?= $variable['protectYourData']; ?>
                    </div>
                </div>
            </div>

            <div class="front-choose">
                <div class="container">

                    <h2 class="front-choose__title"><?= $variable['ourServices']['title']; ?></h2>

                    <?php foreach ($variable['ourServices']['items'] as $item) { ?>
                        <article class="front-choose__article">
                            <div class="front-choose__icon front-choose__icon_dedicated"></div>
                            <div class="front-choose__desc">
                                <div class="front-choose__header"><?= $item['title']; ?></div>
                                <div class="front-choose__price"><?php /*= $item['price']; */ ?>
                                    <a href="https://wa.me/77778610063"
                                       class="front-choose__button front-choose__button_blue"><?= $variable['more']; ?></a>
                                </div>
                            </div>
                            <span style="font-size: 16px;"><?= $item['text']; ?></span>
                        </article>
                    <?php } ?>

                </div>
            </div>

            <div class="front-panel" id="front-panel">
                <div class="container">
                    <div class="row">
                        <div class="col-12  col-md-6  order-md-1  text-center">
                            <img class="front-panel__notebook img-responsive" alt="Notebook"
                                 src="/ISPmaster_files/ispmanager-notebook_2_0.png">
                        </div>
                        <div class="col-12  col-md-6">
                            <h4 class="front-panel__small-title"><?= $variable['ISPmanagerControlPanel']; ?></h4>
                            <p class="front-panel__text"><?= $variable['easyToManage']; ?></p>
                            <h4 class="front-panel__small-title"><?= $variable['commandLineKnowledge']; ?></h4>
                            <p class="front-panel__text"><?= $variable['allActions']; ?></p>
                            <h4 class="front-panel__small-title"><?= $variable['installingCMS']; ?></h4>
                            <p class="front-panel__text"><?= $variable['needToCreateSite']; ?></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="front-ddos" id="front-ddos">
                <div class="container">
                    <h2 class="front-admin__title"><?= $variable['DDoSProtection']; ?></h2>

                    <p class="front-admin__description">
                        <?= $variable['filterIncomingTraffic']; ?>
                    </p>

                    <div class="row">
                        <div class="col-sm-6 col-12">
                            <p class="front-admin__body">
                                <?= $variable['connectAChannel']; ?>
                            </p>
                        </div>
                    </div>
                    <div class="front-ddos__img"></div>
                </div>
            </div>

            <div class="front-dc" style="background-size: cover;">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <br>
                            <br>
                            <br>
                            <h2 class="front-dc__title">
                                <?= $variable['provideServers']; ?>
                            </h2>

                            <p class="front-dc__text">
                                <?= $variable['areHosted']; ?>
                            </p>

                            <p class="front-dc__text">
                                <?= $variable['areAvailable']; ?>
                            </p>

                            <p class="front-dc__text">
                                <?= $variable['serversAreBasedOn']; ?>
                            </p>
                        </div>
                        <div class="col-12 col-md-6">
                            <br>
                            <br>
                            <img class="servers" width="100%" src="/ISPmaster_files/images/servers.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital@1&family=Oswald:wght@500&display=swap');
                    @import url('https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css');

                    /* grid layout */
                    ol, ol::before, ol::after,
                    ol *, ol *::before, ol *::after {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box
                    }

                    ol {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
                        gap: 1rem;
                        margin-inline: auto;
                        padding-block: 1rem;

                        list-style: none;
                        counter-reset: count;
                    }

                    /* card layout/styling */
                    ol > li {
                        --card-background-color: #f0f0f0;
                        --card-text-color: #0F0F0F;
                        --card-border-radius: 0.5rem;
                        --card-padding-block: 1.5rem;
                        --card-padding-inline: 1rem;

                        --outset-size: 0.75rem;
                        --outset-background-color: #e5e5e5;

                        --number-font-size: 3rem;
                        --number-overlap: 0.5rem;
                        --number-font-family: 'Oswald', sans-serif;
                        --number-font-weight: 500;

                        margin: var(--outset-size);
                        margin-top: calc(var(--number-font-size) - var(--number-overlap));
                        border-radius: var(--card-border-radius);
                        padding-block: var(--card-padding-block);
                        padding-inline: var(--card-padding-inline);

                        color: var(--card-text-color);
                        background-color: var(--card-background-color);
                        box-shadow: inset 1px 1px 0px rgb(255 255 255 / .5),
                        inset -1px -1px 0px rgb(0 0 0 / .25),
                        calc(var(--outset-size) * .25) calc(var(--outset-size) * .25) calc(var(--outset-size) * .5) rgb(0 0 0 / .25);
                        position: relative;
                        counter-increment: count;
                        margin-bottom: 60px;
                    }

                    ol > li::after {
                        content: counter(count, decimal-leading-zero);
                        position: absolute;

                        bottom: calc(100% - var(--number-overlap));
                        left: 50%;
                        transform: translateX(-50%);

                        color: var(--accent-color);
                        font-family: var(--number-font-family);
                        font-weight: var(--number-font-weight);
                        font-size: var(--number-font-size);
                        line-height: 1;
                        z-index: -1;
                        top: -40px;
                    }

                    ol > li::before {
                        content: "";
                        position: absolute;
                        width: calc(100% + (var(--outset-size) * 2));
                        height: 100%;
                        bottom: calc(var(--outset-size) * -1);
                        left: calc(var(--outset-size) * -1);
                        z-index: -1;

                        border-bottom-left-radius: calc(var(--card-border-radius) + var(--outset-size));
                        border-bottom-right-radius: calc(var(--card-border-radius) + var(--outset-size));

                        background-color: var(--outset-background-color);

                        background-image: linear-gradient(to left, var(--outset-background-color) calc(var(--outset-size) * 2), transparent 0),
                        linear-gradient(135deg, var(--accent-color) 80%, var(--outset-background-color) 0);
                    }

                    /* card content */
                    h1 {
                        font-size: 2.5rem;
                        font-family: 'Oswald', sans-serif;
                        text-align: center;
                        font-weight: normal
                    }

                    .icon {
                        font-size: 2rem;
                        text-align: center;
                        margin-bottom: calc(var(--card-padding-block) * .5);
                    }

                    .title {
                        text-transform: uppercase;
                        font-family: 'Oswald', sans-serif;
                        text-align: center;
                        color: var(--accent-color)
                    }

                    .descr {
                        color: var(--text-color);
                        font-family: 'Merriweather', serif;
                        text-align: center;
                    }

                    .desc p {
                        font-size: 18px;
                    }

                    /*  */
                    body {
                        background-color: #f5f5f5;
                        min-height: 100vh;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                </style>

                <br>
                <br>
                <br>

                <h1><?= $variable['primiertitle'] ?></h1>

                <div class="col-11 m-auto">
                    <br>
                    <p class="front-panel__text"><?= $variable['primierdesc1'] ?></p>
                    <p class="front-panel__text"><?= $variable['primierdesc2'] ?></p>
                </div>

                <ol class="row justify-content-center">
                    <li class="col-9" style="--accent-color: #ff9701">
                        <div class="icon"><i class="fa-light fa-lightbulb-exclamation-on"></i></div>
                        <div class="desc"><p><?= $variable['primiertext1'] ?></p></div>
                    </li>
                    </li>

                    <li class="col-9" style="--accent-color: #01ab92">
                        <div class="icon"><i class="fa-light fa-flower-daffodil"></i></div>
                        <div class="desc"><p><?= $variable['primiertext2'] ?></p></div>
                    </li>
                    <li class="col-9" style="--accent-color: #fe1922">
                        <div class="icon"><i class="fa-light fa-chart-line-up"></i></div>
                        <div class="desc"><p><?= $variable['primiertext3'] ?></p></div>
                    </li>
                    <li class="col-9" style="--accent-color: #00ba49">
                        <div class="icon"><i class="fa-light fa-chart-mixed"></i></div>
                        <div class="desc"><p><?= $variable['primiertext4'] ?></p></div>
                    </li>
                </ol>
            </div>

        </div>
    </main>

    <?php require_once('./partial/footer.php'); ?>

</div>

</body>
</html>
