<template>
  <div class="row dash-cont">
    <div class="col text-center">
      <h1 class="site-name">ALPINE</h1>
      <i class="fas fa-mountain fa-10x" style="margin-bottom: 1vh;"></i>
    </div>
    <div class="col text-center" v-if="user.departments.length > 0">
      <div v-for="(department, index) in user.departments" :key="index">
        <a :href="department.slug" class="btn btn-outline-dark dept-button"><i :class="department.icon"></i> {{ department.name }}</a>
      </div>
    </div>

    <div class="col text-center" v-else>
      <h4>NO DEPARTMENTS SET FOR THIS USER</h4>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState('auth', ['loggedIn', 'user'])
    },
    name: 'Dashboard',
    middleware: 'auth'
  }
</script>

<style>
  body {
    margin: 0;
  }

  .text-center {
    text-align: center;
  }

  .dash-cont {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .site-name {
    font-family: 'Exo', sans-serif;
    font-size: 10vw;
  }

  .dept-button {
    width: 90%;
    margin-bottom: 0.5vh;
  }
</style>