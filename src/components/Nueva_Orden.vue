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
             <h2 > Nueva Orden </h2>   
            </v-card-title> 
            //content
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    
}
</script>