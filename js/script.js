const { createApp } = Vue;

// creato l'app

createApp({

    data(){
        return{
            // la nostra apiUrl
            apiUrl: 'server.php',
            // array vuoto del disc
            disc: [],
        }
    },
    methods:{
        getDisc(){
            // faccio una chiamata axios
            axios.get(this.apiUrl)
            .then(result => {
                console.log(result.data);
                // riprendo l'array vuoto e lo rendo uguale ai miei data presi dall'apiurl
                this.disc = result.data;
            })
        }
    },
    mounted(){
        this.getDisc();
    }
}).mount('#app');