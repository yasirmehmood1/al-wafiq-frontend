<script>
    import { ref } from 'vue';
    import { usePerformanceTest } from '@/composable/usePerformanceTest';
    const { performanceScore, error, submitForm, loading } = usePerformanceTest();
    const url = ref('');
    const platform = ref('Desktop');
    const handleSubmit = () => {
        // submitForm(url.value, platform.value);
        console.log('called');
        
    };
</script>
<template>
    <div class="container mt-5 bg-white p-4">
        <h2 class="text-center my-4">Check Your Website Performance</h2>
        <form @submit.prevent="handleSubmit" class="shadow p-4 rounded">
            <div class="form-group mb-3">
                <label for="url" class="form-label">Website URL:</label>
                <input type="url" v-model="url" id="url" class="form-control" required 
                    placeholder="Enter the link here"/>
            </div>
            <div class="form-group mb-3">
                <label for="platform" class="form-label">Platform:</label>
                <select v-model="platform" id="platform" class="form-select" required>
                    <option value="Desktop">Desktop</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="loading">
                <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Test Performance
            </button>
        </form>

        <button @click="handleSubmit()">Called</button>
    </div>
</template>