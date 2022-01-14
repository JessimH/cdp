<template>
  <div class="index">
    <Header title="Accueil"/>
    <NewPost placeholder="Raconte moi ta vie" />
    <div v-if="loading">Loadings</div>
    <Timeline :feedCus="feedCus"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    components: { Header },
    // middleware: 'auth',
     data() {
        return {
          loading: false,
        }
      },
    computed: {
        ...mapGetters(['user']),
        ...mapGetters(['feedCus']),
    },
    methods:{
        ...mapActions(['getFeedCus']),
        getDataCus() {
          this.loading = true
          this.getFeedCus()
          this.loading = false
        },
    }, 
    async created() {
      await this.getDataCus()
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
</style>

