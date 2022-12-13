<template>
    <v-app>
        <v-bottom-navigation>
            <router-link to="/">
                <v-btn value="home" class="bottomnav">
                    <v-icon>mdi-home</v-icon>
                    首页
                </v-btn>
            </router-link>

            <router-link to="/login">
                <v-btn value="bill" class="bottomnav">
                    <v-icon>mdi-heart</v-icon>
                    账单
                </v-btn>
            </router-link>

            <router-link to="/login">
                <v-btn value="customer-support" class="bottomnav">
                    <v-icon>mdi-headset</v-icon>
                    客服
                </v-btn>
            </router-link>


            <v-btn value="account" class="bottomnav">
                <v-icon>mdi-account</v-icon>
                我的
            </v-btn>

        </v-bottom-navigation>
    </v-app>
</template>