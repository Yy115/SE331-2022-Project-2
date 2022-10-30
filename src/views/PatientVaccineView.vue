<template>
  <h1>Vaccination of {{ patient.name }} {{ patient.sur_name }}</h1>
  <h3>'{{ patient.vaccined_status }}'</h3>
  <center>
    <div class="dose1">
      <b>First dose: </b>
      <br />
      <span> vaccine name: {{ patient.firstdose_name }} </span>
      <br />
      <span> time: {{ patient.firstdose_time }}</span>
      <br />
    </div>
    <br />
    <div class="dose2" v-if="patient.seconddose_name">
      <b>Second dose: </b>
      <br />
      <span> vaccine name:{{ patient.seconddose_name }} </span>
      <br />
      <span> time:{{ patient.seconddose_time }}</span>
      <br />
    </div>
    <br />
    <div class="dose3" v-if="patient.thirddose_name">
      <b>third dose: </b>
      <br />
      <span> vaccine name:{{ patient.thirddose_name }} </span>
      <br />
      <span> time:{{ patient.thirddose_time }}</span>
      <br />
    </div>
  </center>
</template>

<script>
export default {
  props: ['id', 'patient'],
  inject: ['GStore']
}
</script>

<style>
.dose1 {
  height: 100px;
  width: 300px;
  border: red 3px dashed;
  line-height: 25px;
  background-color: moccasin;
}
.dose2 {
  height: 100px;
  width: 300px;
  border: red 3px dashed;
  line-height: 25px;
  background-color: antiquewhite;
}
.dose3 {
  height: 100px;
  width: 300px;
  border: red 3px dashed;
  line-height: 25px;
  background-color: lightyellow;
}
</style>
