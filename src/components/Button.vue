<template>
    <div class="d-flex justify-center align-baseline" style="gap: 1rem">
        <!-- <v-btn :loading="loading[1]" :disabled="loading[1]" color="#f6655a" @click="load(1)"> -->
        <v-btn color="#f6655a">
            <span style="color:#fff">立即借款</span>
            <router-view></router-view>
        </v-btn>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: [],
        }
    },
    methods: {
        load(i) {
            this.loading[i] = true
            setTimeout(() => (this.loading[i] = false), 3000)
        },
    },
}
</script>