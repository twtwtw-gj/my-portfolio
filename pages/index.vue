<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          I'm a Software Developer in Tokyo.
        </v-card-title>
        <v-card-text>
          <p>
            大学・大学院では数学をやっていました。（主な興味　数学基礎論・公理的集合論）
          </p>
          <p>
            現在は都内でプログラマーをしています。多摩地域に住んでいます。
          </p>
          <p>
            私のコードを見てください。
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
