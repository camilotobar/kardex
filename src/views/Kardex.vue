<template>
    <div>
        <v-btn @click="listenButton">total</v-btn>
    </div>
</template>

<script>
    export default {
        name: "Kardex",
        data() {
            return {
                total: 0
            };
        },
        methods: {
            listenButton() {

            },
        }
    }
</script>

<style scoped>

</style>
