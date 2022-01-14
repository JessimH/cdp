<template>
    <div class="new_post">
         <NuxtLink class="post_link" to="/profile/jessim">
            <div class="post_profile_pic">
                <img src="https://pbs.twimg.com/profile_images/1462725045281820672/YU2hzUcr_400x400.jpg" alt="">
            </div>
        </NuxtLink>
       <div class="post_body">
           <form action="">
                <input type="text" placeholder="Poster votre réponse">
                <button type="submit">Envoyer</button>
           </form>
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
.new_post{
    width: 100%;
    padding: 12px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.234);
    display: flex;
    flex-direction: row;
    align-items: center;
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
    width: 100%;
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
.post_body form input{
    background: transparent;
    border: none;
    color: white;
    outline: none;
    width: 34%;
    font-weight: 600;
    font-size: 1.2rem;
}

.post_body form{
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
}

.post_body form button{
    width: 100px;
    padding: 15px 10px;
    border-radius: 50px;
    background-color: #00DC81;
    border: none;
    color: white;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}
.post_body form button:hover{
    transform: scale(1.03);
    background-color: #00DC81;
}
</style>
