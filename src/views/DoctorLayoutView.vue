<template>
  <div class="background" v-if="GStore.doctor">
    <div id="nav">
      <router-link class="bbb" :to="{ name: 'DoctorDetail' }"
        >DoctorDetail</router-link
      >
      |
      <router-link
        class="bbb"
        :to="{ name: 'DoctorPatient', params: { id: GStore.doctor.id } }"
        >DoctorPatients</router-link
      >
    </div>
    <router-view :doctor="GStore.doctor" />
  </div>
</template>
<script>
export default {
  inject: ['GStore']
}
</script>
