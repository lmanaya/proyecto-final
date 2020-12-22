<template>
  <div id="app">
    <v-app id="inspire">
      <v-container d-flex justify-center>
        <v-card class="mx-auto" max-width="400" tile>
          <v-container justify-center>
            <v-row justify="space-around">
              <v-icon large color="green darken-2">
                mdi-card-account-details-outline
              </v-icon>
            </v-row>
            <v-list-item four-line class="text-center">
              <v-list-item-content>
                <v-list-item-title>{{ name }}</v-list-item-title>
                <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ rol }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ status }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-container>
        </v-card>

        <!-- <v-btn color="success" class="mr-4" @click="logOut" height="60">
          Salir
        </v-btn> -->
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "TheAuth",
  data: () => ({
    // user: {},
    // token: {},
    name: "",
    email: "",
    rol: "",
    status: "",
    model: 1,
  }),
  created() {
    this.getUserDetails();
  },
  methods: {
    getUserDetails() {
      // this.user = localStorage.getItem("user");
      // this.token = localStorage.getItem("jwt");
      this.name = this.$store.state.user.name;
      this.email = this.$store.state.user.email;
      this.rol = this.$store.state.user.rol;
      this.status = this.$store.state.user.status;
      console.log(this.$store.state.user)
      // if (token) {
      //   this.user = JSON.parse(user);
      // }
    },
    // logOut() {
    //   this.$store.dispatch("salir");
    // },
  },
};
</script>