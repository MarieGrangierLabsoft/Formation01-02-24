<template>
    <div id="search-film">
        <form>
            <label for="search">Rechercher :</label>
            <input id="search" type="text">
        </form>
        <ul class="films">
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
    name: 'SearchFilm',
    data() {
        return {
            films: [
                {
                    title: 'Titanic',
                    released: '19 Dec 1997',
                    director: 'James Cameron',
                    actors: 'Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates',

                    poster: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
                    plot: '84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the storyto her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and AnatolyMikailavich on the Keldysh about her life set in April 10th 1912, on a ship calledTitanic when young Rose boards the departing ship with the upper-class passengers and hermother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter andartist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets tothe ship in a game. And she explains the whole story from departure until the death ofTitanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.',
                    metascore: '75'
                },
                {
                    title: 'Blade Runner',
                    released: '25 Jun 1982',
                    director: 'Ridley Scott',
                    actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
                    poster: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
                    plot: 'A blade runner must pursue and terminate four replicants who stole a ship inspace, and have returned to Earth to find their creator.',
                    metascore: '89'
                },
                {
                    title: 'The Shining',
                    released: '13 Jun 1980',
                    director: 'Stanley Kubrick',
                    actors: 'Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers',

                    poster: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
                    plot: 'A family heads to an isolated hotel for the winter where an evil spiritualpresence influences the father into violence, while his psychic son sees horrificforebodings from both past and future.',
                    metascore: '63'
                }
            ]
        }

    },

    methods: {
        getScore(thisMetascore) {
            if (thisMetascore < 20) return "";
            else if (thisMetascore < 40) return "★";
            else if (thisMetascore < 60) return "★★";
            else if (thisMetascore < 80) return "★★★";
            else if (thisMetascore < 100) return "★★★★";
            else if (thisMetascore == 100) return "★★★★★";
        }
    }
}
</script>