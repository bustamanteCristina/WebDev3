<template>
  <div >
    <h1 class="text-primary">Welcome To Vue Tutorial</h1>
    <div class="row loginPage">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="container">
                <div class="card ">
                    
                    <div class="card-body">
                        <div class="form-group">
                            <label for="username" class="bmd-label-floating">Username</label>
                            <input type="text" class="form-control" id="username">
                        </div>
                        <div class="form-group">
                            <label for="pwd" class="bmd-label-floating">Password</label>
                            <input type="password" class="form-control" id="password">
                        </div>
                        <center>
                            <button type="button" class="btn btn-outline-success login-btn" >Login</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
        //eslint-disable-next-line
        /*eslint-disable*/
        window.$ = require("jquery");
        window.JQuery = require("jquery");
        $(document).ready(function() {
        $("input").attr("required", true);
        
        $("#login-btn").click(function() {
            let input = $("#username").val();
            let pass = $("#password").val();
            $("#password").attr({
            pattern: "[A-Za-z]{8,}",
            title: "This field is required"
            });
            if (input != "" && pass != "") {
            console.log($("#username").val());
            console.log($("#password").val());
            }
        });

        
        });
</script>


 


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
        background-image: url(https://cdn.citylab.com/media/img/citylab/2018/07/E500_NA_Foothill_Side_Front_view/facebook.jpg?1531425508);
        background-size: cover;
        background-repeat: no-repeat;
    }
    .card {
        background-color:pink;
        margin-top: 150px;
    }
    .h3 {
        margin-left: 500px;
        margin-top: 300px;
        font-size: 48px;
        font-family: lucida calligraphy;
    }
</style>
