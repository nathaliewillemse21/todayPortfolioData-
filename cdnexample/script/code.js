const {createApp} = Vue 
createApp({
    data() {
        return {
            firstName: 'Joel',
            greeting: 'Hello',
            currYear: new Date(),
            yourInput: ('')
        }
    }
        
}).mount('#app')