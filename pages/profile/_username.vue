<template>
  <div class="index">
    <div>
        <Header :title="this.$route.params.username"/>
    </div>
    <div class="profile">
      <div class="profile_top">
        <div class="profile_banner">
          <img src="https://i.redd.it/9d71fdf6ee231.png" alt="">
        </div>
        <div class="profile_top_pic">
            <div class="profile_profile_pic">
                <img :src="user.data.url_image" alt="">
            </div>
        </div>
        <div class="profile_bio">
          <p class="profile_username">{{user.data.name}}</p>
          <p>{{user.data.description}}</p>
        </div>
        <NuxtLink class="" to="/parametres">Edit profile</NuxtLink>
      </div>
    </div>
    <Timeline :comments="comments" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {
  BIcon,
  BIconArrowLeft,
} from 'bootstrap-vue'

export default {
  components: {
    BIcon,
    BIconArrowLeft
  },
  middleware: 'auth',
  computed: {
    ...mapGetters(['user']),
  },
}

</script>



<style>
.index {
  height: 100%;
  width:75%;
  padding-top: 55px;
  overflow: auto;
  border-left: 1px solid rgba(255, 255, 255, 0.234);
}
.profile{
  position: relative;
  width:100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.234);
}
.profile_banner{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 200px;
    width: 100%;
}
.profile_profile_pic img{
    width: 100%;
}
.profile_top_pic{
  position: absolute;
  left: 30px;
  top: 120px
}
.profile_top a{
  position: absolute;
  text-decoration: none;
  right: 30px;
  bottom: 35px;
  background: transparent;
  border: 1px solid #00DC81;
  border-radius: 50px;
  padding: 10px 15px;
  color: #00DC81;
  transition: 0.2s ease-in-out;
}
.profile_top a:hover{
  text-decoration: none;
  color: #00DC81;
  transform: scale(1.03);
}
.profile_profile_pic{
    border:3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
    height: 133px;
    width: 133px;
    margin-right: 8px;
}
.profile_profile_pic img{
    max-height: 100%;
}
.profile_bio{
  padding-top: 60px;
  padding-left: 15px;
  padding-bottom: 35px;
}
.profile_bio p{
  margin: 0px;
}
.profile_username{
  font-weight: 900;
  font-size: 1.3rem;
  color: white;
}
</style>

