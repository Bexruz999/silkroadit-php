<?php
session_start();
if (!isset($_SESSION['language'])) {
    $_SESSION['language'] = 'ru';
}
if (isset($_POST['language'])) {
    $_SESSION['language'] = $_POST['language'];
    $referer = parse_url($_SERVER['HTTP_REFERER'], PHP_URL_PATH);
    header('Location: ' . $referer);
    die();
}
$array = require_once('./config/config.php');
$variable = $array[$_SESSION['language']];

$options = '';
foreach ($array as $langShort => $item) {
    $selected = ($_SESSION['language'] == $langShort) ? ' selected' : null;
    $options .= '<option value="' . $langShort . '"' . $selected . '>' . $item['language'] . '</option>';
}
$languageSelect = '<form method="post" action="/">
    <select name="language" onchange="this.form.submit()">' . $options . '</select>
</form>';

switch ($_SERVER['REQUEST_URI']) {
    case  '/get':
        require_once('./pages/payment.php');
        break;
    case  '/contacts':
    case  '/payments':
    case  '/terms':
    case  '/security':
    case  '/privacy':
    case  '/refund':
        require_once('./pages/page.php');
        break;
    default:
        require_once('./pages/landing.php');
}
