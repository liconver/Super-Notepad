<style lang="sass" scoped>
.my-card
  width: 100%
  width: 250px
  height: 230px
</style>


<template>
  <q-page class="flex flex-center no-scroll " style="background-color: #000000;">
    //TODO: componentize editor and set up global pinia store
    <Splide :options="splideOptions">
      <SplideSlide v-for="(note, index) in notes" :index="index" :key="note.id">
        <q-card class="my-card text-black q-ma-sm" @click="editNote" :id="index"
          style="background: radial-gradient(circle, #f2dd1a 0%, #fff800 100%)">
          <q-card-section class="q-pb-sm overflow-hidden">
            <div class="text-h5 ">{{ note.title }}</div>
          </q-card-section>
          <q-card-section class="q-pt-none overflow-hiden-y">
            <div class="row justify center" v-html="note.text"></div>
          </q-card-section>
          <q-dialog v-model="modal2" full-height full-width>
            <q-card class="column full-height bg-primary no-wrap">
              <q-toolbar class="q-pb-none text-black " style="height: 56px">
                <q-input v-show="addTitle" class="col-10 text-h6 q-pa-none q-ma-none" :dark="false" borderless
                  v-model="editor.title" placeholder="title..." />
                <q-space />
                <q-btn icon="more_vert" flat round dense size="md">
                  <q-menu anchor="bottom left" self="top right" class="bg-primary q-pa-sm">
                    <q-list dense>
                      <q-item clickable>
                        <q-checkbox label="Add Title" v-model="addTitle" unchecked-icon="check_box_outline_blank"
                          checked-icon="check_box" :dark="false" color="black" dense />
                      </q-item>
                      <q-item clickable>
                        <q-checkbox label="Show Toolbar" v-model="showToolbar" unchecked-icon="check_box_outline_blank"
                          checked-icon="check_box" :dark="false" color="black" dense />
                      </q-item>
                      <q-item clickable>
                        <q-checkbox label="Delete Note" checked-icon="delete" v-model="deleteM" @click="deleteNote"
                          :dark="false" color="black" indeterminate-value="true" dense />
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-toolbar>
              <q-editor placeholder="..." toolbar-push toolbar-text-color="black" toolbar-toggle-color="secondary"
                toolbarColor="primary" toolbarBg="primary" flat height="60vh" class="bg-primary text-black"
                v-model="editor.text" :toolbar="showToolbar ? [toolbar] : []" />
              <q-card-section class="col q-pt-none">
              </q-card-section>
              <q-card-actions align="right" class="bg-primary text-black">
                <q-btn flat icon="close" round v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-card>
      </SplideSlide>
    </Splide>

    <div>
      <q-btn round size="xl" class="fixed-bottom-right q-pa-lg" icon="edit" text-color="primary" @click="modal1 = true">
        <q-tooltip transition-show="rotate" transition-hide="rotate" anchor="top left" self="bottom middle"
          class="bg-primary text-black text-body2" :offset="[40, 14]">
          new note
        </q-tooltip>
      </q-btn>

      <q-dialog v-model="modal1" full-height full-width>
        <q-card class="column full-height bg-primary no-wrap">
          <q-toolbar class="q-pb-none text-black " style="height: 56px">
            <q-input v-show="addTitle" class="col-10 text-h6 q-pa-none q-ma-none" :dark="false" borderless
              v-model="newNote.title" placeholder="title..." />
            <q-space />
            <q-btn icon="more_vert" flat round dense size="md">
              <q-menu anchor="bottom left" self="top right" class="bg-primary q-pa-md">
                <q-list dense>
                  <q-item clickable>
                    <q-checkbox label="Add Title" v-model="addTitle" unchecked-icon="check_box_outline_blank"
                      checked-icon="check_box" :dark="false" color="black" dense />
                  </q-item>
                  <q-item clickable>
                    <q-checkbox label="Show Toolbar" v-model="showToolbar" unchecked-icon="check_box_outline_blank"
                      checked-icon="check_box" :dark="false" color="black" dense />
                  </q-item>
                  <q-item clickable>
                    <q-checkbox label="Delete Note" checked-icon="delete" v-model="deleteM" @click="deleteNote"
                      :dark="false" color="black" indeterminate-value="true" dense />
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-toolbar>
          <q-editor placeholder="..." toolbar-push toolbar-text-color="black" toolbar-toggle-color="secondary"
            toolbarColor="primary" toolbarBg="primary" flat height="60vh" class="bg-primary text-black"
            v-model="newNote.text" :toolbar="showToolbar ? [toolbar] : []" />
          <!-- TODO: keep list-style-type as disc always -->
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
import { ref, reactive, watch, nextTick } from 'vue'
import { useQuasar } from 'quasar'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';

const modal1 = ref(false)
const modal2 = ref(false)
const showToolbar = ref(false)
const addTitle = ref(false)
const newNote = ref({
  text: '',
  title: '',
  id: new Date().getTime(),
})
const editor = ref({
  text: '',
  title: '',
})
const notes = ref([])
watch(
  () => modal1.value,
  () => {
    console.log('watch1 ran');
    if (newNote.value.text.length > 0) {
      notes.value.push({
        text: newNote.value.text,
        title: newNote.value.title,
        id: new Date().getTime()
      })
      newNote.value.text = ''
      newNote.value.title = ''
    }
  }
)
function editNote(event) {
  // console.log(event.target.getAttribute('id'))
  let index = event.target.getAttribute('id')
  modal2.value = true
  editor.value = notes.value[index]
}
const deleteM = true;

const splideOptions = reactive({
  rewind: false, pagination: false, drag: 'free', isNavigation: true, autoWidth: true, gap: '0.5rem',
  // breakpoints: { 768: { width: '80%' }, 480: { width: '100%' } },
  width: '100%',
  arrows: false, rewind: true
})

async function updateArrows() {
  await nextTick()
  console.log(document.querySelector('.splide').offsetWidth)
  if (document.querySelector('.splide').offsetWidth >= window.innerWidth - 10) {
    splideOptions.arrows = true
  } else {
    splideOptions.arrows = false
  }
}

watch(
  () => notes.value.length,
  () => {
    // splideWidth.value = document.querySelector('.splide').offsetWidth
    console.log('watch2 ran');
    console.log(notes.value.length);

    console.log(document.querySelector('.splide').offsetWidth)
    updateArrows()
  }
)

const $q = useQuasar()
const toolbar = ['unordered', 'ordered', 'outdent', 'indent', {
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
  'undo', 'redo', 'removeFormat', 'viewsource', 'print']//TODO: add attach icon

// watch(
//   () => splideWidth.value,
//   () => {
//     console.log('watch3 ran');
//     console.log(splideWidth.value);
//     if (splideWidth.value >= window.innerWidth - 10) {
//       splideOptions.arrows = true
//     } else {
//       splideOptions.arrows = false
//     }
//   }
// )

</script>



