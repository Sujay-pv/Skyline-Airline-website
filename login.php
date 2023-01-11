
<?php   
    session_start();
    include('config.php');
    if(isset($_REQUEST['login'])){

        $username = $_REQUEST['uname'];  
        $password = $_REQUEST['pass'];  
          
        $res = mysqli_query($con,"select * from users where username = '$username' and password='$password'");
        $result = mysqli_fetch_array($res);

              
            if($result){  
                $_SESSION['currentlogin']= "1";
                header("location:home.html"); 
            }  
            else{  
                echo "<h1> Login failed. Invalid username or password.</h1>";  
            }     
    }
?>