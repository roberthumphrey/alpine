<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="/">Alpine</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Departments</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Los Santos Police Department</a>
            <a class="dropdown-item" href="#">San Andreas Highway Patrol</a>
            <a class="dropdown-item" href="#">Blaine County Sheriff's Office</a>
            <a class="dropdown-item" href="#">Los Santos Fire Department</a>
            <a class="dropdown-item" href="#">San Andreas Communications Department</a>
            <a class="dropdown-item" href="#">Civilian Operations</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Media</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Resources</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Gallery</a>
            <a class="dropdown-item" href="#">FAQ</a>
            <a class="dropdown-item" href="#">Community Requirements</a>
            <a class="dropdown-item" href="#">Rules and Regulations</a>
            <a class="dropdown-item" href="#">Staff</a>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav" v-if="!loggedIn">
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Register</a>
        </li>
      </ul>
      <ul class="navbar-nav" v-else>
        <li class="nav-item">
          <a class="nav-link" href="/dashboard">Dashboard</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ user.username }}</a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Settings</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" @click="logout">Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('auth', ['loggedIn', 'user'])
  },
  name: 'Nav',
  methods: {
    logout() {
      this.$auth.logout();
      // this.$router.push('/login');
    }
  }
}
</script>

<style>

</style>
