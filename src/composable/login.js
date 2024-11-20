import { ref, onMounted } from 'vue';
import apiClient from '@/axios.js';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
export default function useAuth() {
 
  const user = ref(null);
  const router = useRouter();
  const loginWithGoogle = async () => {
    window.location.href = `${apiClient.defaults.baseURL}/auth/google`;
  };

  /* This function handles the authentication callback */
  const handleCallback = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const encryptedToken = urlParams.get('token');
    if (encryptedToken) {
      localStorage.setItem('authToken', encryptedToken);
      await fetchUser();
      router.push('/dashboard');  
    }
  };

  const fetchUser = async () => {
    const userStore = useUserStore();
    try {
      const response = await apiClient.get('/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`
        },
        withCredentials: true
      });
      localStorage.setItem('user', JSON.stringify(response.data));
      userStore.setUser(response.data);
      user.value = response.data;
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  onMounted(async() => {
    await handleCallback();
  });

  /* This function logs out the user */
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    userStore.clearUser();
    router.push('/login');
  };

  return {
    user,
    loginWithGoogle,
    handleCallback,
    fetchUser,
    logout,
  };
}
