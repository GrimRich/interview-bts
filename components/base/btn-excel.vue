<template>
  <div>
    <template>
      <v-divider vertical inset></v-divider>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon>
            <v-icon>mdi-microsoft-excel</v-icon>
          </v-btn>
        </template>
        <span>Import Data <slot></slot></span>
      </v-tooltip>
    </template>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped></style>
