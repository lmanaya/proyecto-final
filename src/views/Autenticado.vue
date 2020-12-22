<template>
  <v-app id="inspire">
    <v-app-bar app color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container d-flex justify-end>
        <v-btn color="secondary" class="mr-4" @click="logOut" height="40">
          Salir
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <div id="app">
        <v-app id="inspire">
          <v-card class="mx-auto" width="300">
            <v-list>
              <v-list-item :to="{ name: 'TheAuth' }">
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>

                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>

              <v-list-group :value="false" prepend-icon="mdi-cog-outline">
                <template v-slot:activator>
                  <v-list-item-title>Gestión</v-list-item-title>
                </template>

                <v-list-group :value="false" no-action sub-group>
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>Principal</v-list-item-title>
                    </v-list-item-content>
                  </template>

                  <v-list-item
                    v-for="([title, icon, ruta], i) in admins"
                    :key="i"
                    link
                    :to="{ name: ruta }"
                  >
                    <v-list-item-title v-text="title"></v-list-item-title>

                    <v-list-item-icon>
                      <v-icon v-text="icon"></v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list-group>

                <v-list-group
                  v-if="this.$store.state.user.rol === 'Administrador'"
                  no-action
                  sub-group
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>De Acceso</v-list-item-title>
                    </v-list-item-content>
                  </template>

                  <v-list-item
                    v-for="([title, icon, ruta], i) in cruds"
                    :key="i"
                    link
                    :to="{ name: ruta }"
                  >
                    <v-list-item-title v-text="title"></v-list-item-title>

                    <v-list-item-icon>
                      <v-icon v-text="icon"></v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list-group>
              </v-list-group>
            </v-list>
          </v-card>
        </v-app>
      </div>
    </v-navigation-drawer>

    <v-main class="white">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: null,
    admins: [
      ["Categoría", "mdi-view-agenda-outline", "Categoria"],
      ["Articulos", "mdi-clipboard-list-outline", "Articulo"],
    ],
    cruds: [["Usuarios", "mdi-account-check-outline", "Usuario"]],
  }),
  methods: {
    logOut() {
      this.$store.dispatch("salir");
    },
  }
};
</script>
