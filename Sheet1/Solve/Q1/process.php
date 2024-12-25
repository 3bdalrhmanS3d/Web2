<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $name = $_POST['username'];
        $password = $_POST['password'];

        echo "Name: $name <br> Email: $password";
    }
    else 
    {
        echo "Error";
    }
?>