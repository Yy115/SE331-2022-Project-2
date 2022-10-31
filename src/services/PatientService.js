import apiClient from '@/services/AxiosClient.js'

export default {
  getPatients(perPage, page) {
    return apiClient.get('/patients?_limit=' + perPage + '&_page=' + page)
  },
  getPatient(id) {
    return apiClient.get('/patient/' + id)
  },
  getPeopleByDoctor(did, perPage, page) {
    return apiClient.get(
      '/patientsbydoctor?_limit=' +
        perPage +
        '&_page=' +
        page +
        '&doctorid=' +
        did
    )
  },
  updateFile(file) {
    let formDate = new FormData()
    formDate.append('file', file)
    return apiClient.post('/uploadFile', formDate, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  addDoctor(pid, did) {
    return apiClient.post('/patientadddoctor?pid=' + pid + '&did=' + did)
  },
  addvaccine(patient) {
    return apiClient.post('/patient', patient)
  }
}
