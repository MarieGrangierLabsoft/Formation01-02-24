<template>
    <div id="login-form">
        <form v-if="isLogged === false" v-on:submit.prevent="doLoggedIn">
            <h1>{{ title }}</h1>
            <p>Remplissez ce formulaire pour vous connecter.</p>
            <hr />
            <label for="email"><b>Email</b></label>
            <input type="text" v-model="email" placeholder="Entrez votre courriel" id="email" name="email" required />
            <label for="psw"><b>Mot de passe</b></label>
            <input type="password" v-model="password" placeholder="Entrez votre mot de passe" id="psw" name="psw"
                required />
            <p><button type="submit">Se connecter</button></p>
        </form>
    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    name: 'LoginForm',
    data() {
        return {
            password: "password",
            email: "VotreEmail@votreBoite.fr",
        }
    },

    props: {
        title: String
    },

    computed: {
        ...mapState(['isLogged'])
    },

    methods: {
        doLoggedIn() {
            this.$store.commit("changeLogg");       
        }
    },
}
</script>