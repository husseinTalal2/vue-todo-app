<template>
  <div class="home">
    <Header msg="TODO APP" />
  </div>

  <div>
    <Tasks />
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Tasks from "@/components/Tasks.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Tasks,
  },

});
</script>
