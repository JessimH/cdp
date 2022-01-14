<template>
  <div class="index">
    <div>
        <Header title="Parametres"/>
    </div>
    <div class="profile">
      <div class="profile_top">
        <div class="profile_banner">
          <img src="https://i.redd.it/9d71fdf6ee231.png" alt="">
        </div>
        <div class="profile_top_pic">
            <div class="profile_profile_pic">
                <img src="https://pbs.twimg.com/profile_images/1462725045281820672/YU2hzUcr_400x400.jpg" alt="">
            </div>
        </div>
        <div class="profile_bio">
          <p class="profile_username">Sato</p>
          <p>bio bio bio biob iob boi boie oib zpief aozefznjbevzld cmlze roz efivze kr zlero lazremzl erkglbzetg</p>
        </div>
      </div>
    </div>
    <form enctype='multipart/form-data' class="parametres" action="">
      <input type="text" placeholder="Username">
      <input type="email" placeholder="Email">
      <input type="file">
      <input type="password" placeholder="Password">
      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>

<script>
import {
  BIcon,
  BIconArrowLeft,
} from 'bootstrap-vue'

export default {
  components: {
    BIcon,
    BIconArrowLeft
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
.parametres{
  padding: 13px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
}
.parametres input{
  border: none;
  border-radius: 6px;
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 16px;
  outline: none;
}
.parametres button{
  background: transparent;
  border: 1px solid #00DC81;
  border-radius: 50px;
  color: #00DC81;
  width: 200px;
  padding: 5px 10px;
  font-weight: 800;
  transition: 0.2s ease-in-out;
}
.parametres button:hover{
  color: white;
  background: #00DC81;
}
</style>

