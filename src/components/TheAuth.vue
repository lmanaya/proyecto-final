<template>
  <div id="app">
    <v-app id="inspire">
      <v-container d-flex justify-center>
        <v-card class="mx-auto" max-width="400" tile>
          <v-container justify-center>
            <v-row justify="space-around">
              <v-icon large color="green darken-2"> mdi-card-account-details-outline </v-icon>
            </v-row>
            <v-list-item four-line class="text-center">
              <v-list-item-content>
                <v-list-item-title>{{ nombre }}</v-list-item-title>
                <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ rol }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ estado }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-container>
        </v-card>

        <v-btn color="success" class="mr-4" @click="logOut" height="60">
          Salir
        </v-btn>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "TheAuth",
  data: () => ({
    user: {},
    token: {},
    nombre: "",
    email: "",
    rol: "",
    estado: "",
    model: 1,
  }),
  methods: {
    getUserDetails() {
      this.user = localStorage.getItem("user");
      this.token = localStorage.getItem("jwt");
      this.nombre = localStorage.getItem("nombre");
      this.email = localStorage.getItem("email");
      this.rol = localStorage.getItem("rol");
      this.estado = localStorage.getItem("estado");
      if (token) {
        this.user = JSON.parse(user);
      }
    },
    logOut() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      localStorage.removeItem("nombre");
      localStorage.removeItem("email");
      localStorage.removeItem("rol");
      localStorage.removeItem("estado");
      this.$router.push("/");
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>