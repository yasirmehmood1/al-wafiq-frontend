// src/composables/usePerformanceTest.js
import { ref } from 'vue';
import apiClient from '@/axios.js';
import { useHelper } from "./helper";

const { showLoading, hideLoading, } = useHelper();
export function usePerformanceTest() {
  const performanceScore = ref(null);
  const error = ref(null);
  const submitForm = async (url, platform) => {
    try {
        showLoading()
      const response = await apiClient.post('/test-performance', {
        url,
        platform,
      });
      performanceScore.value = response.data.performanceScore;
      error.value = null; 
      hideLoading()
    } catch (err) {
      performanceScore.value = null; 
      hideLoading()
      error.value = err.response?.data?.error || 'An error occurred';
    }
  };

  return {
    performanceScore,
    error,
    submitForm,
  };
}
