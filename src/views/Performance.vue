<script setup>
import { ref } from 'vue';
import { usePerformanceTest } from '@/composable/usePerformanceTest'; 
const { performanceScore, error, submitForm, loading } = usePerformanceTest();
const url = ref('');
const platform = ref('Mobile');

const handleSubmit = () => {
  submitForm(url.value, platform.value);
};
</script>

<template>
  <div class="container mt-5 bg-white p-4">
    <h2 class="text-center my-4">Check Your Website Performance</h2>
    <form @submit.prevent="handleSubmit" class="p-4 rounded">
      <div class="form-group mb-3">
        <label for="url" class="form-label">Website URL:</label>
        <input type="url" v-model="url" id="url" class="form-control" required />
      </div>
      <div class="form-group mb-3">
        <label for="platform" class="form-label">Platform:</label>
        <select v-model="platform" id="platform" class="form-select" required>
          <option value="Mobile">Mobile</option>
          <option value="Desktop">Desktop</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" :disabled="loading">
        <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Test Performance
      </button>
    </form>
    
    <div v-if="performanceScore" class="mt-4">
      <h2 class="text-success">Performance Score: {{ performanceScore }}%</h2>
      <div class="progress mt-2">
        <div class="progress-bar" role="progressbar" :style="{ width: performanceScore + '%' }" :aria-valuenow="performanceScore" aria-valuemin="0"  aria-valuemax="100" >
          {{ performanceScore }}%
        </div>
      </div>
    </div>
    <div v-if="error" class="text-danger mt-2">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.btn {
  width: 100%;
}

.progress {
  height: 30px;
}

.progress-bar {
  background-color: #28a745; 
  color: white;
  text-align: center;
}
</style>
