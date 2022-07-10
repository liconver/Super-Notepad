<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
  min-height: 230px
  max-height:250px
</style>

<template>
  <q-page class="flex flex-center" style="background-color: #000000;">


    <Splide :options="{
      rewind: true, pagination: false, drag: 'free', isNavigation: true, fixedWidth: '250px', gap: '2rem',
      breakpoints:
        { 1024: { width: '60w' }, 768: { width: '80vw' }, 480: { width: '100vw' } }
    }">
      <SplideSlide>
        <q-card class="my-card text-black q-ma-sm" @click="modal = true"
          style="background: radial-gradient(circle, #f2dd1a 0%, #fff800 100%)">
          <q-card-section>
            <div class="text-h4 ">Hello Quasar</div>
            <div class="text-subtitle2 ">Could this work for nOtes?</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="row justify center">Here's a q-card section. </div>
          </q-card-section>
        </q-card>
      </SplideSlide>
      <SplideSlide style="width: 60vw">
        <q-card class="my-card text-black q-ma-sm " @click="modal = true"
          style="background: radial-gradient(circle, #f2dd1a 0%, #fff800 100%)">
          <q-card-section>
            <div class="text-h4 ">Hello Quasar</div>
            <div class="text-subtitle2 ">Could this work for nOtes?</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="row justify center">Here's another q-card section. </div>
          </q-card-section>
        </q-card>
      </SplideSlide>
      <SplideSlide style="width: 60vw">
        <q-card class="my-card text-black q-ma-sm" @click="modal = true"
          style="background: radial-gradient(circle, #f2dd1a 0%, #fff800 100%)">
          <q-card-section>
            <div class="text-h4 ">Hello Quasar</div>
            <div class="text-subtitle2 ">Could this work for nOtes?</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="row justify center">And another q-card section. </div>
          </q-card-section>
        </q-card>
      </SplideSlide>
    </Splide>

    <div>
      <q-btn round size="lg" class="fixed-bottom-right" icon="edit" text-color="primary" @click="modal = true">
        <q-tooltip transition-show="rotate" transition-hide="rotate" anchor="top left" self="bottom middle"
          class="bg-primary text-black text-body2" :offset="[40, 14]">
          Create a new note
        </q-tooltip>
      </q-btn>

      <q-dialog v-model="modal" full-height full-width>
        <q-card class="column full-height bg-primary no-wrap">
          <q-toolbar class="q-pb-none text-black " style="height: 56px">
            <q-input v-show="addTitle" class="col-10 text-h6 q-pa-none q-ma-none" dark="false" borderless
              v-model="note.title" placeholder="title..." />
            <q-space />
            <q-btn icon="more_vert" flat round dense size="md">
              <q-menu anchor="bottom left" self="top right" class="bg-primary q-pa-md">
                <q-list dense>
                  <q-item>
                    <q-toggle dark="false" dense color="secondary" class="text-black" v-model="addTitle"
                      label="Add Title" />
                  </q-item>
                  <q-item>
                    <q-toggle dark="false" dense color="secondary" class="text-black" v-model="showToolbar"
                      label="Show Toolbar" />
                  </q-item>

                  <q-item>
                    <q-item-section>New tab</q-item-section>
                  </q-item>

                </q-list>
              </q-menu>
            </q-btn>
          </q-toolbar>
          <q-editor v-if="showToolbar" dark="false" placeholder="..." toolbar-push toolbar-text-color="black"
            toolbar-toggle-color="secondary" toolbarColor="primary" toolbarBg="primary" flat height="60vh"
            class="bg-primary text-black" v-model="note.text" :toolbar="[
              ['unordered', 'ordered', 'outdent', 'indent',
                {
                  icon: $q.iconSet.editor.fontSize,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'size-1',
                    'size-2',
                    'size-3',
                    'size-4',
                    'size-5',
                    'size-6',
                    'size-7'
                  ]
                },
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  list: 'only-icons',
                  options: ['left', 'center', 'right', 'justify']
                },
                'quote', 'link', 'bold', 'italic', 'underline', 'strike',
                'undo', 'redo', 'removeFormat', 'viewsource', 'print'],
            ]" />
          <q-editor v-else placeholder="..." height="70vh" flat class="bg-primary  text-black" v-model="note.text"
            min-height="5rem" :toolbar="[]" />


          <q-card-section class="col q-pt-none">
          </q-card-section>

          <q-card-actions align="right" class="bg-primary text-black">
            <q-btn flat icon="close" round v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';

const modal = ref(false)
const showToolbar = ref(false)
const addTitle = ref(false)

const note = ref({
  text: '',
  title: '',
  date: new Date()
})

const notes = ref([
  {
    text: 'Coud this work for n0tes?',
    title: 'Hello Quasar',
    date: new Date()
  },
  {
    text: 'This is a note',
    title: 'Note 1',
    date: new Date()
  },
  {
    text: 'This is another note',
    title: 'Note 2',
    date: new Date()
  }
])


</script>



