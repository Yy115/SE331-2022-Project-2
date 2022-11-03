<template>
  <div v-if="patient">
    <br />
    <div>
      <img class="img" v-for="url in patient.imageUrl" :key="url" :src="url" />
    </div>
    <div class="box-class">
      <div class="patinfo">
        <h3>name: {{ patient.name }}</h3>
        <h3>surname: {{ patient.sur_name }}</h3>
        <h3>age: {{ patient.age }}</h3>
        <h3>hometown: {{ patient.hometown }}</h3>
      </div>
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
  text-align: center;
  float: left;
}
.img {
  align-content: center;
}
.left-nav {
  float: left;
  width: 88px;
  height: 88px;
  background-color: #fff;
  padding: 3px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  margin: 20px 50px 10px 50px;
  box-sizing: border-box;
  border-radius: 50%;
}
.left-nav img {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.img {
  width: 150px;
  height: 200px;
}
.box-class {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 600px;
  height: 200px;
  cursor: pointer;
  border: 3px solid #a6abb1;
  border-radius: 20px;
  margin: auto;
  text-align: center;
  background-position: absolute;
  background-size: 100% 100%;
}
</style>
