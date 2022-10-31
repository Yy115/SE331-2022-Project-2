<template>
  <h3>Doctor Comment</h3>
  <CommentList v-if="comments.length" :comments="comments"></CommentList>
  <div v-if="isDoctor">
    <div class="value">
      <span>Doctor id:</span>
      <span>
        <input class="input_class" type="text" v-model="doctorid" />
      </span>
    </div>
    <br />
    <CommentForm @comment-submitted="addComment"></CommentForm>
  </div>
</template>
<script>
import CommentForm from '@/components/CommentForm.vue'
import CommentList from '@/components/CommentList.vue'
import CommentService from '@/services/CommentService.js'
import AuthService from '@/services/AuthService.js'
export default {
  inject: ['GStore'],
  components: {
    CommentForm,
    CommentList
  },
  data() {
    return {
      comments: [],
      doctorid: ''
    }
  },
  created: function () {
    CommentService.getCommentByPatient(this.GStore.patient.id).then(
      (response) => {
        this.comments = response.data
      }
    )
  },
  methods: {
    addComment(comment) {
      console.log(comment)
      if (this.doctorid == '') {
        alert('Doctor is incomplete. Please select your name.')
        return
      }
      CommentService.addComment(
        comment,
        this.doctorid,
        this.GStore.patient.id
      ).then((response) => {
        console.log(response)
        // this.$router.push({ name: 'Layout', params: { id: this.patient.id } })
        this.$router.go(0)
      })
      this.GStore.flashMessage = 'Your comment has been added'
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
      //      this.$router.go(0)
    }
  },
  computed: {
    isDoctor() {
      return AuthService.hasRoles('ROLE_DOCTOR')
    }
  }
}
</script>
<style>
.input_class {
  height: 50px;
  width: 200px;
  border: red 3px dashed;
  line-height: 25px;
  background-color: moccasin;
}
</style>
