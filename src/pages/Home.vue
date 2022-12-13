<script setup>
import Card from '../components/Card.vue';
import CardItems from '../components/CardItems.vue';
import Carousel from '../components/Carousel.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <v-toolbar-title class="grey--text text--darken-4">
        让信用不负期待
    </v-toolbar-title>
    <br/>
    <Card />
    <br />
    <v-card class="mx-auto">
        <v-card-text class="py-0">
            <v-row align="center" no-gutters>
                <template v-slot:subtitle>
                    Maximum loan amount (yuan)
                </template>
                <Button />
            </v-row>
        </v-card-text>

        <v-card-item>
            <template v-slot:subtitle>
                Minimum interest rate 0.02% (annualized interest rate 0.73% )
            </template>
        </v-card-item>
    </v-card>
    <br />

    <v-row>
        <v-col md="12">
            <CardItems />
        </v-col>
    </v-row>

    <v-row>
        <v-col md="12">
            <h3>快速入门</h3><br />
            <v-tabs fixed-tabs bg-color="indigo-darken-2" class="br-8">

                <v-tab>
                    <!-- <router-link to="/login"> -->
                    征信知识
                    <!-- </router-link> -->
                </v-tab>
                <v-tab>
                    <!-- <router-link to="/login"> -->
                    热门话题
                    <!-- </router-link> -->
                </v-tab>

                <v-tab>
                    <!-- <router-link to="/login"> -->
                    贷款帮帮
                    <!-- </router-link> -->
                </v-tab>

                <v-tab>
                    <!-- <router-link to="/login"> -->
                    使用帮助
                    <!-- </router-link> -->
                </v-tab>
            </v-tabs>

        </v-col>
    </v-row>

    <v-row>
        <v-col md="12">
            <Carousel />
        </v-col>
    </v-row>

    <v-row>
        <v-col md="12">
            <h3>新手指南</h3>
            <div class="shadeTitle">招联好期贷新手使用指南</div>
            <Footer />
        </v-col>
    </v-row>
</template>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
<!-- passing props in vue components
using form validation
best way to setup api in vue app -->