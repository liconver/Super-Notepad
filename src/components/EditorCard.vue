<template>
  <q-card class="column full-height bg-primary no-wrap">
    <q-toolbar class="q-pb-none text-black " style="height: 56px">
      <q-input v-show="addTitle" class="col-10 text-h6 q-pa-none q-ma-none" :dark="false" borderless
        v-model="editor.title" placeholder="title..." />
      <q-space />
      <q-btn icon="more_vert" flat round dense size="md">
        <q-menu anchor="bottom left" self="top right" class="bg-primary q-pa-md">
          <q-list dense>
            <q-item>
              <q-toggle dense color="secondary" class="text-black" v-model="addTitle" label="Add Title" />
            </q-item>
            <q-item>
              <q-toggle dense color="secondary" class="text-black" v-model="showToolbar" label="Show Toolbar" />
            </q-item>
            <q-item>
              <q-item-section>New tab</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
    <q-editor placeholder="..." toolbar-push toolbar-text-color="black" toolbar-toggle-color="secondary"
      toolbarColor="primary" toolbarBg="primary" flat height="60vh" class="bg-primary text-black" v-model="editor.text"
      :toolbar="showToolbar ? [toolbar] : []" />
    <q-card-section class="col q-pt-none">
    </q-card-section>
    <q-card-actions align="right" class="bg-primary text-black">
      <q-btn flat icon="close" round v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {}
  }
}
</script>
