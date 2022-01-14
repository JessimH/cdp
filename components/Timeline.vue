<template>
    <div class="timeline">      
       <Post v-for="post in feedCus.posts" :key="post.id" :post="post"/>
    </div>
</template>

<script>
export default {
    props: ['feedCus'],
}
</script>

<style>
.timeline{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
}
</style>
