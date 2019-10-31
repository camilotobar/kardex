<template>
    <v-dialog max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn color="red lighten-2" dark v-on="on">Agregar Orden</v-btn>
        </template>

        <v-card align="center" outlined>
            <v-card-title style="background-color: #a4caeb">
                <h2> Nueva Orden de {{ metodoActual }}</h2>
            </v-card-title>
            <v-form>
                <v-container fluid>
                    <v-row justify="center">
                        <v-col cols="6" md="3" sm="6" align="left">
                            <p class="text-left">Concepto:</p>
                            <v-text-field label="Concepto" v-model="concepto" outlined></v-text-field>
                        </v-col>
                        <v-col cols="6" md="3" sm="6">
                            <p class="text-left">Fecha:</p>
                            <v-text-field label="Fecha" hint="Formato DD/MM/YYYY" v-model="fecha" outlined></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="6" md="3" sm="6">
                            <p class="text-left">Unidades:</p>
                            <v-text-field label="Unidades" type="number" v-model="unidades" outlined ></v-text-field>
                        </v-col>
                        <v-col cols="6" md="3" sm="6">
                            <p class="text-left">Valor Unitario:</p>
                            <v-text-field label="Valor Unitario" type="number" v-model="valorUnitario" v-show="esCompra==true"   outlined ></v-text-field>
                            <v-text-field label="Valor Unitario" type="number" v-model="valorUnitario" v-show="esCompra==false" disabled   outlined ></v-text-field>

                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="6" md="3" sm="6">
                            <p class="text-left">Tipo de movimiento:</p>
                            <v-select :items="movimientos" v-model="movimiento" outlined  @change="habilitarVU()"></v-select>
                        </v-col>
                        <v-col cols="6" md="3" sm="6">
                            <v-btn @click="addOrder">Agregar Orden</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props: {
            metodoActual: String,
        },
        data() {
          return {
              movimientos: [ 'Compra', 'Venta' ],
              concepto: '',
              movimiento: 'Compra',
              fecha: '',
              unidades: 0,
              valorUnitario: 0,
              esCompra:true
          };
        },
        methods: {
            addOrder() {

                if(this.movimiento==='Compra' && (this.unidades <= 0 || this.valorUnitario <= 0)) {
                    alert('Hey!\nUnidades y Valor Unitario deben ser mayores a 0.');
                    return;
                }
                if(this.movimiento==='Venta' && this.unidades <= 0){
                    alert('Hey!\nLas unidades deben ser mayores a 0.');
                    return;
                }
                if(this.concepto.length === 0) {
                    alert('Hey!\nEl concepto de la nueva orden es obligatorio.');
                    return;
                }

                this.$emit('newOrder',
                    {
                        movimiento: this.movimiento,
                        concepto: this.concepto,
                        fecha: this.fecha,
                        unidades: (this.unidades * 1),
                        valorUnitario: (this.valorUnitario * 1),
                        valorTotal: (this.valorUnitario * this.unidades),
                        metodoValoracion: this.metodoActual,
                    });
            },
             habilitarVU(){

                // eslint-disable-next-line no-console
                console.log(this.esCompra)

                // eslint-disable-next-line no-console
                console.log(this.movimiento)

                if(this.movimiento == 'Venta'){
                    this.esCompra=false;
                }else{
                   this.esCompra=true;
                }
            }


        }
    }
</script>
