<template>
  <h1>Vaccination of {{ patient.name }} {{ patient.sur_name }}</h1>

  <h3 class="color">'{{ patient.vaccined_status }}'</h3>
  <center>
    <div class="dose1" v-if="patient.firstdose_name">
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
  <div v-if="isAdmin">
    <h3 class="color">You can update this patient's vaccine</h3>
    <span>Doctor:</span>
    <span v-if="patient.doctor" class="color">
      {{ patient.doctor.name }} {{ patient.doctor.sur_name }}
    </span>
    <span v-else>
      <input type="text" v-model="doctorid" />
      <button @click="updatedoctor">Confirm</button>
    </span>
    <center>
      <div class="dose4" v-if="!patient.firstdose_name">
        <b>First dose: </b>
        <br />
        <span>
          vaccine name: <input type="text" v-model="firstdose_name" />
        </span>
        <br />
        <span>
          vaccine time:
          <input type="text" v-model="firstdose_time" />
        </span>
        <br />
      </div>
      <br />
      <div class="dose4" v-if="!patient.seconddose_name">
        <b>Second dose: </b>
        <br />
        <span>
          vaccine name: <input type="text" v-model="seconddose_name" />
        </span>
        <br />
        <span>
          vaccine time:
          <input type="text" v-model="seconddose_time" />
        </span>
        <br />
      </div>
      <br />
      <div class="dose4" v-if="!patient.thirddose_name">
        <b>third dose: </b>
        <br />
        <span>
          vaccine name: <input type="text" v-model="thirddose_name" />
        </span>
        <br />
        <span>
          vaccine time:
          <input type="text" v-model="thirddose_time" />
        </span>
        <br />
      </div>
      <br />
      <div class="dose4">
        <b>vaccine status: </b>
        <br />
        <span>
          <BaseSelect :options="this.Status" v-model="vaccined_status" />
        </span>
        <br />
        <button @click="addvaccine">update</button>
      </div>
    </center>
  </div>
</template>

<script>
import PatientService from '@/services/PatientService.js'
import AuthService from '@/services/AuthService.js'
import BaseSelect from '@/components/BaseSelect.vue'
export default {
  props: ['id', 'patient'],
  inject: ['GStore'],
  components: {
    BaseSelect
  },
  data() {
    return {
      doctorid: '',
      Status: [
        { id: '1', name: 'Not Vaccinated' },
        { id: '2', name: 'FirstDose' },
        { id: '3', name: 'SecondDose' },
        { id: '4', name: 'ThirdDose' }
      ],
      vaccined_status: '',
      firstdose_name: '',
      firstdose_time: '',
      seconddose_name: '',
      seconddose_time: '',
      thirddose_name: '',
      thirddose_time: '',
      patient1: null
    }
  },
  methods: {
    updatedoctor() {
      if (this.doctorid == '') {
        alert('doctor id can not be empty')
        return
      }
      PatientService.addDoctor(this.GStore.patient.id, this.doctorid).then(
        (response) => {
          console.log(response)
          this.$router.go(0)
        }
      )
    },
    addvaccine() {
      if (this.vaccined_status == '') {
        alert('vaccined_status can not be empty')
        return
      }
      if (this.vaccined_status == 'FirstDose') {
        if (this.firstdose_name != '' && this.firstdose_time != '') {
          this.patient1 = this.patient
          this.patient1.vaccined_status = this.vaccined_status
          this.patient1.firstdose_name = this.firstdose_name
          this.patient1.firstdose_time = this.firstdose_time
        } else {
          alert('firstdose name and time can be empty')
          return
        }
      } else if (this.vaccined_status == 'SecondDose') {
        if (this.seconddose_name != '' && this.seconddose_time != '') {
          this.patient1 = this.patient
          this.patient1.vaccined_status = this.vaccined_status
          this.patient1.seconddose_name = this.seconddose_name
          this.patient1.seconddose_time = this.seconddose_time
        } else {
          alert('seconddose name and time can be empty')
          return
        }
      } else if (this.vaccined_status == 'ThirdDose') {
        if (this.thirddose_name != '' && this.thirddose_time != '') {
          this.patient1 = this.patient
          this.patient1.vaccined_status = this.vaccined_status
          this.patient1.thirddose_name = this.thirddose_name
          this.patient1.thirddose_time = this.thirddose_time
        } else {
          alert('seconddose name and time can be empty')
          return
        }
      }
      PatientService.addvaccine(this.patient1).then((response) => {
        console.log(response)
        this.$router.go(0)
      })
    }
  },
  computed: {
    isAdmin() {
      return AuthService.hasRoles('ROLE_ADMIN')
    }
  }
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
.dose4 {
  height: 150px;
  width: 300px;
  border: red 3px dashed;
  line-height: 25px;
  background-color: rgb(199, 180, 146);
}
.dose5 {
  height: 100px;
  width: 300px;
  border: red 3px dashed;
  line-height: 25px;
  background-color: rgb(199, 180, 146);
}
.color {
  color: aliceblue;
}
</style>
