<template>
  <div>
    <!-- <table id="table-id">
      <thead>
        <tr>
          <th>Patient ID</th>
          <th>name</th>
          <th>Vaccine Status</th>
          <th>First Dose</th>
          <th>Time</th>
          <th>Second Dose</th>
          <th>Time</th>
          <th>Third Dose</th>
          <th>Time</th>
          <th>Confirm</th>
        </tr>
      </thead>
      <br />
      <tbody>
        <tr>
          <td>{{ patient.id }}</td>
          <td>{{ patient.name }} {{ patient.sur_name }}</td>
          <td>{{ patient.vaccind_status }}</td>
          <td>{{ patient.firstdose_name }}</td>
          <td>{{ patient.firstdose_time }}</td>
          <td>{{ patient.seconddose_name }}</td>
          <td>{{ patient.seconddose_time }}</td>
          <td>{{ patient.thirddose_name }}</td>
          <td>{{ patient.thirddose_time }}</td>
          <td>
            <router-link
              :to="{
                name: 'PatientVaccine',
                params: { id: patient.id }
              }"
              >Confirm</router-link
            >
          </td>
        </tr>
      </tbody>
    </table> -->
    <table class="table">
      <center>
        <thead class="thead">
          <tr>
            <th>Patient ID</th>
            <th>patient name</th>
            <th>Vaccine Status</th>
            <th>First Dose</th>
            <th>First Dose Time</th>
            <th>Second Dose</th>
            <th>Second Dose Time</th>
            <th>Third Dose</th>
            <th>Third Dose Time</th>
            <th>Confirm</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr>
            <th>{{ patient.id }}</th>
            <th>{{ patient.name }} {{ patient.sur_name }}</th>
            <th>{{ patient.vaccined_status }}</th>
            <th v-if="patient.firstdose_name">{{ patient.firstdose_name }}</th>
            <th v-else>/</th>
            <th v-if="patient.firstdose_time">
              {{ patient.firstdose_time }}
            </th>
            <th v-else>/</th>
            <th v-if="patient.seconddose_name">
              {{ patient.seconddose_name }}
            </th>
            <th v-else>/</th>
            <th v-if="patient.seconddose_time">
              {{ patient.seconddose_time }}
            </th>
            <th v-else>/</th>
            <th v-if="patient.thirddose_name">
              {{ patient.thirddose_name }}
            </th>
            <th v-else>/</th>
            <th v-if="patient.thirddose_time">
              {{ patient.thirddose_time }}
            </th>
            <th v-else>/</th>
            <th>
              <router-link
                :to="{
                  name: 'PatientVaccine',
                  params: { id: patient.id }
                }"
                >Confirm</router-link
              >
            </th>
          </tr>
        </tbody>
        <br />
      </center>
    </table>
  </div>
</template>
<script>
// import UserService from '@/services/UserService.js'
export default {
  name: 'UserItem',
  props: {
    patient: {
      type: Object,
      required: true
    }
  },
  methods: {
    //   Update1() {
    //     if (this.num == '') {
    //       alert('the role of the user can not be null')
    //       return
    //     }
    //     console.log(this.user.id, this.num)
    //     UserService.updaterole(this.user.id, this.num).then((response) => {
    //       this.users = response.data
    //       this.$router.go(0)
    //     })
    //     this.GStore.flashMessage = 'You are successfully set the role of the user'
    //     setTimeout(() => {
    //       this.GStore.flashMessage = ''
    //     }, 3000).catch(() => {
    //       ;({ name: 'NetworkError' })
    //     })
    //   }
  }
}
</script>
<style scoped>
.name {
  color: green;
  font: bold;
  font-size: 20px;
}
.color {
  color: cadetblue;
}
.mytable {
  margin: 0, auto;
  display: flex;
  text-align: center;
}
.id_center {
  padding-left: 150px;
}
.status {
  color: darkseagreen;
}
.list-item {
  /* border: 3px double #39495c; */
  text-align: left;
  float: right;
  position: absolute;
  width: 300px;
  margin: 10px 0 0 190px;
}
.left-nav {
  float: left;
  width: 66px;
  height: 66px;
  background-color: #fff;
  padding: 3px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  margin: 20px 0 10px 100px;
  box-sizing: border-box;
  border-radius: 50%;
}
.left-nav img {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.right-nav {
  float: right;
}
body {
  overflow: auto;
}
* {
  margin: 0;
  padding: 0;
}
li {
  position: relative;
  list-style-type: none;
}
.title {
  position: absolute;
  width: 35%;
  text-align: justify;
  text-align-last: justify;
}
.title:before {
  position: absolute;
  left: 100%;
  content: '\FF1A';
}
.value {
  padding-left: 40%;
}
.name {
  color: green;
  font: bold;
  font-size: 20px;
  padding-bottom: 0px;
  padding-top: 15px;
}
.status {
  padding-bottom: 8px;
}

.table {
  width: 100%;
}

.thead {
  background-color: deepskyblue;
}

.tbody {
  background-color: rgb(208, 225, 247);
}
</style>
