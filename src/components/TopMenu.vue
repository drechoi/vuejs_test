<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="dark">
    <template v-if="isAuthenticated">
      <b-navbar-toggle target="nav_collapse" />
    </template>
    <b-navbar-brand to="/">
      <b-img src="static/favicon.png" height="30" alt="icon" />
      {{ appName }}
    </b-navbar-brand>

    <b-collapse id="nav_collapse" is-nav>
      <b-navbar-nav>
        <template v-if="isAuthenticated">
          <b-nav-item to="/showData" active-class="active" exact>Data</b-nav-item>
          <b-nav-item to="/showData" active-class="active" exact>Feed [later]</b-nav-item>
          <b-nav-item to="/showData" active-class="active" exact>Users</b-nav-item>
          <b-nav-item to="/wishList" active-class="active" exact>Wish List</b-nav-item>
        </template>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-nav class="ml-auto">
      <!-- profile item -->
      <template v-if="!isAuthenticated">
        <b-nav-item
          active-class="active"
          exact
          right
          @click.prevent="login">Login</b-nav-item>
      </template>
      <template v-else>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content">
            <img
              :src="profile.picture"
              height="30">
            <em>{{ profile.name }}</em>
          </template>
          <b-dropdown-item to="/profile">Profile</b-dropdown-item>
          <b-dropdown-item @click.prevent="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </template>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      default: null,
    }
  },
  data() {
    return {
      profile: this.$auth.profile,
      isAuthenticated: false,
    };
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
