<template>
  <div class="todo-input-container">
    <input placeholder="add a task" v-model="newTask" />
    <button class="btn" @click="addNewTask">ADD</button>
  </div>
  <div class="todos-list-container">
    <h3 v-if="tasks.length == 0">No tasks to do!!!</h3>
    <Task
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      :index="index"
      @handleDelete="handleDelete"
      @handleFinish="handleFinish"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Task from "@/components/Task.vue";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "Tasks",
  components: {
    Task,
  },
  setup() {
    const newTask = ref("");
    const tasks = ref([]);

    function addNewTask() {
      if (newTask.value === "") {
        return;
      }
      tasks.value.push({ task: newTask.value, finished: false });
      newTask.value = "";
    }

    function handleDelete(index) {
      tasks.value.splice(index, 1);
    }

    function handleFinish(index) {
      tasks.value[index].finished = !tasks.value[index].finished;
    }
    return { newTask, tasks, addNewTask, handleDelete, handleFinish };
  },
});
</script>

<style>
.todo-input-container {
  margin: 0 auto;
  width: 80%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
}

.todos-list-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 0 auto;
}

input {
  padding-inline: 2rem;
  padding-block: 1rem;
  width: 80%;
  border: 2px solid #f0f0f0;
  border-radius: 8px;
  font-size: 1.2rem;
}

.btn {
  padding-inline: 2rem;
  padding-block: 1rem;
  background-color: cadetblue;
  border: 0;
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
}

button:active {
  background-color: rgb(64, 102, 104);
}

ul {
  list-style: none;
}
</style>
