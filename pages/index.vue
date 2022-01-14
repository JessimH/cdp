<template>
  <div class="index">
    <Header title="Accueil"/>
    <NewPost placeholder="Raconte moi ta vie" />
    <Timeline/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: { Header },}
</script>



<style>
.index {
  height: 100%;
  width:75%;
  padding-top: 55px;
  overflow: auto;
  border-left: 1px solid rgba(255, 255, 255, 0.234);
}
</style>

