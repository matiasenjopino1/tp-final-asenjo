import { Producto } from "./productosClass"

const productos:Producto[] = [
    {
        id:1,
        titulo: 'Remera roja',
        precio: 500,
        descuento: 15,
        descripcion:'Remera roja marca Adidas talle L'
    },
    {
        id:2,
        titulo: 'Remera azul',
        precio: 700,
        descuento: 10,
        descripcion:'Remera azul marca Nike talle M'
    },
    {
        id:3,
        titulo: 'Remera verde',
        precio: 200,
        descuento:5,
        descripcion:'Remera verde marca Polo talle M'
    },
    {
        id:4,
        titulo: 'Remera violeta',
        precio: 1000,
        descuento: 20,
        descripcion:'Remera violeta marca King of the Kongo talle XL'
    },
    {
        id:5,
        titulo: 'Pantalon corto',
        precio: 1800,
        descuento: 0,
        descripcion:'Pantalon corto marca Puma talle 40'
    },
]

export default productos