<template>
  <div id="app">
    <v-app>
      <v-content class="my-5 mx-10">
        <v-row>
          <Header></Header>
        </v-row>
        <v-divider class="my-5 mx-10"></v-divider>
        <v-row>
          <router-view/>
        </v-row>
      </v-content>
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
  import Header from "./components/Header";
  export default {
    components: {Header}
  }
</script>
