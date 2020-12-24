<template>
  <v-app>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in linksFooter"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
          href="https://github.com/lmanaya"
        >
          {{ link }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "TheFooter",
  data: () => ({
    links: [
      ["Inicio", "Inicio"],
      ["¿Quienes somos?", "#carrusel"],
      ["Login", "Login"],
    ],
    linksFooter: ["Repositorio GitHub"],
    items: [
      {
        src: require("../assets/easycargo2.png"),
      },
      {
        src: require("../assets/palets2.png"),
      },
      {
        src: require("../assets/noblelift3.png"),
      },
    ],
  }),
};
</script>

<style>
</style>