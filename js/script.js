const { createApp } = Vue;

createApp({

    data(){
        return{
            apiUrl: 'server.php',
            disc: [],
        }
    },
    methods:{
        getDisc(){
            axios.get(this.apiUrl)
            .then(result => {
                console.log(result.data);
                this.disc = result.data;
            })
        }
    },
    mounted(){
        this.getDisc();
    }
}).mount('#app');