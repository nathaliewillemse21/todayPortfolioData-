const app = Vue.createApp({

    data() {
        return {
            showSentence: true,
            name: 'Nathalie',
            sentence: ' is living her best life at',
            age: '21.'      
            
        }
    },
    methods: {
        toggleShowSentence() {
            this.showSentence = !this.showSentence
        },
        handleEvent(e) {
            console.log(e, e.type);

            if(number) {
                console.log(number);
            }
        },
        handleMouseMove(e) {
            
        }        // changeName() {
        //     this.name = "Heraldine";
        // },
        // changeSentence(sentence) {
        //     this.sentence = sentence;
        // }
    }

})

app.mount('#app');

