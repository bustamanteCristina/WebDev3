<template>
    <body>
        <div>
            <div class="row loginPage">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <div class="container">
                        <div class="card ">
                            <div class="card-header">Login</div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="username" class="bmd-label-floating">Username</label>
                                    <input type="text" class="form-control" v-model="username">
                                </div>
                                <div class="form-group">
                                    <label for="pwd" class="bmd-label-floating">Password</label>
                                    <input type="password" class="form-control" v-model="password">
                                </div>
                                <center>
                                    <button type="button" class="btn btn-outline-success login-btn" @click="login()">Login</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
    export default {
        name: 'login',
  data() {
    return {
      form: {
        username : "",
        password : ""
      },
        show: true,
        tokenRequired : false
    };
  },
  
    methods: {
        login() {
               if (this.username == "tina@gmail.com" && this.password==1234)
               window.location.href = '/modules#/MainPage';
           },

        }
       
        }
    
</script>




 


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

