<template>
    <div>
        <!-- <Navbar/> -->
        <TodoNavbar />
        <!-- <button @click="getTodos">Get Todos</button>
        <button @click="myTodos">My Todos</button> -->

    </div>
</template>

<script>
// import Navbar from '~/components/Navbar.vue'
import TodoNavbar from '~/components/TodoNavbar.vue'

    export default {
        components:{
            TodoNavbar
        },
        data() {
            return {
                todo: '',
            }
        },
        created () {
            this.getTodos(),
            this.myTodos(),
            console.log("hello");
        },
        methods: {
            async getTodos(){
                await this.$store.dispatch('getTodos');
            },
            async myTodos(){
                await this.$store.dispatch('myTodos');
            },
           addTodo(todo) {
                this.$store.dispatch('addTodo', todo);
                this.myTodos();
                this.getTodos();
            },
            deleteTodo(todo) {
                this.$store.dispatch('deleteTodo', id);
                this.myTodos();
                this.getTodos();
            },
            update(todo) {
                this.$store.dispatch('update', id);
                this.myTodos();
                this.getTodos();
            },

        }
    }
</script>

<style scoped>

</style>