<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          I'm a Software Developer in Hachioji, Tokyo.
        </v-card-title>
        <v-card-text>
          <p>
            英語で自己紹介を書くのは面倒くさい。
          </p>
          <p>
            私のコード見てください。
            <a
              href="https://github.com/twtwtw-gj"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub </a
            >.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/portfolio">
            My portfolio
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
}
</script>
