<template>
  <b-card
    style="max-width: 20rem;"
    header-tag="header"
    class="mb-2">
    <h4
      slot="header"
      class="mb-0">
      {{ item.title }}
    </h4>
    <b-card-text>{{ item.description }}</b-card-text>
    <div slot="footer">
      <b-button
        variant="danger"
        @click="create">Delete</b-button>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true },
    // @deprecated
    title: { type: String, default: '' },
    description: { type: String, default: '' },
  }
};
</script>
