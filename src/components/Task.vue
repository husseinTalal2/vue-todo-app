<template>
  <div>
    <p :class="task.finished ? 'checked' : ''">{{ task.task }}</p>
    <span>
      <span class="delete" @click="handleDelete">delete</span>
      <span class="finish" @click="handleFinish">finished</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Task",
  emits: ["handleDelete", "handleFinish"],
  props: {
    task: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  setup(props, context) {
    function handleDelete() {
      context.emit("handleDelete", props.index);
    }
    function handleFinish() {
      context.emit("handleFinish", props.index);
    }
    return { handleDelete, handleFinish };
  },
};
</script>

<style scoped>
div {
  padding-block: 1rem;
  padding-inline: 2rem;
  background-color: white;
  height: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  justify-content: space-between;
  margin-block: 0.5rem;
}
.delete {
  padding-inline: 1.5rem;
  padding-block: 0.7rem;
  border-radius: 8px;
  color: rgb(206, 47, 47);
  cursor: pointer;
}

.delete:hover {
  background-color: rgb(206, 47, 47);
  color: white;

}
.finish {
  padding-inline: 1.5rem;
  padding-block: 0.7rem;
  border-radius: 8px;
  background-color: green;
  cursor: pointer;
  color: white;
  margin-inline: 1rem;
}

.finish:hover {
  background-color: rgb(2, 75, 2);
  color: white;
}

.checked{
  text-decoration: line-through;
}
</style>
