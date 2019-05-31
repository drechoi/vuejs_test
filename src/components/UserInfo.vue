<template>
  <b-card no-body>
    <b-row no-gutters>
      <b-col md="3" class="img-bg">
        <b-img blank
               blank-color="#777"
               height="75"
               rounded="circle" />
      </b-col>
      <b-col md="6">
        <b-card-body :title="userName">
          <b-card-text>This is user info !!!</b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: '[User]',
    },
  }
};
</script>

<style scoped>
.img-bg {
  background-color: #000000;
  vertical-align-align: bottom;
}
</style>
