<template>
  <q-page class="flex flex-center" style="background-color: #000000;">
    <q-card class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h4">Hello Quasar</div>
        <div class="text-subtitle2">Could this work for nOtes?</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="row justify center">Here's another q-card section</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>


