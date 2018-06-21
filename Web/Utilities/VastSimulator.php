<?php
$headers = apache_request_headers();

$userAgent = "Web";

foreach ($headers as $header => $value) {
            if ($header == 'User-Agent' && true)
                            $userAgent = $value;
}

if (strpos($userAgent, "Roku") !== false) {
        $result =  file_get_contents('http://www.xxx.com/vast/vast13.xml');
} else if ( strpos($userAgent, "Roku") !== false ||
        strpos($userAgent, "Android") !== false ||
                strpos($userAgent, "webOS") !== false ||
                        strpos($userAgent, "iPhone") !== false ||
                                strpos($userAgent, "iPad") !== false ||
                                        strpos($userAgent, "iPod") !== false ||
                                                strpos($userAgent, "BlackBerry") !== false ||
                                                        strpos($userAgent, "Windows Phone") !== false ) {
                // this is the case of mobile
         $result =  file_get_contents('http://www.xxx.com/vast/vast14.xml');
} else {
                // this is the deafult case - web
        $result =  file_get_contents('http://www.xxx.com/vast/vast12.xml');
}
echo $result;
exit;
