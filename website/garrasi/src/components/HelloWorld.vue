<template>
  <div class="hello" style="background-color: #00008B; display: flex; align-items: center; justify-content: center;">
    <p style="color: white; font-size: 2em; margin: 200px 200px;">{{msg}}</p>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Garrasi est un réseau social innovant qui vous permet de découvrir les commentaires et les avis des autres membres sur tous les sites web. Avec Garrasi, vous pouvez facilement obtenir des informations de confiance sur les sites web que vous visitez, sans avoir à parcourir des dizaines de sites différents.Notre plateforme est conçue pour vous aider à prendre des décisions informées lorsque vous naviguez sur internet. Nous savons à quel point il peut être difficile de trouver des avis fiables sur les produits et les services en ligne, c\'est pourquoi nous avons créé Garrasi.Notre réseau social est basé sur la communauté, et nous encourageons les membres à partager leurs expériences et leurs avis sur les sites web qu\'ils visitent. En utilisant Garrasi, vous pouvez facilement trouver des avis de personnes qui ont eu une expérience similaire à la vôtre, et vous pouvez également partager vos propres avis pour aider les autres.Garrasi est également une plateforme sécurisée et respectueuse de la vie privée. Nous protégeons vos données et nous nous engageons à ne jamais partager vos informations personnelles avec des tiers. Rejoignez dès maintenant notre communauté en ligne et profitez de tous les avantages de Garrasi. Nous sommes convaincus que vous apprécierez l\'expérience utilisateur unique que nous offrons, et nous espérons que vous nous aiderez à construire un meilleur internet pour tous.'
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
