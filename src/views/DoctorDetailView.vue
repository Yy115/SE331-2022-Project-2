<template>
  <div>
    <div id="center" v-if="isDoctor">
      <!-- <div class="left-nav" @click="changeImage">
        <img v-for="url in patient.imageUrl" :key="url" :src="url" />
      </div> -->
      <div class="doctor-detail">
        <ul>
          <li>
            <br />
            <div class="title">Name</div>
            <div class="value">{{ doctor.name }}</div>
            <br />
          </li>
          <li>
            <div class="title">SurName</div>
            <div class="value">{{ doctor.sur_name }}</div>
            <br />
          </li>
          <li>
            <div class="title">Age</div>
            <div class="value">{{ doctor.age }}</div>
            <br />
          </li>
          <li>
            <div class="title">Home Town</div>
            <div class="value">{{ doctor.hometown }}</div>
          </li>
        </ul>
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import AuthService from '@/services/AuthService.js'
export default {
  props: ['id', 'doctor'],
  inject: ['GStore'],
  methods: {
    changeImage() {
      this.$router.push({
        name: 'DoctorChangeImage',
        params: { id: this.doctor.id }
      })
    }
  },
  computed: {
    isDoctor() {
      return AuthService.hasRoles('ROLE_DOCTOR')
    }
  }
}
</script>
<style scoped>
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
.box-class {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 600px;
  height: 300px;
  cursor: pointer;
  border: 3px solid #a6abb1;
  border-radius: 20px;
  margin: auto;
  text-align: center;
  background-position: absolute;
  background-size: 100% 100%;
}
#center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.doctor-detail {
  border-radius: 5px;
  padding: 20px;
  width: 450px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  background-color: lightcyan;
  margin: 0, auto;
}

.doctor-detail:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
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
  text-align: center;
  text-align-last: center;
}
.title:before {
  position: absolute;
  left: 100%;
  content: '\FF1A';
}
.value {
  padding-left: 40%;
  color: green;
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
</style>
