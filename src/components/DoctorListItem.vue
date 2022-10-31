<template>
  <router-link :to="{ name: 'DoctorDetail', params: { id: doctor.id } }">
    <div id="building">
      <!-- <div class="left-nav" @click="changeImage">
        <img v-for="url in doctor.imageUrl" :key="url" :src="url" />
      </div> -->
      <div class="doctor-card">
        <ul>
          <li>
            <div class="name">Name:{{ doctor.name }}</div>
            <div class="name">Surname:{{ doctor.sur_name }}</div>
          </li>
        </ul>
      </div>
      <br />
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'DoctorListItem',
  props: {
    doctor: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeImage() {
      this.$router.push({
        name: 'ChangeImage',
        params: { id: this.patient.id }
      })
    }
  }
}
</script>
<style scoped>
.name {
  color: green;
  font: bold;
  font-size: 20px;
}
.doctor-card {
  border-radius: 5px;
  padding: 20px;
  width: 450px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  background-color: lightcyan;
}

.doctor-card:hover {
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
</style>
