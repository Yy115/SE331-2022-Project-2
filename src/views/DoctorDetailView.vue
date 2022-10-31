<template>
  <div>
    <div id="center">
      <!-- <div class="left-nav" @click="changeImage">
        <img v-for="url in doctor.imageUrl" :key="url" :src="url" />
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
export default {
  props: ['id', 'doctor'],
  methods: {
    changeImage() {
      this.$router.push({
        name: 'DoctorChangeImage',
        params: { id: this.doctor.id }
      })
    }
  }
}
</script>
<style scoped>
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
