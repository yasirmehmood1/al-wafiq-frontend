<script setup>
import Header from '@/components/partials/Header.vue';
import { RouterView } from 'vue-router'
</script>
<template>
    <Header />
    <div class="container">
        <RouterView />
    </div>
</template>