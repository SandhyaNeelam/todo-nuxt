<template>
    <div>
        <div>
        <TodoNavbar />
        <div id="todo" class="header">
        <h2>My Todo</h2>
        <input type="text" id ="todo" placeholder="Titile" v-model ="todo" />
        <button @click="addTodo(todo)" class="add">Add</button>
    </div>
    <ul id="list">
        <li v-for="(list, i) in $store.state.mytodos" :key="i">{{list.description}}</li>
        <span><button @click="deleteTodo(list.id)">Delete</button></span>
    </ul>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                todo: '',
            }
        },
        created() {
            this.myTodos();
        },
        methods: {
            async myTodos() {
                await this.$store.dispatch('myTodos')
            },
            async addTodo(todo) {
                await this.$store.dispatch('addTodo', todo);
                await this.$store.dispatch('myTodos');
            },
            async deleteTodo(id) {
                await this.$store.dispatch('deleteTodo', id);
                await this.$store.dispatch('myTodos');
            },
            async update(id) {
                await this.$store.dispatch('update', id);
                await this.$store.dispatch('myTodos');
            }
        }
    }
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
.add{
  margin-left:400px;
  background-color: #0aa3ef;
  border: none;
  padding: 15px 15px;
  cursor: pointer;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
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

/* Style the delete button */
.delete {
  position: absolute;
  right: 0;
  /* left: 50%; */
  top: 0;
  padding: 12px 16px 12px 16px;
}

.delete:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
.header {
  background-color: #28b396;
  padding: 5px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

</style>