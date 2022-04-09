export const state = () => ({
    token: null,
    alltodos: [],
    mytodos: []
})

export const getters = {};

export const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setAllTodos(state,todos){
        state.alltodos = todos;
    },
    setMyTodos(state,todos) {
        state.mytodos = todos;
    }
};

export const actions = {
    async login({commit}, data) {
        await this.$axios.post('http://localhost:5161/api/users/Login',{
            email: data.email,
            password: data.password
        }).then(response => {
            console.log(response.data);
            commit('setToken',response.data)
            this.$router.push('/todos');
        })
    },

    async getTodos({commit, state}) {
        await this.$axios.get('http://localhost:5161/api/todo-app/AllTodos',{
            headers: {
                'Authorization': 'Bearer ' + state.token,
            }
        }).then(response => {
            console.log(response.data);
            commit('setAllTodos', response.data);
        })
    },

    async myTodos({commit, state}) {
        await this.$axios.get('http://localhost:5161/api/todo-app/MyTodos' ,{
        headers: {
            'Authorization': 'Bearer ' + state.token,
        }
      }).then(response => {
          console.log(response.data);
          commit('setMyTodos', response.data)
      })
    },

    async addTodo({commit}, data) {
        await this.$axios.post('http://localhost:5161/api/todo-app', {
          description: data},{
              headers: {
            'Authorization': 'Bearer ' + this.state.token,
              }
        }).then(res => {

        })
    },

    async deleteTodo({commit, state}, data) {
        await this.$axios.delete('http://localhost:5161/api/todo-app/', + data, {
             headers: {
            'Authorization': 'Bearer ' + state.token,
              }
        }).then(res => {

        })
    },

    async update({commit, state}, data) {
        await this.$axios.put('http://localhost:5161/api/todo-app/' + data ,{is_Completed: true},
        {
            headers: {
                'Authorization': 'Bearer ' + state.token
            }
        }).then(response => {
            console.log(response);
            console.log("response called");
        })
    }
};


export default{
    state,
    mutations,
    getters,
    actions,
}