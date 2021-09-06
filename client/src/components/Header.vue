<template>
  <div class="navbar">
  <div id="navbar-title">
    <h3><button @click="goToMain()">TaskerList</button></h3>
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMain () {
      this.$router.push({name: 'Main'})
    }
  }
}
</script>

<style scoped>
.navbar {
    width: 100%;
    height: 60px;
    background-color: #192a56;
    position: fixed;
    box-shadow: 0.1px 0.1px 15px 0.1px #273c75;
    border-radius:5px;
    display: flex;
}
#navbar-title {
    color: silver;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-block: 15px;
    padding-left: 30px;
}
</style>
