<template>
  <v-layout>
    <v-flex>
      <p>「言語」</p>
      <v-list>
        <v-list-item
          v-for="item in languageList"
          :key="item.language"
          :item="item"
          two-line
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.language }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.comment }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <p>気になっている技術（順不同）</p>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Linux（実機上でArch Linux）</v-list-item-title>
            <v-list-item-title>Docker, Kubernete</v-list-item-title>
            <v-list-item-title>AWS</v-list-item-title>
            <v-list-item-title>統計・機械学習</v-list-item-title>
            <v-list-item-title>自作コンパイラ・自作Wikiエンジン</v-list-item-title>
            <v-list-item-title>関数型言語</v-list-item-title>
            <v-list-item-title>数学基礎論とプログラミングを絡めて何かする感じのやつ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import _ from 'lodash'

const languageList = [
  {
    language: 'C',
    comment: '最初に覚えた言語',
  },
  {
    language: 'Ruby',
    comment: '好きな言語のひとつ',
  },
  {
    language: 'Python',
    comment: 'ライブラリが豊富で遊んでいて楽しかった',
  },
  {
    language: 'Haskell',
    comment:
      'きっちりしていて好きな言語。もともと数学基礎論をやっていたのと、型のきっちりしている言語の方が読みやすくて好きなので、興味を持てた',
  },
  {
    language: 'Scheme(Gauche)',
    comment: 'Call/CCに興味を持って調べた。Lispはまだ勉強中',
  },
  {
    language: 'Java',
    comment:
      'サーバー立ち上げが出来るのは今のところこれ（Spring boot, tomcat）とJavaScript（Express）だけ',
  },
  {
    language: 'JavaScript（Node.js, Vue.js, React.js）',
    comment: '仕事では使っていたが、オブジェクト指向（ES5以前のやつ）がわかりにくいのと、デザイン能力に自信がないので1人でやるのは心もとない'
  },
]

export default {
  data() {
    return {
      languageList: _.uniqBy(languageList, 'language'),
    }
  },
}
</script>
