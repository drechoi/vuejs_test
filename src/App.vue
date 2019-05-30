<template>
  <div id="app">
    <topNav v-bind:appName="appName" />
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import topNav from '@/components/TopMenu';

export default {
  name: 'App',
  data() {
    return {
      appName: 'Unicorn',
      isAuthenticated: false,
      profile: this.$auth.profile
    };
  },
  components: {
    topNav,
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
