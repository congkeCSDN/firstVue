<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="v in news">
        {{v.title}}
      </li>
    </ul>
    <ul>
      <li v-for="v in users">
        {{v.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
      news(){
          return this.$store.getters.getNews
      },
      users(){
          return this.$store.getters.getUsers
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
