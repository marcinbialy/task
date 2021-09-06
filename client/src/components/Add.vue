<template>
  <div class="container">
      <div class="task">
          <p id="task-name">New task</p>
          <input v-model="item.name" placeholder="Add text"/>
          <button @click="add(item.id)">Save</button>
      </div>
      <img src="@/assets/back.png" id='back' @click="back()">
  </div>
</template>

<script>
import TaskerService from '@/services/TaskerService'
export default {
  name: 'add',
  data () {
    return {
      item: {
        name: '',
        isComplete: false
      }
    }
  },
  async mounted () {

  },
  methods: {
    back () {
      this.$router.push({name: 'list'})
    },
    async add () {
      try {
        const temp = {
          name: this.item.name,
          isComplete: false
        }

        const result = (await TaskerService.add(temp)).data

        if (result != null) {
          this.$router.push({name: 'list'})
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 80px;
}
.task {
  border: 2px solid #3ca0e2;
  width: 30%;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px;
}
#task-name {
    color:rgb(175, 154, 154);
    font-size: 14px;
    font-weight: bold;
}
.task input {
  width: 80%;
  float: left;
  border: 1px solid rgb(38, 152, 245);
  border-radius: 5px;
  padding: 5px;
}
.task button {
  background-color: #3ca0e2;
  color: rgb(223, 219, 219);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border-radius: 5px;
  padding: 5px;
  font-size: 15px;
  margin-left: 20px;
}
#back {
  display: block;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
}
#back:hover {
  opacity: 0.5;
}
</style>
