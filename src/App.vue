<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand to="/">
      	<b-img src="static/favicon.png" height="30" alt="icon"></b-img>
      	{{appName}}
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <!-- menu items with authentication -->
          <template v-if="isAuthenticated">
            <b-nav-item to="/showData" active-class="active" exact>Data</b-nav-item>
            <b-nav-item to="/wishList" active-class="active" exact>Wish List</b-nav-item>
          </template>          

          <!-- profile item -->
          <template v-if="!isAuthenticated">
            <b-nav-item @click.prevent="login" active-class="active" exact right>Login</b-nav-item>
          </template>
          <template v-else>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em>{{ profile.name }}</em></template>
              <b-dropdown-item to="/profile">Profile</b-dropdown-item>
              <b-dropdown-item @click.prevent="logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      appName: 'Unicorn',
      isAuthenticated: false,
      profile: this.$auth.profile
    };
  },
  async created() {
    try {
      await this.$auth.renewTokens();
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
