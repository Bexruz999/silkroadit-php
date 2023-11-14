<footer>
    <div id="pre-footer">

        <div class="container">
            <div class="row">
                <div class="col-12  MenuBlock">
                    <div id="block-menu-menu-footer-menu" class="block block-menu">
                        <div class="content">

                            <ul class="menu">
                                <li class="expanded">
                                    <ul class="menu">
                                        <li class="first leaf">
                                            <a href="/payments"><?=$variable['paymentMethods'];?></a>
                                        </li>
                                        <li class="leaf">
                                            <a href="/terms"><?=$variable['termsOfUse'];?></a>
                                        </li>
                                        <li class="leaf">
                                            <a href="/security"><?=$variable['securityGuarantees'];?></a>
                                        </li>
                                        <li class="leaf">
                                            <a href="/privacy"><?=$variable['privacyPolicy'];?></a>
                                        </li>
                                        <li class="leaf">
                                            <a href="/refund"><?=$variable['refundPolicy'];?></a>
                                        </li>
                                        <li class="leaf">
                                            <a href="/contacts"><?=$variable['contacts'];?></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div id="footer">

        <div class="container">
            <div class="row">
                <div class="col-12  col-sm-7  PhoneBlock">
                    <div class="prefooter__text"><?= $variable['haveQuestions']; ?></div>
                    <a href="<?= $variable['phone']['link']; ?>" class="prefooter__phone"><?= $variable['phone']['text']; ?></a>
                    <a href="<?= $variable['phone2']['link']; ?>" class="prefooter__phone"><?= $variable['phone2']['text']; ?></a>

                    <br>
                    <br>

                    <div class="prefooter__email d-flex justify-content-between">
                        <a href="mailto:<?= $variable['email']['link']; ?>"><?= $variable['email']['text']; ?></a>
                    </div>
                </div>

                <div class="col-12  col-sm-5  ContactBlock">
                    <div class="footer_address">
                        <p>
                            <?=$variable['company'];?><br />
                            <?=$variable['address'];?><br />
                            <?=$variable['bin'];?>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</footer>
