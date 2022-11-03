<template>
  <div v-if="GStore.patient">
    <div id="nav">
      <router-link class="bbb" :to="{ name: 'PatientDetail' }">
        Patient Details
      </router-link>
      |
      <router-link class="bbb" :to="{ name: 'PatientVaccine' }"
        >Vaccination</router-link
      >|
      <router-link class="bbb" :to="{ name: 'DoctorComment' }">
        Doctor Comments
      </router-link>
    </div>
    <router-view :patient="GStore.patient" />
  </div>
</template>
<script>
export default {
  inject: ['GStore']
}
</script>
<style>
.bbb {
  color: lightgoldenrodyellow;
}
.bbb:hover {
  color: yellow;
}
</style>
