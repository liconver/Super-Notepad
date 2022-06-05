<template>
  <q-page class="flex flex-center" style="background-color: #000000;">
    <q-card class="my-card" style="background: radial-gradient(circle, #f2dd1a 0%, #fff800 100%)">
      <q-card-section>
        <div class="text-h4">Hello Quasar</div>
        <div class="text-subtitle2">Could this work for nOtes?</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="row justify center">Here's another q-card section</div>
      </q-card-section>
    </q-card>

    <div>
      <q-btn round size="md" icon="edit" text-color="primary" color="black" @click="note = true"></q-btn>
      <q-dialog v-model="note" full-height full-width>
        <q-card class="column full-height" style="width: 300px">
          <q-card-section>
            <div class="text-h6">Full Height</div>
          </q-card-section>

          <q-card-section class="col q-pt-none">
            Click/Tap on the backdrop.
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      note: ref(false)
    }
  }
})




</script>


