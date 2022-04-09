<template>
    <div>
            <!-- <ul> -->
              <div class="topnav">
                <nuxt-link class= "active" to="/myTodos"><li>MyTodos</li></nuxt-link>
                <nuxt-link to="/allTodos"><li>All Todos</li></nuxt-link>
                <nuxt-link to="/"><li>Logout</li></nuxt-link>
              </div>
            <!-- </ul> -->
    </div>
</template>

<script>
    export default {
        name: 'TodoNavbar'
    }
</script>

<style scoped>


input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

</style>