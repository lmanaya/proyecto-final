<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
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
      <v-container d-flex justify-center>
        <v-col cols="12" md="6">
          <v-form ref="form">
            <v-text-field
              v-model="login.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="login.password"
              :rules="passwordRules"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              @click:append="show1 = !show1"
              required
            ></v-text-field>

            <v-btn color="success" class="mr-4" @click="Login"> Login </v-btn>
          </v-form>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import swal from "sweetalert";
import VueJwtDecode from "vue-jwt-decode";
export default {
  data: () => ({
    links: [
      ["Inicio", "Inicio"],
      ["Login", "Login"],
    ],
    login: {
      email: "",
      password: "",
    },
    show1: false,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [(v) => !!v || "Password is required"],
  }),
  beforeCreate() {
    this.$store.dispatch("autoLogin")
      ? this.$router.push({path: "/autenticado/home"})
      : false;
  },
  methods: {
    Login() {
      axios
        .post("http://localhost:3000/api/usuario/login", this.login)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          this.$store.dispatch('saveToken',data.tokenReturn)
          swal("Welcome!", "Successful signin", "success");
          this.$router.push("/autenticado/home");
          console.log(data);
        })
        .catch((error) => {
          swal("Oops!", "Something went wrong!", "error");
          console.log(error);
          return error;
        });
    },
  },
};
</script>
