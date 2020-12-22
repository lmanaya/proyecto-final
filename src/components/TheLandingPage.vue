<template>
  <v-app id="inspire">
    <v-app-bar app color="white">
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab
          v-for="([title, ruta], i) in links"
          :key="i"
          link
          :to="{ name: ruta }"
        >
          {{ title }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-card height="200" color="error"></v-card>
        <v-row>
          <v-col v-for="n in 2" :key="n" cols="6">
            <v-card height="200" color="primary"></v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="4">
            <v-card height="200" color="accent"></v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="n in 2" :key="n" cols="6">
            <v-card height="200" color="error"></v-card>
          </v-col>
        </v-row>
        <v-footer
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
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
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      ["Inicio", "Inicio"],
      ["Login", "Login"],
    ],
    linksFooter: [
      'Repositorio GitHub',
    ],
  }),
};
</script>