<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">
      <b-img src="static/favicon.png" height="30" alt="icon"></b-img>
      {{appName}}
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <!-- profile item -->
        <template v-if="!isAuthenticated">
          <b-nav-item @click.prevent="login" active-class="active" exact right>Login</b-nav-item>
        </template>
        <template v-else>
          <b-nav-item to="/showData" active-class="active" exact>Data</b-nav-item>
          <b-nav-item to="/wishList" active-class="active" exact>Wish List</b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <img :src="profile.picture" height="30">
              <em>{{ profile.name }}</em>
            </template>
            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
            <b-dropdown-item @click.prevent="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      profile: this.$auth.profile,
      isAuthenticated: false,
    };
  },
  props: ['appName'],
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
