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
                <img src="https://pbs.twimg.com/profile_images/1462725045281820672/YU2hzUcr_400x400.jpg" alt="">
            </div>
        </div>
        <div class="profile_bio">
          <p>Sato</p>
          <p>@dzsatoru</p>
          <p>bio bio bio biob iob boi boie oib zpief aozefznjbevzld cmlze roz efivze kr zlero lazremzl erkglbzetg</p>
        </div>
      </div>
    </div>
    <Timeline />

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
}
.profile_bio p{
  margin: 0px;
}
</style>

