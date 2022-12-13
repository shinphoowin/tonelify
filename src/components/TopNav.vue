<template>
    <v-toolbar color="transparent">
        <router-link to="/register">
            <v-btn color="black" variant="text" class="mx-2">
                注册
            </v-btn>
        </router-link>

        <div v-if="!islogin">
            <v-btn color="black" variant="text" class="mx-2" @click="handleLogIn">
                login
            </v-btn>
        </div>
        <div v-else>
            <v-btn color="black" variant="text" class="mx-2" @click="handleLogout">
                logout
            </v-btn>
        </div>

        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-headset</v-icon>
        </v-btn>
        &nbsp;
        <v-btn icon>
            <v-icon>mdi-chat</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
import { router } from "../routes";

export default {
    data: () => ({
        islogin: false
    }),
    methods: {
        handleLogout() {
            if (localStorage.getItem('loginToken') !== null) {
                localStorage.removeItem('loginToken');
                this.islogin = false;
                router.push('/');
            } 
        },
        handleLogIn() {
            if (localStorage.getItem('loginToken') !== null) {
                this.islogin = true;                
            }else{
                this.islogin = false;
                router.push('/login')
            }
        }
    },
    mounted() {
        if (localStorage.getItem('loginToken') !== null) {
            this.islogin = true;
        }
    }
}
</script>
<style lang="">
    
</style>