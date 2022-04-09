<template>
 <div>
   <div class="topnav">
  <nuxt-link class="active" to="/">Todo</nuxt-link>
  <nuxt-link to="/login">Login</nuxt-link>
</div>

 </div>
</template>

<script>
export default {
name: 'Navbar'
}
</script>

<style scoped>
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