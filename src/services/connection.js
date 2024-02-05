export function doLoggedIn() {
    this.$store.commit("changeLogg");
    return this.$store.state.isLogged;    
}