<template>
    <div>
        <button @click="fetchData">Fetch Data</button>
        <div v-if="data">
            <h2>{{ data.title }}</h2>
            <p>{{ data.body }}</p>
        </div>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            data: null,
        };
    },
    methods: {
        fetchData() {
            // Utilisation d'Axios pour effectuer une requête GET
            this.$axios.get('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => {
                    this.data = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
};
</script>