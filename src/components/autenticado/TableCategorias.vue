<template>
  <div id="app">
    <v-app id="inspire">
      <v-container>
        <v-data-table
        :headers="headers"
        :items="categorias"
        sort-by="id"
        class="elevation-1 mx-10"
        :loading="cargando"
        loading-text="Loading... Please wait"
      >
        <template v-slot:top>
          <v-toolbar flat space-between>
            <v-toolbar-title>CATEGORÍAS</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Nueva categoría
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-col>
                      <v-row rows="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.nombre"
                          label="Nombre"
                        ></v-text-field>
                      </v-row>
                      <v-row rows="12" sm="6" md="4">
                        <v-textarea
                          no-resize
                          v-model="editedItem.descripcion"
                          label="Descripción"
                        ></v-textarea>
                      </v-row>
                    </v-col>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancelar
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Guardar </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline font-weight-regular"
                  >¿Está seguro que quiere cambiar el estado de la categoría?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    > No </v-btn
                  >
                  <v-btn color="blue darken-1" text @click="changeStatusConfirm"
                    > Sí </v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon medium class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon medium @click="changeStatus(item)">
            <template v-if="item.estado">mdi-toggle-switch-outline</template>
            <template v-else>mdi-toggle-switch-off-outline</template>
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    cargando: true,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: true,
        value: "id",
      },
      { text: "Nombre", value: "nombre" },
      { text: "Descripción", value: "descripcion" },
      { text: "Estado", value: "estado" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    categorias: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      nombre: "",
      descripcion: "",
      estado: 0,
    },
    defaultItem: {
      id: 0,
      nombre: "",
      descripción: "",
      estado: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva categoría" : "Editar categoría";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.list();
  },

  methods: {
    list() {
      axios
        .get("http://localhost:3000/api/categoria/list")
        .then((response) => {
          this.categorias = response.data;
          this.cargando = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editItem(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    changeStatus(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    changeStatusConfirm() {
      if (this.editedItem.estado === 1) {
        //deactivate
        axios
          .put("http://localhost:3000/api/categoria/deactivate", {
            id: this.editedItem.id,
          })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            return error;
          });
      } else {
        //activate
        axios
          .put("http://localhost:3000/api/categoria/activate", {
            id: this.editedItem.id,
          })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            return error;
          });
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        //put
        axios
          .put("http://localhost:3000/api/categoria/update", {
            id: this.editedItem.id,
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
          })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            return error;
          });
      } else {
        //post
        axios
          .post("http://localhost:3000/api/categoria/add", {
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
          })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            return error;
          });
      }
      this.close();
    },
  },
};
</script>
