<template>
  <div class="comment-form">
    <h3>Leave your comment</h3>
    <textarea id="comment" v-model="comment" placeholder="Leave a comment">
commit</textarea
    >
    <br />
    <button class="button" @click="onSubmit">Submit</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.comment === '') {
        alert('Comment is incomplete. Please fill out every field.')
        return
      }
      let doctorcomment = {
        comment: this.comment
      }
      this.$emit('comment-submitted', doctorcomment)
      this.comment = ''
    }
  }
}
</script>
<style scoped>
#comment {
  padding-left: 10px;
  resize: none;
  overflow: auto;
  height: 150px;
  width: 300px;
  background: 'red';
  border-radius: 15px;
  height: 100px;
  width: 300px;
  border: red 3px dashed;
  line-height: 25px;
  background-color: moccasin;
}
.button {
  font-size: 12px;
  padding: 2px;
  width: 100px;
  height: 30px;
  border-width: 0px;
  border-radius: 3px;
  background: #cd3737;
  cursor: pointer;
  outline: none;
  font-family: Microsoft YaHei;
  color: white;
  font-size: 17px;
}
.button:hover {
  background: #ccd4e0;
}
</style>
