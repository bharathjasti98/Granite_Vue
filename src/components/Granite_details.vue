<template>

    <div class="Granite1">
        <div v-for="granite in values" :key="granite._id">
            <granite_data :value="granite"></granite_data>
        </div>
    </div>
</template>

<script>

import granite_data from './granite_data.vue';
export default {
    name: 'granite_details',
    props: {
        values: Array
    },
    components: {
        granite_data
    }
}

</script>

<style scoped>
.Granite1 {
    text-align: left;
    font-size: x-large;
    font-weight: bolder;
    width: 100%;
}

* {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
}
</style>