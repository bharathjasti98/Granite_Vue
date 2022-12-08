<template>

    <div>
        <div class="granite2">
            <div class="granite3">
                <p>Granite Name: {{ value.Granite_name }} </p>
                <p>Location : {{ value.Location }} </p>
                <p>Country: {{ value.country }} </p>
                <p>Color: {{ value.color }} </p>
                <p>Category: {{ value.category }} </p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'granite_data',
    props: {
        value: Object
    }
}
</script>

<style scoped>
.granite2 {
    display: inline-flex;
    font-style: italic;
    font-size: large;
    margin-top: 10px;
    margin: 20px;
}

.granite3 {
    padding: 5px;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtNPc968HBETC_VYWvU8G1M3Wh-IxcGK8CQaCVGQtMPj5-9kVUznYmSze1QDTenho3T0&usqp=CAU');
    width: 300px;
}
</style>