import axios from 'axios'

//state
export const state = () => ({
    user: {
        token: null,
        data: {}
    },
    post: {
        data: {}
    },
    feedCus: {
        data: {}
    },
})

//getters
export const getters = {
    token(state) {
        return state.user.token
    },
    user(state) {
        return state.user
    },
    data(state) {
        return state.user.data
    },
    post(state) {
        return state.post.data
    },
    feedCus(state) {
        return state.feedCus.data
    },
    postComments(state) {
        return state.postComment.data
    }
}


//actions
export const actions = {
    async login({ commit }, loginForm) {
        // console.log(loginForm)
        await axios({
            method: 'post',
            url: 'https://social-jje-api.herokuapp.com/api/auth/login',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                email: loginForm.email,
                password: loginForm.password
            },
            mode: 'cors'
        })
            .then((response) => {
                // console.log("LOGIN:", response.data.data.user)
                commit('token', response.data.data.token)
                const user = response.data.data.user
                // console.log(user)
                commit('data', user)
                this.$router.push({ name: 'index' })
            })
            .catch(error => {
                // console.log("ERROR ARGS:", loginForm)
                console.log(error)
            });
    },
    async register({ commit }, registerForm) {
        var formData = new FormData();
        formData.append("image", registerForm.image);
        formData.append("email", registerForm.email);
        formData.append("name", registerForm.name);
        formData.append("password", registerForm.password);

        console.log(registerForm)

        await axios({
            method: 'post',
            url: 'https://social-jje-api.herokuapp.com/api/auth/register',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            data: formData,
        })
            .then((response) => {
                // console.log("REGISTER:", response.data)

                commit('token', response.data.token)
                const user = {
                    infos: response.data.user_info
                }
                commit('data', user)
                this.$router.push({ name: 'login' })
            })
            .catch(error => {
                // console.log(registerForm)

                console.log(error.response)
            });
    },
    async updateUser({ commit, getters }, updateForm) {
        axios({
            method: 'put',
            url: 'https://partner-pro-api.herokuapp.com/api/update',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getters.token}`
            },
            data: {
                email: updateForm.email,
                password: updateForm.password,
                name: updateForm.name,
                profile_pic: updateForm.profile_pic,
                favorites_sports: updateForm.favorites_sports,
            }
        })
            .then((response) => {
                // console.log("REGISTER:", response.data)
                const user = {
                    infos: response.data.user_info
                }
                console.log(user)
                commit('data', user)
                this.$router.push({ name: 'index' })
            })
            .catch(error => {
                // console.log(registerForm)

                console.log(error.response)
            });
    },
    async logout({ commit, getters }) {
        axios({
            method: 'post',
            url: 'https://social-jje-api.herokuapp.com/api/logout',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getters.token}`
            }
        })
            .then(() => {
                commit('logout')
                this.$router.push({ name: 'login' })
            })
            .catch(error => {
                // console.log(registerForm)
                console.log(error.response)
            });
    },
    async getCurrentUser({ commit, getters }) {
        axios({
            method: 'get',
            url: 'https://social-jje-api.herokuapp.com/api/users',
            headers: {
                'Authorization': `Bearer ${getters.token}`
            }
        })
            .then((response) => {

                const user = {
                    infos: response.data.data.user
                }
                // console.log(user)
                commit('data', user)
            })
            .catch(error => {
                // console.log("ERROR ARGS:", loginForm)
                console.log(error)
            });
    },
    async newPost({ getters }, newPostForm) {
        console.log(newPostForm)
        axios({
            method: 'post',
            url: `https://partner-pro-api.herokuapp.com/api/newpost`,
            headers: {
                'Authorization': `Bearer ${getters.token}`
            },
            data: {
                body: newPostForm.body,
                img_url: newPostForm.img_url,
                localisation: newPostForm.localisation,
            }
        })
            .then((response) => {
                console.log(response)
                this.$router.push({ name: 'index' })
            })
            .catch(error => {
                // console.log("ERROR ARGS:", loginForm)
                console.log(error)
            });
    },
    async getPost({ commit, getters }, id) {
        axios({
            method: 'get',
            url: `https://social-jje-api.herokuapp.com/api/posts/${id}`,
            headers: {
                'Authorization': `Bearer ${getters.token}`,
            }
        })
            .then((response) => {
                const post = response.data.data
                // console.log(post)
                commit('getPost', post)
            })
            .catch(error => {
                // console.log("ERROR ARGS:", loginForm)
                console.log(error)
            });
    },
    async getFeedCus({ commit, getters }) {
        axios({
            method: 'get',
            url: 'https://social-jje-api.herokuapp.com/api/posts',
            headers: {
                'Authorization': `Bearer ${getters.token}`
            }
        })
            .then((response) => {
                const feedCus = {
                    posts: response.data.data
                }
                console.log(feedCus)
                commit('getFeedCus', feedCus)
            })
            .catch(error => {
                // console.log("ERROR ARGS:", loginForm)
                console.log(error.response)
            });
    },
    async comment({getters }, data) {
        axios({
            method: 'post',
            url: `https://social-jje-api.herokuapp.com/api/comments`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getters.token}`
            },
            data: data
        })
            .then((response) => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            });
    },
    async like({ state, getters, dispatch }, data) {
        console.log(state.post)
        axios({
            method: 'post',
            url: `https://social-jje-api.herokuapp.com/api/likes`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getters.token}`
            },
            data: data,
        })
            .then((response) => {
                // console.log("REGISTER:", response.data)
                console.log(response)
                // this.$router.push({ name: 'post', params: { id: post.id } })
            })
            .catch(error => {
                // console.log(registerForm)
                console.log(error.response)
            });
    },
}

//mutations
export const mutations = {
    token(state, token) {
        state.user.token = token;
    },
    data(state, data) {
        state.user.data = data;
    },
    logout(state) {
        state.user.data = {};
        state.user.token = null;
    },
    getPost(state, data) {
        state.post.data = data
    },
    getFeedCus(state, data) {
        state.feedCus.data = data
    }
}