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

      <v-avatar size="32">
        <img :src="require('../assets/background.jpg')" alt="back"
      /></v-avatar>

      <v-row cols="2" style="width: 150px; justify-content: center">
        <v-card-title style="font-size: 0.975rem">TEX-TRIS</v-card-title>
      </v-row>
    </v-app-bar>

    <v-main>
      <!-- CARRUSEL -->
      <v-carousel cycle>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>

      <!-- QUIENES SOMOS -->
      <v-row class="mx-0" style="background: white">
        <v-col class="pa-2 d-flex align-content-center">
          <v-card color="#CFD8DC">
            <v-card-title
              style="
                font-size: 2.75rem;
                word-break: break-word;
                line-height: 1.2;
              "
              class="px-10 pt-10"
            >
              ¿QUIENES SOMOS Y QUÉ HACEMOS?</v-card-title
            >
            <v-card-text
              class="font-weight-regular pt-1 px-10 text-justify font-lead"
              style="font-size: 1rem"
            >
              Tex-tris es una empresa de acomodacion de inventario,
              especializada en soluciones para la industria textil en el proceso
              de carga de vehiculos de transporte. Nuestras soluciones estan
              pensadas de forma modular, lo que nos permite ayudar a mejorar los
              indicadores operacionales tanto de pequeñas como de medianas y
              grandes empresas, preocupandonos siempre por escoger materiales y
              procedimientos que favorezcan la seguridad de las personas y la
              integridad y calidad de sus productos.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col class="pa-2 d-flex justify-content-center">
          <img :src="require('../assets/porqueSomosBuenos.jpg')" alt="back" />
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <!-- NUESTROS SERVICIOS -->
      <v-row class="mx-0" style="background: white; justify-content: center">
        <v-card-title
          style="font-size: 2.75rem; word-break: break-word; line-height: 1.2"
        >
          NUESTROS SERVICIOS</v-card-title
        >
      </v-row>
      <v-row class="mx-0" style="background: white">
        <v-col class="pa-2">
          <v-card color="#B2EBF2">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-title
              style="
                font-size: 1.75rem;
                word-break: break-word;
                line-height: 1.2;
              "
            ></v-card-title>
            <v-card-text
              class="font-weight-regular pt-1 text-justify font-lead"
              style="font-size: 1rem"
            >
              Tex-tris es una empresa de acomodacion de inventario,
              especializada en soluciones para la industria textil en el proceso
              de carga de vehiculos de transporte. Nuestras soluciones estan
              pensadas de forma modular, lo que nos permite ayudar a mejorar los
              indicadores operacionales tanto de pequeñas como de medianas y
              grandes empresas, preocupandonos siempre por escoger materiales y
              procedimientos que favorezcan la seguridad de las personas y la
              integridad y calidad de sus productos.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col class="pa-2">
          <v-card color="#FFF59D">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-title
              style="
                font-size: 1.75rem;
                word-break: break-word;
                line-height: 1.2;
              "
            >
              ¿QUIENES SOMOS Y QUE HACEMOS?</v-card-title
            >
            <v-card-text
              class="font-weight-regular pt-1 text-justify font-lead"
              style="font-size: 1rem"
            >
              Tex-tris es una empresa de acomodacion de inventario,
              especializada en soluciones para la industria textil en el proceso
              de carga de vehiculos de transporte. Nuestras soluciones estan
              pensadas de forma modular, lo que nos permite ayudar a mejorar los
              indicadores operacionales tanto de pequeñas como de medianas y
              grandes empresas, preocupandonos siempre por escoger materiales y
              procedimientos que favorezcan la seguridad de las personas y la
              integridad y calidad de sus productos.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col class="pa-2">
          <v-card color="#B39DDB">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-title
              style="
                font-size: 1.75rem;
                word-break: break-word;
                line-height: 1.2;
              "
            >
              ¿QUIENES SOMOS Y QUE HACEMOS?</v-card-title
            >
            <v-card-text
              class="font-weight-regular pt-1 text-justify font-lead"
              style="font-size: 1rem"
            >
              Tex-tris es una empresa de acomodacion de inventario,
              especializada en soluciones para la industria textil en el proceso
              de carga de vehiculos de transporte. Nuestras soluciones estan
              pensadas de forma modular, lo que nos permite ayudar a mejorar los
              indicadores operacionales tanto de pequeñas como de medianas y
              grandes empresas, preocupandonos siempre por escoger materiales y
              procedimientos que favorezcan la seguridad de las personas y la
              integridad y calidad de sus productos.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <!-- testimonios -->
      <v-row class="mx-0" style="background: white; justify-content: center">
        <v-card-title
          style="font-size: 2.75rem; word-break: break-word; line-height: 1.2"
        >
          TESTIMONIOS</v-card-title
        >
      </v-row>
      <v-row style="justify-content: center">
        <v-col cols="10">
          <v-carousel cycle height="100%" :show-arrows="false">
            <v-carousel-item
              v-for="(item, i) in Testimonios"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <!-- FOOTER -->
      <v-footer color="accent lighten-1" padless>
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
            <v-icon left size="24px" color="white">mdi-github</v-icon>
            {{ link }}
          </v-btn>
          <v-card-text
            class="white--text pt-0"
            align="center"
            v-for="([icon, nombre], i) in todo"
            :key="i"
          >
            <v-icon size="24px" color="white">
              {{ icon }}
            </v-icon>
            {{ nombre }}
          </v-card-text>
          <v-col
            class="accent lighten-2 py-4 text-center white--text"
            cols="12"
          >
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import TheFooter from "./TheFooter";
export default {
  components: {
    TheFooter,
  },
  data: () => ({
    links: [
      ["Inicio", "Inicio"],
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
    todo: [
      [
        "mdi-email",
        "prueba@gmail.com / ejemplo@gmail.com / tex-tris@gmail.com",
      ],
      ["mdi-map-marker-multiple", "Cúcuta / Cali / Bogotá"],
      ["mdi-phone", "(+57) 333-123-4567"],
    ],
    Testimonios: [
      {
        src: require("../assets/Testimonio1.png"),
      },
      {
        src: require("../assets/Testimonio2.png"),
      },
      {
        src: require("../assets/Testimonio3.png"),
      },
    ],
    // categorias: [],
    // categoria1: {
    //   id: 0,
    //   nombre: "",
    //   descripcion: "",
    //   estado: 0,
    // },
    // categoria2: {
    //   id: 0,
    //   nombre: "",
    //   descripcion: "",
    //   estado: 0,
    // },
    // categoria3: {
    //   id: 0,
    //   nombre: "",
    //   descripcion: "",
    //   estado: 0,
    // },
  }),
  // beforeCreated() {
  //   this.listCategorias();
  //   this.getUserDetails();
  // },
  // methods: {
  //   listCategorias() {
  //     axios
  //       .get("http://localhost:3000/api/categoria/list", {
  //         headers: {
  //           token: this.$store.state.token,
  //         },
  //       })
  //       .then((response) => {
  //         this.categorias = response.data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  //   getUserDetails() {
  //     this.categoria2.id = this.categorias[1].id;
  //   },
  // },
};
</script>