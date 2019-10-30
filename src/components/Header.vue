<template>
    <div>
        <h1>Kardex</h1>
        <v-card outlined>
            <v-card-text>
                <v-content>
                    <v-row>
                        <v-col cols="6">
                          <v-select :items="items" label="Método de valoración" outlined v-model="metodoEscogido" @change="metodo_valoracion"></v-select>
                        </v-col>
                        <v-col cols="6">
                           <v-flex>
                               <Orden :metodoActual="metodoEscogido" @newOrder="newOrder"/>
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

        },
        data(){
            return {
                items:['Promedio ponderado','PEPS'],
                metodoEscogido: 'PEPS',
            }
        },
        methods : {
            metodo_valoracion(){

            },
            newOrder(order) {
                this.$emit('newOrder', order);
            },
        }
    }

</script>

<style scoped>

</style>
