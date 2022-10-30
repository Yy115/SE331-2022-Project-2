import apiClient from '@/services/AxiosClient.js'

export default {
  getPatients(perPage, page) {
    return apiClient.get('/patients?_limit=' + perPage + '&_page=' + page)
  },
  getPatient(id) {
    return apiClient.get('/patient/' + id)
  }
}
