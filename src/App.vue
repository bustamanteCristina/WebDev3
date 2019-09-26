  <template>
    <div id="app">
      <Header></Header>
      <AppBody></AppBody>
    </div>
  </template>

  <script>
  import Header from "components/frame/header.vue";
  import AppBody from "components/frame/body.vue";
 


  export default {
    name: "app",
    components: {
      Header,
      AppBody
    }
  };
  </script>