<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="grey-darken-4">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card color="grey-darken-4" flat>
            <v-card-title class="text-h5">Kontakt</v-card-title>
            <v-card-text class="text-body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis
              est labore voluptatibus!
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card color="grey-darken-4" flat>
            <v-card-title class="text-h5">Informationen</v-card-title>
            <v-card-text class="text-body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis
              est labore voluptatibus!
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Räucherlachs</strong></div>
  </v-footer>
</template>

<script setup>
const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
</script>

<style scoped></style>
