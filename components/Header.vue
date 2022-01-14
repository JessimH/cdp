<template>
    <div class="header">
        <p v-if="back" class="back" @click="$router.go(-1)">
          <b-icon-arrow-left class="mr-5"></b-icon-arrow-left>
          {{ title }}
        </p>
       <p v-else>{{ title }}</p>
    </div>
</template>

<script>
    import {
        BIcon,
        BIconArrowLeft,
    } from 'bootstrap-vue'

    export default {
        name: 'post',
        props: ['title', 'back'],
        components: {
            BIcon,
            BIconArrowLeft,
        },
    }
</script>

<style>
.header{
  width: 74%;
  position: absolute;
  top: 0px;
  z-index: 3;
  padding: 10px 15px;
  backdrop-filter: blur(8px);
}
.header p{
    margin: 0px;
    font-size: 20px;
    font-weight: 700;
}
.back{
    cursor: pointer;
}
</style>
