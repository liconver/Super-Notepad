<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
  min-height: 230px
  max-height:250px
</style>

<template>
  <q-page class="flex flex-center" style="background-color: #000000;">
    <q-card class="my-card" style="background: radial-gradient(circle, #f2dd1a 0%, #fff800 100%)">
      <q-card-section>
        <div class="text-h4">Hello Quasar</div>
        <div class="text-subtitle2">Could this work for nOtes?</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="row justify center">Here's another q-card section. </div>
      </q-card-section>
    </q-card>

    <div>
      <q-btn round size="lg" class="fixed-bottom-right" icon="edit" text-color="primary" color="black"
        @click="modal = true">
        <q-tooltip transition-show="rotate" transition-hide="rotate" anchor="top left" self="bottom middle"
          class="bg-primary text-black text-body2" :offset="[40, 14]">
          Create a new note
        </q-tooltip>
      </q-btn>

      <q-dialog v-model="modal" full-height full-width>
        <q-card class="column full-height bg-primary text-black" style="width: 300px">
          <q-card-section class="row items-center content-stretch q-pb-none">
            <q-input class="col-10 text-h6 text-black" color="black" borderless v-model="title" placeholder="..." />
            <!-- <div class="text-h6">Full Height</div> -->
            <q-space />
            <q-btn icon="more_horiz" flat round dense />
          </q-card-section>

          <q-editor placeholder="..." height="260px" toolbar-push toolbar-text-color="black"
            toolbar-toggle-color="secondary" flat class="bg-primary" v-model="editor" min-height="5rem" :toolbar="[
              ['unordered', 'ordered', {
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
                'removeFormat'],
              ['bold', 'underline', 'strike'],
              ['undo', 'redo'],
            ]" />


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

const modal = ref(false)
const title = ref('')
const editor = ref('')

</script>



