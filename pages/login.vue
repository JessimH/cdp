<template>
    <div class="container login">
        <img  class="login_logo mb-5" src="~/assets/images/logo.png" />
        <form @submit.prevent="formValidation" class="form_login">
            <div class="form-group">
                <input type="email" v-model="loginForm.email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <div v-if="errors.email.length > 0">
                    <div v-for="error in errors.email" :key="error">
                        {{ error }}
                    </div>
                 </div>
            </div>
            <div class="form-group">
                <input type="password"  v-model="loginForm.password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                <div v-if="errors.password.length > 0">
                    <div v-for="error in errors.password" :key="error">
                        {{ error }}
                    </div>
                 </div>
            </div>
            <a class="forgot" href="">Mot de passe oublié ?</a>
            <button type="submit" class="btn login_button mt-3 mb-4">Connexion</button>
            <p class="account" >Vous n'avez pas de compte ? 
                <NuxtLink to="/register">inscrivez-vous !</NuxtLink>
            </p>
        </form>
    </div>
</template>
<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default{
    data() {
        return {
            loginForm: {
                email: "",
                password: "",
            },
            errors: {
                email: [],
                password: [],
            },
        };
    },
    methods: {
        ...mapActions(["login"]),
        formValidation() {
            this.errors.email = [];
            this.errors.password = [];
            if (this.loginForm.email.trim().length == 0) {
                this.errors.email.push("This field is required");
            }
            if (this.loginForm.password.trim().length == 0) {
                this.errors.password.push("This field is required");
            }
            if (this.errors.password.length > 0 || this.errors.email.length > 0){
                return;
            }else{
                // this.$store.dispatch('login', this.loginForm);
                this.login(this.loginForm);
            }
        },
    },
}
</script>
<style>
.layout{
    height: 100vh;
}
.login{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.login img{
    height: 7vh;
}
.login_button{
    width: 100%;
    background-color: #00E2B7;
    color: white;
    transition: 0.2s ease-in-out;
}
.forgot{
    color: #00E2B7;
}
.forgot:hover{
    color: #00E2B7;
}
.form_login{
    /* min-width: 25vw; */
}

.btn:hover {
    transform: scale(1.04);
    color: white;
    text-decoration: none;
}
.account{
    color: black;
}

.account a{
    color: #00E2B7;
}
</style>