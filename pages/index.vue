<template>
<div>
  <Navbar />
  <!-- <h1>Home Page</h1> -->
  <img  src="https://www.theladders.com/wp-content/uploads/to-do-list-190702.jpg" alt="">
</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  name: 'IndexPage',
  components: {
    Navbar
  }
}
</script>

<style scoped>
img{
  height: 540px;
  width: 100%;
   background-position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}


@media only screen and (min-width : 280px) {
  .cont{ width: 90% }
}

@media only screen and (min-width : 480px) {
  .cont{ width: 60% }
}

@media only screen and (min-width : 768px) {
  .cont{ width: 40% }
}

@media only screen and (min-width : 992px) {
  .cont{ width: 30% }
}

</style>
