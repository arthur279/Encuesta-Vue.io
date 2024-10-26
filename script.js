const inst = {
    data(){
        return{
        estado:true,
        mj: "Ta bueno",
        lenguajes: [],
        newLenguajes: "",
        anios:"",
        exp:"",
        resultado:""
        }
    },
    methods:{
        agregar(){
        this.lenguajes.push(this.newLenguajes);
        this.newLenguajes = "";
        },

        eliminar(i){
        this.lenguajes.pop(this.i);
        this.i - 1;
        },

        mostrarResultados(){
            
                this.resultado = `
                    Años programando: ${this.anios}
                    Experiencia: ${this.exp}
                    Lenguajes conocidos: ${this.lenguajes.join(', ')}
                `;
            }
            
        }
    }


const app = Vue.createApp(inst).mount('#componente')