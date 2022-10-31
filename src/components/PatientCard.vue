<template>
  <router-link
    class="patient-link"
    :to="{ name: 'PatientDetail', params: { id: patient.id } }"
  >
    <div class="patient-card">
      <h4>{{ patient.name }} {{ patient.sur_name }}</h4>
      <span>Vaccine Status:{{ patient.vaccined_status }}</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'PatientCard',
  props: {
    patient: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.patient-card {
  border-radius: 5px;
  padding: 20px;
  width: 450px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  background-color: lightcyan;
}

.patient-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.patient-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
