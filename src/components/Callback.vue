<template>
  <div class="callback">
    <p>Logging in.. Please wait</p>
  </div>

</template>

<script>
export default {
  created() {
    this.$auth.handleAuthentication();
  },
  methods: {
    handleLoginEvent(data) {
      this.$router.push(data.state.target || '/');
    }
  },
};
</script>
