<template>
  <v-layout>
    <v-flex class="text-center">
      「言語」
      <v-list>
        <v-list-item v-for="item in language" :key="item" :item="item">
          {{ item }}
        </v-list-item>
      </v-list>
      「技術」Docker
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      language: ['C', 'Ruby', 'Python'],
    }
  },
}
</script>
