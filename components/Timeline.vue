<template>
    <div class="timeline">
        <div v-if="comments">
            <Post v-for="post in comments" :key="post.id" :post="post"/>
        </div>
        <div v-else>
            <Post v-for="post in feedCus.posts" :key="post.id" :post="post"/>
        </div>
    </div>
</template>

<script>
export default {
    props: ['feedCus', 'comments'],
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
