<?php
    $message = $_POST['message'];
    
    $fileName = "msg-" . time() . ".txt";

    $file = fopen("./messages/{$fileName}", "w");

    fwrite($file, $message);
    fclose($file);

    header("Location: index.php");