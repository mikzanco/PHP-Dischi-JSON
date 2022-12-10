const { createApp } = Vue;

// creato l'app

createApp({

    data(){
        return{
            // la nostra apiUrl
            apiUrl: 'server.php',
            // array vuoto del disc
            disc: [],
            singleDisc:{},
            showDiscDetail: false
        }
    },
    methods:{
        getDisc(){
            // faccio una chiamata api con axios
            axios.get(this.apiUrl)
            .then(result => {
                console.log(result.data);
                // riprendo l'array vuoto e lo rendo uguale ai miei data presi dall'apiurl
                this.disc = result.data;
            })
        },
        getDiscDetail(index){
            const params = {
                discIndex: index
            }

            axios.get(this.apiUrl, { params })
                .then ( result => {
                    this.showDiscDetail = true;
                    this.singleDisc = result.data;
                })
        },
        
    },
    mounted(){
        this.getDisc();
    }
}).mount('#app');