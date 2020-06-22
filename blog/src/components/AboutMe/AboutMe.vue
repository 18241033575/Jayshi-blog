<template>
    <div id="me" class="com_style">
      <div class="content" v-html="aboutMeMsg">

      </div>
    </div>
</template>

<script>
  import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
    export default {
      name: "AboutMe",
      data() {
        return {
          aboutMeMsg: ''
        }
      },
      methods: {
        ...mapActions(['addAction','reduceAction']),
        ...mapMutations(['add', 'reduce'])
      },
      created() {
        this.addAction();
        this.$axios.get('/api/aboutme')
          .then(res => {
            if (res.data.code === 200) {
              this.aboutMeMsg = res.data.data[0].content;
            }
            this.reduceAction()
          })
      }
    }
</script>

<style scoped>

</style>
