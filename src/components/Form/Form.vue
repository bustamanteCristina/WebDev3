<template>
    <body>
        <div class="row registerPage">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="container">
                    <div class="card ">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="username" class="bmd-label-floating">Username</label>
                                <input type="text" class="form-control" v-model="input.username">
                            </div>
                            <div class="form-group">
                                <label for="pwd" class="bmd-label-floating">Password</label>
                                <input type="password" class="form-control"  v-model="input.password">
                            </div>
                            <div class="form-group">
                                <label for="pwd" class="bmd-label-floating">Confirm Password</label>
                                <input type="password" class="form-control"  v-model="input.password1">
                            </div>
                            <center>
                                <button type="button" class="btn btn-outline-success login-btn" @click="register()">Sign In</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
    </div>
 
    <!-- login -->
    <div class="row loginPage">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="container">
                <div class="card ">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="username" class="bmd-label-floating">Username</label>
                            <input type="text" class="form-control" v-model="input.username">
                        </div>
                        <div class="form-group">
                            <label for="pwd" class="bmd-label-floating">Password</label>
                            <input type="password" class="form-control"  v-model="input.password">
                        </div>
                        <center>
                            <button type="button" class="btn btn-outline-success login-btn" @click="login()">Login</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
   
</template>

    


<script>
        export default {
        data() {
            return {
                input: {
                    username: "",
                    password: "",
                    password1:""
                

                }
            }
        },
        methods: {
            showHide(){
                
            },
            register(value){
                this.username = value;
                this.password = value;
                this.password1 = value;
            },
            login() {
                if(this.input.username == "tina" && this.input.password == 1234) {
                    alert("Successful")
                } else {
                    alert("Incorrect");
                }
            }
        }
    }
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




    


