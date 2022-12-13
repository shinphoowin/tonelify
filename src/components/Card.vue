<script setup>
import Button from './Button.vue'
</script>
<template>
    <v-card class="mx-auto">
        <v-card-item>
            <template v-slot:subtitle>
                最高借款额度 (元)
            </template>
        </v-card-item>

        <v-card-text class="py-0">
            <v-row align="center" no-gutters>
                <v-col class="text-h2" cols="10.5">
                    300000
                </v-col>
                <Button />
            </v-row>
        </v-card-text>

        <v-card-item>
            <template v-slot:subtitle>
                最低利率  0.02% (年化利率 0.73% )
            </template>
        </v-card-item>
    </v-card>
</template>