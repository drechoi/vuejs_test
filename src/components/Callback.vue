<template>
  <div class="callback">
    <p>Logging in.. Please wait</p>
  </div>

</template>

<script>
export default {
  methods: {
    handleLoginEvent(data) {
      this.$router.push(data.state.target || '/');
    }
  },
  created() {
    this.$auth.handleAuthentication();
  }
};
</script>
