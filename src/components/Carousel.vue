<template>
    <v-carousel height="400" hide-delimiter-background show-arrows="hover" class="br-8">
        <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">            
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                {
                    src: '../src/assets/swp1.89a51bc1.png',
                },
                {
                    src: '../src/assets/swp2.3345cbe7.png',
                },
            ],
        }
    },
}
</script>