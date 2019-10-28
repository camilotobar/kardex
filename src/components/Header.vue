<template>
    <div>
        <v-card outlined>
            <v-card-text>
                <v-content>
                    <v-row>
                        <v-col cols="6">
                          <v-select :items="items" label="Método de valoración" outlined v-model="metodo_escogido" @change="metodo_valoracion"></v-select>
                        </v-col>
                        <v-col cols="6">
                           <v-flex>
                               <Orden :orderFunction="orderFunction"/>
                           </v-flex>
                        </v-col>
                    </v-row>
                </v-content>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import Orden from './Nueva_Orden'
    export default {
        components:{ Orden },
        name: "Header",
        props: {
            orderFunction: Function,
        },
        data(){
            return {
                items:['Promedio ponderado','Primeros en entrar, primeros en salir'],
                metodo_escogido:''

            }
        },
        methods : {
            metodo_valoracion(){

                // eslint-disable-next-line no-console
                console.log(this.metodo_escogido)
            }
        }
    }

</script>

<style scoped>

</style>
