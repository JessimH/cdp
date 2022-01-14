<template>
  <div class="index">
    <Header title="Post" :back="true"/>
    <div class="current_post">
      <div class="current_post_top">
         <NuxtLink class="post_link mr-2" to="/profile/jessim">
            <div class="post_profile_pic">
                <img src="https://pbs.twimg.com/profile_images/1462725045281820672/YU2hzUcr_400x400.jpg" alt="">
            </div>
        </NuxtLink>
           <p class="post_header"><span>Sato</span> <br> @dzsatoru</p>
      </div>
       <div class="post_body">
           <div class="post_content">
                <p>l'avenir appartient à ceux qui font croire au monde que l'avenir appartient à ceux qui se lèvent tôt</p>
                <div class="post_img">
                    <img src="https://pbs.twimg.com/media/FI6G3LTWYAM4PzU?format=jpg&name=900x900" alt="">
                </div>
                <p class="timestamp mt-2">il y a 1 h</p>
           </div>
           <div class="post_infos">
                <p class="timestamp mr-5"><span>5k</span> j'aime</p>
                <p class="timestamp"><span>19k</span> commentaires</p>
           </div>
           <div class="post_btns">
               <button>
                    <b-icon-heart class="post_icon"></b-icon-heart>
                    5k
                </button>
           </div>
       </div>
    </div>
    <NewPost/>
    <Timeline/>
  </div>
</template>

<script>
import {
  BIcon,
  BIconHeart,
  BIconHeartFill,
  BIconChat,
  
} from 'bootstrap-vue'

export default {
  components: {
    BIcon,
    BIconHeart,
    BIconHeartFill,
    BIconChat,
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
.current_post{
    width: 100%;
    padding: 8px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.234);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1.3rem;
}
.current_post_top{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
}
.current_post_top .post_header{
  line-height: 22px;
  margin: 0px;
}
.current_post .post_content p {
    margin-bottom: 8px;
    max-width: 56%;
}
.timestamp{
  color: #6D767D;
  font-weight: 400;
  font-size: 1rem;
}
.timestamp span{
  font-weight: 700;
  color: white;
}
.current_post .post_content{
  margin-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.234);
}
.post_infos{
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.234);
  margin-bottom: 8px;
  padding-bottom: 8px;
}
</style>

