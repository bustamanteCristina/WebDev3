<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
      <b-col lg>
        <b-card
          title="SIGN UP"
          style="box-shadow:12px 12px 2px 1px rgba(0, 0, 255, .2);border-radius:10%;margin-top:10%"
        >
        <br>
          <b-form @submit="onSubmit" v-if="show">

            <b-form-group id="lastName">
              <b-form-input
                id="userLastName"
                v-model="form.userLastName"
                type="text"
                required
                placeholder="LastName"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="firstName">
              <b-form-input
                id="userFirstName"
                v-model="form.userFirstName"
                type="text"
                required
                placeholder="FirstName"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="emailAdd">
              <b-form-input
                id="userEmail"
                v-model="form.userEmail"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="initialUserPassword">
              <b-form-input
                id="initialPassword"
                v-model="form.initialPassword"
                type="password"
                required
                placeholder="Password"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="confirmUserPassword">
              <b-form-input
                id="confirmedPassword"
                v-model="form.confirmedPassword"
                type="password"
                required
                placeholder="Confirm Password"
              ></b-form-input>
            </b-form-group>

            <center><b-button type="submit" class="btn btn-outline-primary" variant="primary" v-on:click="register()">Submit</b-button></center>
          </b-form>
        </b-card>
      </b-col>

      <b-col></b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        userLastName: "",
        userFirstName: "",
        userEmail: "",
        initialPassword: "",
        confirmedPassword: "",
      },
      show: true
    };
  },
  
    methods: {
        register() {
               window.location.href = '/login#/Login';
           }
           
    }
};
</script>

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