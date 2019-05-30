<template>
  <div>
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>

    <b-modal id="modal-1" title="BootstrapVue" @ok="handleOk">
      <p class="my-4">Hello from modal!</p>
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-input id="name-input" v-model="name" :state="nameState" required />
      </form>
    </b-modal>

    <b-nav tabs>
      <b-nav-item active to="/wishList">All</b-nav-item>
      <b-nav-item>[New]</b-nav-item>
      <b-nav-item>[History]</b-nav-item>
    </b-nav>

    {{ test }}
    // Here is your wish list
    <wishList v-bind:todos="$store.state.wish.wishItems"></wishList>
  </div>
</template>

<script>
import WishList from '@/components/wishList';

export default {
  components: {
    // Add a reference to the TodoList component in the components property
    WishList
  },
  computed: {
    test() {
      return 1;
    }
  },
  methods: {
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      alert('handle ok!' + this.name);
    },
    handleSubmit() {
      alert('handle submit!');
    }
  }
};
</script>
