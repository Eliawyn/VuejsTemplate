<template>
  <div id="app" class="container">
    <!-- navbar -->
    <nav class="navbar is-transparent">
      <!-- Logo icon with burger -->
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <div v-on:click="expandBurger" class="navbar-burger burger" data-target="navbarContent">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <!-- Menu list for routes -->
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Docs</a>
            <div class="navbar-dropdown is-boxed">
              <router-link class="navbar-item" to="/tiles">Tiles</router-link>
            </div>
          </div>
        </div>

        <!-- Menu List end of navbar -->
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button is-info">
                  <span>Login</span>
                  <span class="icon">
                    <i class="fas fa-sign-in-alt"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Content which is rendered -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    methods: {
      // method to expand the burger-menu for mobile
      expandBurger: (event) => {
        const menu = document.getElementsByClassName('navbar-menu')[0]
        const burger = document.getElementsByClassName('navbar-burger')[0]

        burger.classList.toggle('is-active')
        menu.classList.toggle('is-active')
      }
    }
  }
</script>

<style>
/* Selected navbar item */
.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}
</style>
