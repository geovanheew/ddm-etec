<?php
    header('Content-Type: application/json');
    $req = $_SERVER['HTTP_USER_AGENT'];

    if (strpos($req, 'Windows')) {
        $redirectUrl = 'windows.php';
    } elseif (strpos($req, 'Linux')) {
        $redirectUrl = 'android.php';
    } else {
        $redirectUrl = 'apple.php';
    }

    header('Refresh: 5; URL=' . $redirectUrl);
    
    echo json_encode([
        'message' => 'Redirecionando em 5 segundos...',
        'redirectUrl' => $redirectUrl
    ]);
?>
