<template>
    <v-app>
        <v-container>
            <v-btn @click="showDialog">Cliquez-moi</v-btn>
            <v-dialog v-model="dialog" max-width="600">
                <v-card>
                    <v-card-title>Dialogue Vuetify</v-card-title>
                    <v-card-text>
                        Contenu du dialogue Vuetify.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="dialog = false">Fermer</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </v-app>
</template>
    
<script>
export default {
    data() {
        return {
            dialog: false,
        };
    },
    methods: {
        showDialog() {
            this.dialog = true;
        },
    },
};
</script>