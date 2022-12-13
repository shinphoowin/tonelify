<script setup>
import ItemsGroup from '../components/ItemsGroup.vue';
</script>

<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="10" class="no-bg-color">
                <v-sheet>
                    <v-avatar color="#f6655a" class="eighty-h">
                        <v-icon icon="mdi-account-circle" style="font-size: 6em"></v-icon>
                    </v-avatar>
                </v-sheet>
            </v-col>
            <v-col class="no-bg-color">
                <v-sheet class="text-right">
                    <v-icon style="font-size: 3em" color="#fff">mdi-cogs</v-icon>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-card width="300px">
                    <v-card-text class="lh-0">账户余额 (元)</v-card-text>
                    <v-card-title class="text-xs-h6 text-md-h5 text-lg-h4">4000</v-card-title>
                </v-card>
            </v-col>
            <v-col>
                <v-card width="300px">
                    <v-card-text class="lh-0">最近借款 (元)</v-card-text>
                    <v-card-title class="text-xs-h6 text-md-h5 text-lg-h4">2000</v-card-title>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <ItemsGroup />
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <router-link to="/login">
                    <v-img :aspect-ratio="(16 / 9)" :width="800" src="../src/assets/mypng.60f6d326.png" cover
                        class="mb-8vh"></v-img>
                </router-link>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import {router} from "../routes"
export default {
    mounted() {
        if( localStorage.getItem('loginToken') == null){
            router.push('/');
        }
    }
}
</script>
