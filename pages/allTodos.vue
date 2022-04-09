<template>
    <div>
        <!-- <Navbar /> -->
        <TodoNavbar />
        <!-- <div id= "todo" class="navbar"> -->
            <h2>All Todos</h2>
            <ul id="list">
                <li class="a" v-for="(list, i) in $store.state.alltodos" :key="i">Title: {{list.title}} <br> {{list.description}}</li>
            </ul>
            <br>
        </div>

</template>

<script>
    export default {
        created() {
            this.getTodos();
        },
        methods: {
            getTodos() {
                this.$store.dispatch('getTodos')
            }
        }

    }
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 600px;
  background-color: #f1f1f1;
}
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: rgb(6, 215, 156);
  font-size: 18px;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: '';
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

li a {
  display: block;
  width: 60%;;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change the link color on hover */
li a:hover {
  background-color: #555;
  color: white;
}
</style>