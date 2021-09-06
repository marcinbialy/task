<template>
  <div class="container-home">
    <button id="button-home" @click="goToList()">Go to List</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToList () {
      this.$router.push({name: 'list'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-home {
  padding-top: 120px;
  text-align: center;
}
#button-home {
  background-color: #192a56;
  color: rgb(223, 219, 219);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border-radius: 15px;
  padding: 15px;
  font-size: 20px;
}
</style>
