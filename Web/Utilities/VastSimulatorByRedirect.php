<?php
$headers = apache_request_headers();

$userAgent = "Web";

foreach ($headers as $header => $value) {
    if ($header == 'User-Agent')
        $userAgent = $value;
}

if (strpos($userAgent, "Roku") !== false) {
  header('Location: http://www.xxx.com/vast/vast1.xml');
} else if ( strpos($userAgent, "Roku") !== false ||
        strpos($userAgent, "Android") !== false ||
        strpos($userAgent, "webOS") !== false ||
        strpos($userAgent, "iPhone") !== false ||
        strpos($userAgent, "iPad") !== false ||
        strpos($userAgent, "iPod") !== false ||
        strpos($userAgent, "BlackBerry") !== false ||
        strpos($userAgent, "Windows Phone") !== false ) {
        // this is the case of mobile
  header('Location: http://www.xxx.com/vast/vast2.xml');
} else {
        // this is the deafult case - web
  header('Location: http://www.xxx.com/vast/vast3.xml');
}
exit;
?>
