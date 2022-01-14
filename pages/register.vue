<template>
  <div class="container register">
    <img class="register_logo mb-5" src="~/assets/images/logo.png" />
    <form @submit.prevent="formValidation" enctype='multipart/form-data' class="form_register">
      <div class="form-group">
        <label for="exampleInputUsername1">Nom d'utilisateur</label>
        <input
          type="username"
          v-model="registerForm.name"
          class="form-control"
          id="exampleInputUsername1"
          aria-describedby="usernameHelp"
          placeholder="Nom d'utilisateur"
          required
        />
        <div v-if="errors.name.length > 0">
          <div v-for="error in errors.name" :key="error">
            {{ error }}
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          type="email"
          v-model="registerForm.email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
        />
        <div v-if="errors.email.length > 0">
          <div v-for="error in errors.email" :key="error">
            {{ error }}
          </div>
        </div>
      </div>

      <div class="form-group">
        <input id="file" @change="onFileChange" type="file">
      </div>
    
      <div class="form-group">
        <label for="exampleInputEmail1">Mot de passe</label>
        <input
          type="password"
          v-model="registerForm.password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Mot de passe"
          required
        />
        <div v-if="errors.password.length > 0">
          <div v-for="error in errors.password" :key="error">
            {{ error }}
          </div>
        </div>
      </div>

      <button type="submit" class="btn register_button mt-3 mb-4">
        Inscription
      </button>
      <p class="account">
        Vous avez déjà en compte?
        <NuxtLink to="/login">connectez-vous !</NuxtLink>
      </p>
    </form>
  </div>
</template>

<script>

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
      previewImage: null,
      registerForm: {
        name: '',
        email: '',
        password: '',
        profile_pic: '',
        image: ''
      },
      errors: {
        name: [],
        email: [],
        password: [],
        profile_pic: [],
        image: ''
      },
    }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this.registerForm;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
        reader.readAsDataURL(file);
      },

      removeImage: function (e) {
        this.image = '';
    },
    ...mapActions(['register']),
    formValidation() {
      this.errors.name = []
      this.errors.email = []
      this.errors.profile_pic = []
      this.errors.password = []
      if (this.registerForm.name.trim().length == 0) {
        this.errors.name.push('This field is required')
      }
      if (this.registerForm.profile_pic.trim().length == 0) {
        this.errors.profile_pic.push('This field is required')
      }
      if (this.registerForm.email.trim().length == 0) {
        this.errors.email.push('This field is required')
      }
      if (this.registerForm.password.trim().length == 0) {
        this.errors.password.push('This field is required')
      }
      if (this.errors.password.length > 0 || this.errors.email.length > 0) {
        return
      } else {
        // this.$store.dispatch('register', this.registerForm);
        this.register(this.registerForm)
      }
    },
  },
}
</script>
<style>
.layout {
  height: 100vh;
}
.register {
  width: 100vw;
  height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  overflow: scroll;
}
.register img {
  height: 7vh;
}
.register_button {
  width: 100%;
  background-color: #00e2b7;
  color: white;
  transition: 0.2s ease-in-out;
}
.forgot {
  color: #00e2b7;
}
.forgot:hover {
  color: #00e2b7;
}

.btn:hover {
  transform: scale(1.04);
  color: white;
  text-decoration: none;
}
.account {
  color: black;
}

.account a {
  color: #00e2b7;
}
.imagePreviewWrapper {
  border-radius: 10px;
  width: 200px;
  height: 200px;
  border-radius: 999px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
}
</style>