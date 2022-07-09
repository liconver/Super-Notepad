<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
  min-height: 230px
  max-height:250px
</style>

<template>
  <q-page class="flex flex-center" style="background-color: #000000;">
    <q-card class="my-card text-black" style="background: radial-gradient(circle, #f2dd1a 0%, #fff800 100%)">
      <q-card-section>
        <div class="text-h4 ">Hello Quasar</div>
        <div class="text-subtitle2 ">Could this work for nOtes?</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="row justify center">Here's another q-card section. </div>
      </q-card-section>
    </q-card>

    <div>
      <q-btn round size="lg" class="fixed-bottom-right" icon="edit" text-color="primary" @click="modal = true">
        <q-tooltip transition-show="rotate" transition-hide="rotate" anchor="top left" self="bottom middle"
          class="bg-primary text-black text-body2" :offset="[40, 14]">
          Create a new note
        </q-tooltip>
      </q-btn>

      <q-dialog v-model="modal" full-height full-width>
        <q-card class="column full-height bg-primary ">
          <q-toolbar class="q-pb-none text-black" style="height: 56px">
            <q-input v-show="addTitle" class="col-10 text-h6 q-pa-none q-ma-none" dark="false" borderless
              v-model="title" placeholder="title..." />
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
          <!-- <q-card-section class="row items-center content-stretch q-pb-none text-black">
            <q-input v-show="addTitle" class="col-10 text-h6" dark="false" borderless v-model="title"
              placeholder="title..." />
            <q-space />
            <q-btn icon="more_vert" flat round dense>
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
          </q-card-section> -->

          <q-editor v-if="showToolbar" dark="false" placeholder="..." height="260px" toolbar-push
            toolbar-text-color="black" toolbar-toggle-color="secondary" toolbarColor="primary" toolbarBg="primary" flat
            class="bg-primary text-black" v-model="editor" min-height="5rem" :toolbar="[
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
          <q-editor v-else placeholder="..." height="260px" flat class="bg-primary  text-black" v-model="editor"
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

const modal = ref(false)
const showToolbar = ref(false)
const addTitle = ref(false)

const editor = ref('')
const title = ref('')


let logModel = () => {
  console.log({
    title: title.value,
    editor: editor.value,
    toolbar: toolbar.value
  })
}

</script>



