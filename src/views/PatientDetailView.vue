<template>
  <div v-if="patient">
    <br />
    <div class="patinfo">
      <h3>name: {{ patient.name }}</h3>
      <h3>surname: {{ patient.sur_name }}</h3>
      <p>age: {{ patient.age }}</p>
      <p>hometown: {{ patient.hometown }}</p>
    </div>
  </div>
</template>

<script>
import PatientService from '@/services/PatientService.js'

export default {
  props: ['id'],
  inject: ['GStore'],
  data() {
    return {
      patient: null
    }
  },
  created() {
    // fetch person (by id) and set local person data
    PatientService.getPatient(this.id)
      .then((response) => {
        this.patient = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style>
.patinfo {
  border: 5px burlywood dotted;
  background-color: lightskyblue;
}
</style>
