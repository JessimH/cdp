<template>
  <div v-if="post" class="index">
    <Header title="Post" :back="true"/>
    <div class="current_post">
      <div class="current_post_top">
         <NuxtLink class="post_link mr-2" to="/profile/jessim">
            <div class="post_profile_pic">
                <img :src="post.user.url_image" alt="">
            </div>
        </NuxtLink>
           <p class="post_header"><span>{{post.user.name}}</span> <br> @{{post.user.name}}</p>
      </div>
       <div class="post_body">
           <div class="post_content">
                <p>{{post.content}}</p>
                <div v-if="post.url_image" class="post_img">
                    <img :src="post.url_image" alt="">
                </div>
                <p class="timestamp mt-2">{{post.created_at}}</p>
           </div>
           <div class="post_infos">
                <p class="timestamp mr-5"><span>{{post.likes_count}}</span> j'aime</p>
                <p class="timestamp"><span>{{post.comments.length}}</span> commentaires</p>
           </div>
           <div class="post_btns">
               <button @click="likePost()">
                    <b-icon-heart class="post_icon"></b-icon-heart>
                    {{post.likes_count}}
                </button>
           </div>
       </div>
    </div>
    <NewPost :post='post' formType="comment" placeholder="Commenter"/>
    <Timeline :comments="post.comments"/>
  </div>
</template>

<script>
import {
  BIcon,
  BIconHeart,
  BIconHeartFill,
  BIconChat,
  
} from 'bootstrap-vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    BIcon,
    BIconHeart,
    BIconHeartFill,
    BIconChat,
  },
  data() {
        return {
          loading: false,
          postId: this.$route.params.id
        }
      },
    computed: {
        ...mapGetters(['user']),
        ...mapGetters(['post']),
        // ...mapGetters(['feedCus']),
    },
    methods:{
        // ...mapActions(['getFeedCus']),
        ...mapActions(['getPost']),
        ...mapActions(['like']),
        likePost(){
            let data = {
                type: 'post',
                post_id: this.post.id
            }
            this.like(data)
        },
        getDataPost(id) {
          this.loading = true
          this.getPost(id)
          this.loading = false
        },
    }, 
    async mounted() {
      // this.getCommentData(this.postId)
      this.getDataPost(this.postId)
    }
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

