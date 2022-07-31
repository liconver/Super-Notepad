<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" color="black" />

        <q-toolbar-title class="row">
          <img alt="Super Notepad logo" src="~assets/logo.svg" class="justify-start">
        </q-toolbar-title>

        <div style="color: #000000;"> v0.0.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-primary">
      <q-list class="q-pt-lg">
        <!-- <q-item-label class="text-black" header>
          Menu
        </q-item-label> -->

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
const linksList = [
  {
    title: 'Account',
    caption: 'Login to access your notes across all devices',
    icon: 'account_circle',
    link: 'https://'
  },
  {
    title: 'Share to social',
    caption: 'Share note as tweet or instagram post',
    icon: 'rss_feed',
    link: 'https://'
  },
  {
    title: 'Messaging',
    caption: 'Live chat wth other users or share notes',
    icon: 'chat',
    link: 'https://'
  },
  {
    title: 'Web App',
    caption: 'Browser version of the app',
    icon: 'public',
    link: 'https://supernotepad.app'
  },
  {
    title: 'Suggestions',
    caption: 'suggestions, bugs, or feature requests',
    icon: 'record_voice_over',
    link: 'https://github.com/liconver'
  },
  {
    title: 'My Website',
    caption: 'liamconverse.tech',
    icon: 'code',
    link: 'https://liamconverse.tech'
  },
  {
    title: 'Donate',
    caption: 'Buy me a coffee!',
    icon: 'favorite',
    link: 'https://'
  }
]
</script>
