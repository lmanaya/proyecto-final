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
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
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
export default {
  data: () => ({
    links: [
      ["Inicio", "Inicio"],
      ["Login", "Login"],
    ],
    email: "",
    password: "",
    show1: false,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
    ],
  }),
  methods: {
    Login() {
      axios
        .post("http://localhost:3000/api/usuario/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          let token = response.data.tokenReturn;
          let user = response.data.user;
          let nombre = response.data.user.nombre;
          let email = response.data.user.email;
          let rol = response.data.user.rol;
          let estado = response.data.user.estado;

          localStorage.setItem("jwt", token);
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("nombre", nombre);
          localStorage.setItem("email", email);
          localStorage.setItem("rol", rol);
          localStorage.setItem("estado", estado);

          if (token) {
            swal("Welcome!", "Successful signin", "success");
            this.$router.push("/autenticado/home");
          }
        })
        .catch((error) => {
          swal("Oops!", "Something went wrong!", "error");
          console.log(error);
        });
    },
  },
};
</script>
