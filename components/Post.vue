<template>
    <div class="post">
         <NuxtLink class="post_link" to="/profile/jessim">
            <div class="post_profile_pic">
                <img src="https://pbs.twimg.com/profile_images/1462725045281820672/YU2hzUcr_400x400.jpg" alt="">
            </div>
        </NuxtLink>
       <div class="post_body">
           <p class="post_header"><span>Sato</span> @dzsatoru - 1h</p>
           <div class="post_content">
                <p>l'avenir appartient à ceux qui font croire au monde que l'avenir appartient à ceux qui se lèvent tôt</p>
                <div class="post_img">
                    <img src="https://pbs.twimg.com/media/FI6G3LTWYAM4PzU?format=jpg&name=900x900" alt="">
                </div>
           </div>
           <div class="post_btns">
               <button>
                    <b-icon-heart class="post_icon"></b-icon-heart>
                    5k
                </button>
                <NuxtLink class="post_link" to="/post/ziefvbzepr">
                    <button> 
                        <b-icon-chat class="post_icon"></b-icon-chat>
                        19k
                    </button>
                </NuxtLink>
           </div>
       </div>
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
.post{
    width: 100%;
    padding: 12px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.234);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}
.post_profile_pic{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
    height: 48px;
    width: 48px;
    margin-right: 8px;
}
.post_profile_pic img{
    max-height: 100%;
}
.post_body{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.post_body p{
    margin: 0px;
    font-weight: 600;
}
.post_header{
    color: #6D767D;
    font-weight: 500;
}
.post_header span{
    color: white;
    font-weight: 700;
}
.post_content{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 16px;
}
.post_content p{
    margin-bottom: 8px;
    max-width: 75%;
}
.post_content .post_img{
    cursor: pointer;
    height: 300px;
    width: fit-content;
    overflow: hidden;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.post_content .post_img img{
    height: 100%;
}
.post_btns{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.post_btns button{
    background-color: transparent !important;
    border: none;
    color: #6D767D;
    font-weight: 600;
    margin-right: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.post_btns button:hover{
    color: #00DC81;
}
.post_icon{
    margin: 8px;
}
.post_link{
    text-decoration: none;
}
.post_link:hover{
    text-decoration: none;
}
</style>
