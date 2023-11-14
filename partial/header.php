<header>
    <div id="header">
        <div class="region  region-header">

            <div class="container">
                <div class="row">
                    <div class="LogoHeaderBlock  col-3  col-sm-3  col-lg-4">
                        <a href="/">
                            <img class="img-responsive" src="/ISPmaster_files/logo.png" alt="">
                        </a>
                    </div>

                    <div class="PhoneHeaderBlock  col-6  col-sm-4  col-lg-3">
                        <a href="<?= $variable['phone']['link']; ?>" class="PhoneHeader__text"><?= $variable['phone']['text']; ?></a>
                    </div>

                    <div class="EmailHeaderBlock  d-none col-3 d-sm-flex  col-sm-3  col-lg-3">
                        <p>
                            <a class="EmailHeader__text" href="mailto:<?= $variable['email']['link']; ?>"><?= $variable['email']['text']; ?></a>
                        </p>
                    </div>

                    <div class="LoginHeaderBlock d-md-flex col-md-2 col-3">
                        <?= $languageSelect; ?>
                    </div>
                </div>
            </div>

        </div>
    </div>
</header>
