export class Ticket{
    numero: number | undefined ;
    vehiculo: string = ''; 
    hora_llegada: Date = new Date();
    hora_salida: Date = new Date();
    tiempo_estadia: number = 0.0;
    costototal: number = 0.0;
    estado: string = 'Activo';
}