<template>
    <div id="login-form">
        <form v-if="loggedIn === false" v-on:submit.prevent="doLoggedIn">
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
        <ul class="films" v-else>
            <li class="film card" v-for="(thisFilm, index) in films" :key="index">

                <img class="poster" :src=thisFilm.poster />
                <p class="title">
                    {{ thisFilm.title }}
                    <span class="rating">{{ getScore(thisFilm.metascore) }}</span>
                </p>
                <dl>
                    <dt>Release date</dt>
                    <dd>{{ thisFilm.released }}</dd>
                    <dt>Director</dt>
                    <dd>{{ thisFilm.director }}</dd>
                    <dt>Actors</dt>
                    <dd>{{ thisFilm.actors }}</dd>
                </dl>
                <p class="plot">
                    {{ thisFilm.plot }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            password: "password",
            email: "VotreEmail@votreBoite.fr",
            loggedIn: false,
        }

    },

    props: {
        title: String,
    },

    methods: {
        doLoggedIn() {
            this.loggedIn = true;
        }
    }
}
</script>