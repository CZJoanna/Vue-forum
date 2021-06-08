<template>
  <div id="app">
    <Navbar/>
    <main class="pt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>

<script>
import "bootstrap";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
