<template>
  <div class="hello" style="background-color: #00008B; display: flex; align-items: center; justify-content: center;">
    <p style="color: white; font-size: 2em; margin: 200px 200px;">{{msg}}</p>
  </div>
  <div style="align-items: center; justify-content: center; margin: 10px 10px;">
    <form @submit.prevent="submitComment" style="align-items: center; justify-content: center; margin: 10px 10px;">
      <div class="form-group">
        <label for="name">Nom </label>
        <input type="text" id="name" v-model="name" class="form-control" />
      </div>
      <div class="form-group">
        <label for="website">Site Web </label>
        <input type="text" id="website" v-model="website" class="form-control" />
      </div>
      <div class="form-group">
        <label for="comment">Commentaire</label>
        <textarea id="comment" v-model="comment" class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Soumettre</button>
    </form>

    <div class="comments" style="background-color: #fefcf4;border: 2px solid white; margin: 20px 00px;" v-for="comment in filteredComments" :key="comment.id">
      <h1>{{ comment.name }}</h1>
      <div class="stars">
        <img v-for="n in 5" :key="n" src="../assets/star.png" alt="star">
      </div>
      <h4>{{ comment.website }}</h4>
      <p>{{ comment.text }}</p>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    filteredComments() {
      return this.comments.filter(comment => comment.name.toLowerCase().includes(this.name.toLowerCase()));
    },
  },
  methods: {
    submitComment() {
      this.comments.push({
        id: Date.now(),
        name: this.name,
        website: this.website,
        text: this.comment,
      });
      this.name = '';
      this.website = '';
      this.comment = '';
    },
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Garrasi est un réseau social innovant qui vous permet de découvrir les commentaires et les avis des autres membres sur tous les sites web. Avec Garrasi, vous pouvez facilement obtenir des informations de confiance sur les sites web que vous visitez, sans avoir à parcourir des dizaines de sites différents.Notre plateforme est conçue pour vous aider à prendre des décisions informées lorsque vous naviguez sur internet. Nous savons à quel point il peut être difficile de trouver des avis fiables sur les produits et les services en ligne, c\'est pourquoi nous avons créé Garrasi.Notre réseau social est basé sur la communauté, et nous encourageons les membres à partager leurs expériences et leurs avis sur les sites web qu\'ils visitent. En utilisant Garrasi, vous pouvez facilement trouver des avis de personnes qui ont eu une expérience similaire à la vôtre, et vous pouvez également partager vos propres avis pour aider les autres.Garrasi est également une plateforme sécurisée et respectueuse de la vie privée. Nous protégeons vos données et nous nous engageons à ne jamais partager vos informations personnelles avec des tiers. Rejoignez dès maintenant notre communauté en ligne et profitez de tous les avantages de Garrasi. Nous sommes convaincus que vous apprécierez l\'expérience utilisateur unique que nous offrons, et nous espérons que vous nous aiderez à construire un meilleur internet pour tous.',
      name: '',
      website: '',
      comment: '',
      comments: [
        { id: 1, name: 'Enzo Lerda', website: 'https://www.lemonde.fr/', text: 'C\'est une source d\'information fiable' },
        { id: 2, name: 'Marius Dupont', website: 'https://fr.wikipedia.org/wiki/Coupe_du_monde_de_football_2022', text: 'Certaines dates sont fausses' },
        { id: 3, name: 'Robin Blayot', website: 'https://www.amazon.fr/Sony-WH1000XM4-Bluetooth-dautonomie-t%C3%A9l%C3%A9phoniques/dp/B08C7KG5LP/ref=sr_1_2_sspa?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2RGYDJW4IDLKV&keywords=casque%2Bsony%2Bwh3&qid=1673624375&sprefix=casquehttps://www.amazon.fr/s?k=casque+sonny+wh3&__mk_fr_FR=ÅMÅŽÕÑ&crid=2RGYDJW4IDLKV&sprefix=casque+sony+wh3%2Caps%2C92&ref=nb_sb_noss_1%2Bsony%2Bwh3%2Caps%2C92&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1', text: 'Cet article peut être trouvé moins cher sur d\'autres sites' },
      ],
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comments {
  margin-top: 20px;
}
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
