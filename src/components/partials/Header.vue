<script setup>

import { useUserStore } from '@/stores/user';
import { computed } from 'vue';
import useAuth from '../../composable/login';
const { logout } = useAuth();
const userStore = useUserStore();
const user = computed(() => userStore.user)

const googleLogin = () => {
  logout();
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <i class="fa fa-sign-out"></i>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Welcome, {{ user?.name }}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown" >
              <li><a class="dropdown-item" href="#" @click="googleLogin">Logout</a></li>
            </ul>
          </li>
        </ul> 
      </div>
    </div>
  </nav>
</template>