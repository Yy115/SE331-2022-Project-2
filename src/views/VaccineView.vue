<template>
  <h1 class="aaa">Vaccination of some patients</h1>
  <h3 class="aaa">Data from one plus one group</h3>
  <br />
  <div class="patients" v-if="isAdmin">
    <VaccineItem
      v-for="patient in patients"
      :key="patient.id"
      :patient="patient"
    ></VaccineItem>

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'Vaccine', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page
      </router-link>
      <span style="color: aliceblue">{{ this.page }}</span>
      <router-link
        id="page-next"
        :to="{ name: 'Vaccine', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VaccineItem from '@/components/VaccineItem.vue'
import PersonService from '@/services/PatientService.js'
import AuthService from '@/services/AuthService.js'
export default {
  name: 'VaccineView',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    VaccineItem
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
<style>
.patients {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
  color: aqua;
}

.pagination a {
  flex: 1;
  text-decoration: none;
}

#page-prev {
  text-align: left;
  color: aliceblue;
}

#page-next {
  text-align: right;
  color: aliceblue;
}
</style>
