<template>
  <div>
    // JavaScrit expressions in Vue are enclosed in double curly brackets.
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <b-card-group>
      <b-card v-for="todo in todos" :key="todo.id" style="max-width: 20rem;" class="mb-2" title="Card Title">
        <div class='header'>
          {{ todo.title }}
        </div>
        <b-card-text>{{ todo.description }}</b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  props: ['todos']
};
</script>
