<template>
    <v-dialog max-width="600px" >
        <template v-slot:activator="{ on }">
            <v-btn
            color="red lighten-2"
            dark
            v-on="on"
            >
                Agregar Orden
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
             <h2> Nueva Orden </h2>   
            </v-card-title> 
            <v-form>
                <v-container >
                    <v-row justify="center">
                        <v-col cols="5" sm="6" md="3">
                            <p class="text-left">
                                Fecha :
                            </p>
                        </v-col>
                        <v-col cols="5" sm="6" md="3">
                            <v-text-field
                                label="Fecha"
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="5" sm="6" md="3">
                        <p class="text-left">
                            Unidades :
                        </p>
                        </v-col>
                        <v-col cols="5" sm="6" md="3">
                            <v-text-field
                                label="Unidades"
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="5" sm="6" md="3">
                            <p class="text-left">
                                Valor total :
                            </p>
                        </v-col>
                        <v-col cols="5" sm="6" md="3">
                            <v-text-field
                                label="Valor total"
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="5" sm="6" md="3">
                        <p class="text-left">
                            Método escogido :
                        </p>
                        </v-col>
                        <v-col cols="5" sm="6" md="3">
                            <p class="text-left">
                             <metodo_valoracion/>
                            </p>
                        </v-col>
                    </v-row>

                    <v-btn>Agregar</v-btn>

                </v-container>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
// import metodo_escogido from './Header'
export default {
    // components: {
    //     metodo_escogido
    // },
    name: "Nueva_Orden",
    data(){
            return {
                metodo_valoracion: ""
            
            };
        },
        methods:{
            updateMetodoValoracion(variable){
                this.metodo_valoracion=variable;
            }
        }
}
</script>