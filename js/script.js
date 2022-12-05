const { createApp } = Vue;

createApp({

    data(){
        return{
            apiUrl: 'server.php',
        }
    },
    mounted(){
        console.log('App MONTATA');
    }
}).mount('#app');