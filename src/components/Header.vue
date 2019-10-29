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
                               <Orden :metodoActual="metodo_escogido" @newOrder="newOrder"/>
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
                metodo_escogido:'',
            }
        },
        methods : {
            metodo_valoracion(){

            },
            newOrder(order) {
                // eslint-disable-next-line no-console
                console.log(`In header: ${order.movimiento}`);
                this.$emit('newOrder', order);
            },
        }
    }

</script>

<style scoped>

</style>
