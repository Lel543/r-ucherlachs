<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <v-img
          src="../../public/img/person_test.jpg"
          alt="Profilbild"
          class="profile-img"
          transition="slide-y-transition"
        />
      </v-col>
      <v-col cols="7">
        <v-expansion-panels class="mb-6">
          <v-expansion-panel>
            <v-expansion-panel-title expand-icon="mdi-menu-down" class="Meera-Regular">
              Über mich
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-body-1 Cabin-Regural"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-text
            >
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>
a
<style>
.text-body-1 {
  font-size: 6rem;
}
</style>
