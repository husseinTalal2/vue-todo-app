<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    msg: String,
  },
});
</script>

<style scoped>
h1 {
  margin-block: 2rem;
  text-align: center;
}
</style>
