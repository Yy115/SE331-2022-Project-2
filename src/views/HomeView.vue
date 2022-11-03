<template>
  <h1 class="aaa">Vaccination of some patients</h1>
  <h3 class="aaa">Data from one plus one group</h3>
  <div class="patients" v-if="isAdmin">
    <PatientCard
      v-for="patient in patients"
      :key="patient.id"
      :patient="patient"
    ></PatientCard>

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'Home', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page
      </router-link>
      <span style="color: aliceblue">{{ this.page }}</span>
      <router-link
        id="page-next"
        :to="{ name: 'Home', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page
      </router-link>
    </div>
  </div>
  <div v-else-if="isPatient">
    <h4>Go to your own page</h4>
    <router-link
      :to="{ name: 'PatientDetail', params: { id: GStore.currentUser.id } }"
      >Jump</router-link
    >
  </div>
  <div v-else-if="isDoctor">
    <h4>Go to your own page</h4>
    <router-link
      :to="{ name: 'DoctorDetail', params: { id: GStore.currentUser.id } }"
      >Jump</router-link
    >
  </div>
</template>

<script>
// @ is an alias to /src
import PatientCard from '@/components/PatientCard.vue'
import PersonService from '@/services/PatientService.js'
import AuthService from '@/services/AuthService.js'
export default {
  name: 'HomeView',
  inject: ['GStore'],
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    PatientCard
  },
  data() {
    return {
      patients: null,
      totalpatients: 0
    }
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalpatients / 4)
      return this.page < totalPages
    },
    isAdmin() {
      return AuthService.hasRoles('ROLE_ADMIN')
    },
    isPatient() {
      return AuthService.hasRoles('ROLE_PATIENT')
    },
    isDoctor() {
      return AuthService.hasRoles('ROLE_DOCTOR')
    }
  },
  // eslint-disable-next-line
  beforeRouteEnter(routeTo, routeFrom, next) {
    PersonService.getPatients(4, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.patients = response.data
          comp.totalpatients = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    PersonService.getPatients(4, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.patients = response.data
        this.totalPatients = response.headers['x-total-count']
        next()
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  }
}
</script>
<style scoped>
.patients {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
}
.pagination:hover {
  color: yellow;
}

#page-prev {
  text-align: left;
  color: aliceblue;
}
#page-prev：hover {
  color: yellow;
}

#page-next {
  text-align: right;
  color: aliceblue;
}
#page-next：hover {
  color: yellow;
}
</style>
