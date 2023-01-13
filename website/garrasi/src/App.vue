<template style="background-color: #00008B; display: flex; align-items: center; justify-content: center;">
  <img alt="Garrasi logo" src="./assets/Garrasi.png">
  <HelloWorld msg="Welcome to Garrasi"/>
  <div style="background-color: #00008B;align -items: center; justify-content: center; color: white; font-size: 2em; margin: 200px 200px;">
    <div>
      <img src="./assets/avis1.png" alt="profile image">
      <p>"J'ai utilisé Garrasi pour trouver des avis sur un site de e-commerce avant d'acheter et j'ai été agréablement surpris par la qualité des avis. Cela m'a permis de faire un choix éclairé." - Martine</p>
      <div class="stars">
        <img v-for="n in 5" :key="n" src="./assets/star.png" alt="star">
      </div>
    </div>
    <div>
      <img src="./assets/avis2.png" alt="profile image">
      <p>"J'ai utilisé Garrasi pour connaître l'avis de mes clients et c'est super" - Paul</p>
      <div class="stars">
        <img v-for="n in 4" :key="n" src="./assets/star.png" alt="star">
      </div>
    </div>
    <div>
      <img src="./assets/avis1.png" alt="profile image">
      <p>"J'ai utilisé Garrasi vérifier si un site web était fiable et heureusement cela ma evité de me faire arnaquer !" - Séverine</p>
      <div class="stars">
        <img v-for="n in 5" :key="n" src="./assets/star.png" alt="star">
      </div>
    </div>
  </div>

</template>



<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
