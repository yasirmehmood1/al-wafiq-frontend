import { useLoading } from 'vue-loading-overlay'
export const useHelper = () => {
    const $loading = useLoading();
    
    var loader = null;
    const showLoading = async (container = null, modal = false) => {
        if (!loader) {
            loader = $loading.show({
                container: container,
                color: '#0d6efd',
            });
          
        }
    }
    const hideLoading = async () => {
        if (loader) {
            await loader.hide();
            loader = null; 
        }  
    }

    return {
        showLoading,
        hideLoading

    }


}