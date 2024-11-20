import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);

  const setUser = (userData) => {
    user.value = userData;
  };

  const clearUser = () => {
    user.value = null;
  };

  const isAuthenticated = computed(() => !!user.value);

  if (localStorage.getItem('user')) {
    setUser(JSON.parse(localStorage.getItem('user')));
  }

  return {
    user,
    setUser,
    clearUser,
    isAuthenticated,
  };
});
