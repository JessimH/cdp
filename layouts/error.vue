<template>
  <div class="container notFound">
    <div v-if="error.statusCode === 404">
        <img src="http://veraicona.hypotheses.org/files/2017/11/confused-travolta-original-pulp-fiction-animated-gif.gif" alt="">
        <h1>vous vous êtes perdu ?</h1>
    </div>
    <h1 v-else>An error occurred - {{ error.statusCode }} </h1>
    <NuxtLink to="/">Retour sur l'accueil</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>
<style>
.notFound{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>