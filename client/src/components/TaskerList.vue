<template>
  <div class="container-list">
    <div class="add-container">
      <img id="addIcon" src="@/assets/add.jpg" @click="add()">
    </div>
    <div v-for="item in list" :key="item.id" class="taskList" v-bind:class="{ completed: item.isComplete}">
          <p>{{item.name}}</p>
          <button @click="done(item.id)" :disabled="item.isComplete">Done</button>
          <img src="@/assets/delete.png" id='remove' @click="remove(item.id)">
          <img v-if="!item.isComplete" src="@/assets/edit.jpg" id='edit' @click="edit(item.id)">
    </div>
    <img src="@/assets/back.png" id='back' @click="back()">
  </div>
</template>

<script>
import TaskerService from '@/services/TaskerService'
export default {
  name: 'TaskerList',
  data () {
    return {
      list: []
    }
  },
  async mounted () {
    this.list = (await TaskerService.list()).data
  },
  methods: {
    add () {
      this.$router.push({name: 'add'})
    },
    back () {
      this.$router.push({name: 'Main'})
    },
    async done (id) {
      try {
        const index = this.list.findIndex(x => x.id === id)
        this.list[index].isComplete = true

        const temp = {
          name: this.list[index].name,
          isComplete: true
        }

        await TaskerService.updateFlag(id, temp)
      } catch (err) {
        console.log(err)
      }
    },
    async remove (id) {
      try {
        const result = (await TaskerService.remove(id)).data

        if (result.message != null) {
          const index = this.list.findIndex(x => x.id === id)
          this.list.splice(index, 1)
        }
      } catch (err) {
        console.log(err)
      }
    },
    async edit (elemId) {
      this.$router.push({name: 'edit', params: {id: elemId}})
    }
  }
}
</script>

<style scoped>
.container-list {
  padding-top: 80px;
}
.taskList {
  border: 2px solid #13b42e;
  width: 40%;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px;
}
.taskList p {
  width: 80%;
  float: left;
}
.taskList button {
  background-color: #13b42e;
  color: rgb(223, 219, 219);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border-radius: 5px;
  padding: 5px;
  font-size: 15px;
}
.taskList button:hover {
  opacity: 0.6;
}
.taskList img {
  width: 25px;
  height: 25px;
  position: absolute;
  margin-left: 20px;
  cursor: pointer;
}
#remove:hover {
  opacity: 0.6;
}
#edit {
  margin-left: 60px;
}
#edit:hover {
  opacity: 0.6;
}
.add-container {
  margin-left:auto;
  margin-right: auto;
  display: block;
}
#addIcon {
  width: 90px;
  height: 45px;
  cursor: pointer;
  margin-left: 65%;
}
#addIcon:hover {
  opacity: 0.5;
}
.completed {
  opacity: 0.8;
  border-color: silver;
}
.completed p {
  text-decoration-line: line-through;
  color: silver;
}
.completed button {
  background-color: silver;
  color: black;
}
.completed button:hover {
  opacity: 1;
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
