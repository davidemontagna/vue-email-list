/*
Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.*/

let app = new Vue({
    el: '#app',
    data: {
        address: [],
    },

    methods: {
        createList: function(){
            for(i=0; i < 10; i++){

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    
                    //console.log(response.data.response);
                    this.address.push(response.data.response);
                })
                .catch((error) => {
                    console.log(error);
                })
            }
            

        }
    }, 
    

})