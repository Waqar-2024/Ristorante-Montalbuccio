import { Injectable } from '@angular/core';
import { Food } from '../food';
import { Tag } from '../tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  // return single food item base of id 
  getFoodById(id:number):Food{
  return this.getAll().find(food =>
    food.id == id
  )!
  }

  // this function return all the food items with detail
  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Nduja & Coppa Pizza',
        cookTime: '10-20',
        price: 14.00,
        favourite: false,
        origins: ['italy'],
        stars: 5,
        imageUrl: '/assets/pizzeria/Nduja_1.jpg',
        tags: ['Pizzeria']
      },
      {
        id: 2,
        name: 'Cold Cuts and Cheese Platter',
        cookTime: '10-20',
        price: 14.00,
        favourite: false,
        origins: ['italy'],
        stars: 5,
        imageUrl: '/assets/Appetizers/Cold_Cuts1.jpg',
        tags: ['Appetizers']
      },
      {
        id: 3,
        name: 'Mixed Fried Food',
        cookTime: '10-20',
        price: 10.00,
        favourite: false,
        origins: ['italy'],
        stars: 5,
        imageUrl: '/assets/Appetizers/Mixfry2.jpg',
        tags: ['Appetizers',]
      },
      {
        id: 4,
        name: 'Crostini and Bruschetta Fantasy',
        cookTime: '10-20',
        price: 7.50,
        favourite: false,
        origins: ['italy'],
        stars: 5,
        imageUrl: '/assets/img2.jpg',
        tags: ['Appetizers']
      },
      {
        id: 5,
        name: 'Sea Quartet',
        cookTime: '10-20',
        price: 20.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img3.jpg',
        tags: ['Seafood']
      },
      {
        id: 6,
        name: 'Prawns in brandy',
        cookTime: '10-20',
        price: 12.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img3.jpg',
        tags: ['Seafood']
      },
      {
        id: 7,
        name: 'Bruschetta fantasy of the sea',
        cookTime: '10-20',
        price: 10.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img3.jpg',
        tags: ['Seafood']
      },
      {
        id: 8,
        name: 'Risotto',
        cookTime: '10-20',
        price: 11.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img4.jpg',
        tags: ['Fisrt Courses']
      },
      {
        id: 9,
        name: 'Pappardelle',
        cookTime: '10-20',
        price: 11.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img4.jpg',
        tags: ['Fisrt Courses']
      },
      {
        id: 10,
        name: 'Pappardelle',
        cookTime: '10-20',
        price: 11.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img4.jpg',
        tags: ['Fisrt Courses']
      },
      {
        id: 11,
        name: 'Tagliatelle',
        cookTime: '10-20',
        price: 12.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img5.webp',
        tags: ['Fisrt Courses']
      },
      {
        id: 12,
        name: 'Maccheroncini',
        cookTime: '10-20',
        price: 10.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img5.webp',
        tags: ['Fisrt Courses']
      },
      {
        id: 13,
        name: 'Agnolotti',
        cookTime: '10-20',
        price: 12.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img5.webp',
        tags: ['Fisrt Courses']
      },
      {
        id: 14,
        name: 'Fregola with seafood',
        cookTime: '10-20',
        price: 14.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img5.webp',
        tags: ['Fisrt Courses']
      },
      {
        id: 15,
        name: 'Calamarata',
        cookTime: '10-20',
        price: 13.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img5.webp',
        tags: ['Fisrt Courses']
      },
      {
        id: 16,
        name: 'Garlic linguine',
        cookTime: '10-20',
        price: 13.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img5.webp',
        tags: ['Fisrt Courses']
      },
      {
        id: 17,
        name: 'Salsiccia e Costoleccio al forno',
        cookTime: '10-20',
        price: 10.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img5.webp',
        tags: ['Second Courses']
      },
      {
        id: 18,
        name: 'Porchetta Burger',
        cookTime: '10-20',
        price: 15.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img5.webp',
        tags: ['Second Courses']
      },
      {
        id: 19,
        name: 'Cotoletta di Lingua',
        cookTime: '10-20',
        price: 15.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img5.webp',
        tags: ['Second Courses']
      },
      {
        id: 20,
        name: 'Tagliata di Manzo alla Antica',
        cookTime: '10-20',
        price: 18.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img5.webp',
        tags: ['Second Courses']
      },
      {
        id: 21,
        name: 'Montalburger king',
        cookTime: '10-20',
        price: 15.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img5.webp',
        tags: ['Second Courses']
      },
      {
        id: 22,
        name: 'Galletto arrosto',
        cookTime: '10-20',
        price: 18.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img5.webp',
        tags: ['Second Courses']
      },
      {
        id: 23,
        name: 'Bocconcini di baccalà fritto con crema di ceci',
        cookTime: '10-20',
        price: 14.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img5.webp',
        tags: ['Second Courses','Seafood']
      },
      {
        id: 24,
        name: 'Octopus-Burger',
        cookTime: '10-20',
        price: 16.00,
        favourite: true,
        origins: ['italy'],
        stars: 4,
        imageUrl: '/assets/img5.webp',
        tags: ['Second Courses','Seafood']
      },
      {
        id: 25,
        name: 'Cavolo rosso stufato in padella',
        cookTime: '10-20',
        price: 5.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Contorni']
      },
      {
        id: 26,
        name: 'Patate al forno',
        cookTime: '10-20',
        price: 5.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Contorni']
      },
      {
        id: 27,
        name: 'Patate fritte',
        cookTime: '10-20',
        price: 5.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Contorni']
      },
      {
        id: 28,
        name: 'Carciofi Fritti',
        cookTime: '10-20',
        price: 6.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Contorni']
      },
      {
        id: 29,
        name: 'Insalata Mista',
        cookTime: '10-20',
        price: 5.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Contorni']
      },
      // pizzeria
      {
        id: 30,
        name: 'Supplemento per AGGIUNTA di STRACCIATELLA',
        cookTime: '10-20',
        price: 2.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 31,
        name: 'Supplemento per AGGIUNTA DI ALTRI INGREDIENTI (prezzo cadauno)',
        cookTime: '10-20',
        price: 1.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 32,
        name: 'Supplemento per IMPASTO INTEGRALE',
        cookTime: '10-20',
        price: 1.50,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 33,
        name: 'Supplemento per IMPASTO 7 CEREALI',
        cookTime: '10-20',
        price: 1.50,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 34,
        name: 'Supplemento per BASE SENZA GLUTINE',
        cookTime: '10-20',
        price: 3.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 35,
        name: 'Supplemento per AGGIUNTA di SALUMI e PORCINO (prezzo cadauno)',
        cookTime: '10-20',
        price: 1.50,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 36,
        name: 'Supplemento per aggiunta di MOZZARELLA DI BUFALA',
        cookTime: '10-20',
        price: 2.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 37,
        name: 'Supplemento per aggiunta di MOZZARELLA DI BUFALA',
        cookTime: '10-20',
        price: 2.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 38,
        name: 'Ciaccino Semplice',
        cookTime: '10-20',
        price: 11.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 39,
        name: 'Ciaccino Confit',
        cookTime: '10-20',
        price: 11.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 40,
        name: 'Ciaccino Carpaccio',
        cookTime: '10-20',
        price: 11.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 41,
        name: 'Ciaccino Montalbuccio',
        cookTime: '10-20',
        price: 10.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 42,
        name: 'Ciaccino Primavera',
        cookTime: '10-20',
        price: 9.50,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 43,
        name: "Ciaccino all'olio",
        cookTime: '10-20',
        price: 4.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 44,
        name: 'Calzone Montalbuccio',
        cookTime: '10-20',
        price: 10.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 45,
        name: 'Calzone Quattro Formaggi',
        cookTime: '10-20',
        price: 9.50,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 46,
        name: 'Calzone Prosciutto e Funghi',
        cookTime: '10-20',
        price: 9.50,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 47,
        name: 'Pizza Taggiasca',
        cookTime: '10-20',
        price: 11.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 48,
        name: 'Pizza del Bosco',
        cookTime: '10-20',
        price: 11.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 49,
        name: ' Pizza Montalbuccio',
        cookTime: '10-20',
        price: 10.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 50,
        name: 'Pizza Tonno, Salsiccia e Cipolla',
        cookTime: '10-20',
        price: 9.50,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 51,
        name: 'Pizza Capricciosa',
        cookTime: '10-20',
        price: 10.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 52,
        name: 'Pizza Prosciutto Crudo',
        cookTime: '10-20',
        price: 9.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 53,
        name: 'Pizza Quattro Stagioni',
        cookTime: '10-20',
        price: 10.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 54,
        name: 'Pizza Prosciutto e Funghi',
        cookTime: '10-20',
        price: 9.50,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 55,
        name: 'Pizza Diavola',
        cookTime: '10-20',
        price: 9.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 56,
        name: 'Pizza Affumicata',
        cookTime: '10-20',
        price: 10.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 57,
        name: 'Pizza Quattro Formaggi',
        cookTime: '10-20',
        price: 9.50,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 58,
        name: 'Pizza Wurstel e Patatine',
        cookTime: '10-20',
        price: 10.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 59,
        name: 'Pizza Romana',
        cookTime: '10-20',
        price: 9.50,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 60,
        name: 'Pizza Napoli',
        cookTime: '10-20',
        price: 9.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },

      {
        id: 61,
        name: 'Pizza Margherita',
        cookTime: '10-20',
        price: 7.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      
      {
        id: 62,
        name: 'Pizza Indiana',
        cookTime: '10-20',
        price: 6.50,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      {
        id: 63,
        name: 'Pizza Marinara',
        cookTime: '10-20',
        price: 6.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['Pizzeria']
      },
      // deserts 
      {
        id: 64,
        name: 'Tartufo gelato affogato al caffè',
        cookTime: '10-20',
        price: 6.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['deserts']
      },
      {
        id: 65,
        name: 'Tartufo gelato',
        cookTime: '10-20',
        price: 5.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['deserts']
      },
      {
        id: 66,
        name: 'Crema Catalana',
        cookTime: '10-20',
        price: 5.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['deserts']
      },
      {
        id: 67,
        name: 'Cantucci e Vin Santo',
        cookTime: '10-20',
        price: 6.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['deserts']
      },
      {
        id: 68,
        name: 'Torta della Nonna con mandorle tostate',
        cookTime: '10-20',
        price: 5.00,
        favourite: false,
        origins: ['italy', 'spain'],
        stars: 4,
        imageUrl: '/assets/img6.webp',
        tags: ['deserts']
      },
    // Drinks
    {
      id: 69,
      name: 'Prosecco',
      cookTime: '10-20',
      price: 4.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Drinks',"Apertivo"]
    },
    {
      id: 70,
      name: 'Aperol Spritz',
      cookTime: '10-20',
      price: 5.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Drinks',"Apertivo"]
    },
    {
      id: 71,
      name: 'Campari Spritz',
      cookTime: '10-20',
      price: 5.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Drinks',"Apertivo"]
    },
    {
      id: 72,
      name: 'Campari Soda',
      cookTime: '10-20',
      price: 2.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Drinks',"Apertivo"]
    },
    {
      id: 73,
      name: 'Crodino',
      cookTime: '10-20',
      price: 2.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Drinks',"Apertivo"]
    },
    {
      id: 74,
      name: 'Hugo Spritz',
      cookTime: '10-20',
      price: 5.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Drinks',"Apertivo"]
    },
    // bears
    {
      id: 75,
      name: 'Saragiolino “Vale”',
      cookTime: '10-20',
      price: 7.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Drinks',"Birre"]
    },
    {
      id: 76,
      name: 'Birra alla spina bionda L. 0,40',
      cookTime: '10-20',
      price: 4.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Drinks',"Birre"]
    },
    {
      id: 77,
      name: 'Birra alla spina bionda L. 0,20',
      cookTime: '10-20',
      price: 3.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Drinks',"Birre"]
    },
    {
      id: 78,
      name: "Birra L'Italica puro malto L. 0,66",
      cookTime: '10-20',
      price: 6.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Drinks',"Birre"]
    },
    {
      id: 79,
      name: 'Falkenturm Bock Dunkel cl.50',
      cookTime: '10-20',
      price: 7.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Drinks',"Birre"]
    },
    {
      id: 80,
      name: 'Saragiolino BLONDE (Bio e Senza Glutine)',
      cookTime: '10-20',
      price: 7.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Drinks',"Birre"]
    },
    {
      id: 81,
      name: 'Heineken 0.0',
      cookTime: '10-20',
      price: 3.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Drinks',"Birre"]
    },
  // vini
    {
      id: 82,
      name: 'Coca cola 0 lattina 33 cl',
      cookTime: '10-20',
      price: 2.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Bevande"]
    },
    {
      id: 83,
      name: 'Fanta lattina 33 cl',
      cookTime: '10-20',
      price: 2.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Bevande"]
    },
    {
      id: 84,
      name: 'Coca cola lattina 33 cl',
      cookTime: '10-20',
      price: 2.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Bevande"]
    },
    {
      id: 85,
      name: 'Thè San Benedetto limone',
      cookTime: '10-20',
      price: 2.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Bevande"]
    },
    {
      id: 86,
      name: 'Thè San Benedetto pesca',
      cookTime: '10-20',
      price: 2.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Bevande"]
    },
    {
      id: 87,
      name: 'Vino rosso della casa al bicchiere 10 cl',
      cookTime: '10-20',
      price: 3.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Vini']
    },
    {
      id: 88,
      name: 'Vino rosso della casa 1/4 lt',
      cookTime: '10-20',
      price: 4.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Vini']
    },
    {
      id: 89,
      name: 'Vino rosso della casa 1/2 lt',
      cookTime: '10-20',
      price: 7.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Vini']
    },
    {
      id: 90,
      name: 'Vino rosso della casa bordolese (0.75 lt.)',
      cookTime: '10-20',
      price: 10.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Vini']
    },
    {
      id: 91,
      name: 'Vino Frizzantino bianco alla spina al bicchiere 10 cl.',
      cookTime: '10-20',
      price: 3.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Vini']
    },
    {
      id: 92,
      name: 'Vino Frizzantino bianco alla spina 1/4 lt.',
      cookTime: '10-20',
      price: 4.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Vini']
    },
    {
      id: 93,
      name: 'Vino Frizzantino bianco alla spina 1/2 lt',
      cookTime: '10-20',
      price: 5.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Vini']
    },
    {
      id: 94,
      name: 'Vino bianco della casa al bicchiere (10 cl.)',
      cookTime: '10-20',
      price: 3.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Vini']
    },
    {
      id: 95,
      name: 'Vino bianco della casa 1/4 lt',
      cookTime: '10-20',
      price: 4.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Vini']
    },
    {
      id: 96,
      name: 'Vino Bianco della casa 1/2 lt',
      cookTime: '10-20',
      price: 5.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Vini']
    },
    {
      id: 97,
      name: 'Vino bianco della casa 1 lt',
      cookTime: '10-20',
      price: 8.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ['Vini']
    },
    {
      id: 98,
      name: 'Acqua Gassata (0.75 L.)',
      cookTime: '10-20',
      price: 2.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Bevande"]
    },
    {
      id: 99,
      name: 'Acqua Naturale (0.75 L.)',
      cookTime: '10-20',
      price: 2.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Bevande"]
    },
    // special wine
    {
      id: 100,
      name: 'Gran Dessert Spumante Aromatico di Qualità',
      cookTime: '10-20',
      price: 10.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini"]
    },
    {
      id: 101,
      name: 'Spumante Milessimato Extra Dry Privè Lounge',
      cookTime: '10-20',
      price: 11.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini"]
    },
    {
      id: 102,
      name: 'Prosecco Doc Treviso Extra Dry Millesimato Ciòs',
      cookTime: '10-20',
      price: 14.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini"]
    },
    {
      id: 103,
      name: 'Chianti Classico DOCG " Peppoli" Marchese Antinori',
      cookTime: '10-20',
      price: 5.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini"]
    },
    {
      id: 104,
      name: 'Chardonnay "Chioppaia" IGT Toscana Fattoria Il Palagio',
      cookTime: '10-20',
      price: 5.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini"]
    },
    {
      id: 106,
      name: 'Viognier DOC Maremma Toscana "Cacciagrande"',
      cookTime: '10-20',
      price: 5.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini"]
    },
    // red wine
    {
      id: 107,
      name: 'Rosso di Montalcino DOC "Villa i Cipressi"',
      cookTime: '10-20',
      price: 29.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 108,
      name: 'Brunello di Montalcino DOCG "Villa i Cipressi"',
      cookTime: '10-20',
      price: 58.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 109,
      name: 'Merlot "Cantina Rauscedo"',
      cookTime: '10-20',
      price: 15.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 110,
      name: 'Montepulciano Da Abruzzo Dop "Cantina Tollo"',
      cookTime: '10-20',
      price: 16.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 111,
      name: 'Lagrein Alto Adige DOC Auer',
      cookTime: '10-20',
      price: 18.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 112,
      name: 'Pinot Nero Alto Adige DOC Auer',
      cookTime: '10-20',
      price: 20.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 113,
      name: 'Refosco Isonzo Doc Tenuta Casate',
      cookTime: '10-20',
      price: 19.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 114,
      name: 'Morellino di Scansano Doc',
      cookTime: '10-20',
      price: 23.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 115,
      name: 'Brusco dei Barbi IGT Toscana Rosso',
      cookTime: '10-20',
      price: 20.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 116,
      name: 'Chianti Classico DOCG Fonterutoli Marchesi Mazzei',
      cookTime: '10-20',
      price: 39.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 117,
      name: 'Rosso di Montepulciano Doc Fossolupaio',
      cookTime: '10-20',
      price: 24.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 118,
      name: 'Chianti Classico San Felice 375ml',
      cookTime: '10-20',
      price: 15.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 119,
      name: 'Le Bicchieraie Chianti Superiore Bio DOCG',
      cookTime: '10-20',
      price: 24.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 120,
      name: 'IGT Toscana Sunto',
      cookTime: '10-20',
      price: 28.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 121,
      name: 'Villa Antinori Toscana IGT',
      cookTime: '10-20',
      price: 28.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 122,
      name: 'Primitivo di Manduria DOP Le Vigne di Sammarco',
      cookTime: '10-20',
      price: 27.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 123,
      name: 'Cannonau Di Sardegna CAOR Quartomoro di Sardegna',
      cookTime: '10-20',
      price: 23.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 124,
      name: 'Solco Lambrusco Emilia Semisecco Paltrinieri',
      cookTime: '10-20',
      price: 19.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 125,
      name: 'Marzemino Salizzoni',
      cookTime: '10-20',
      price: 22.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 126,
      name: 'Sangre de Toro',
      cookTime: '10-20',
      price: 20.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
    {
      id: 127,
      name: 'Chianti Classico Riserva DOCG "Le Ginestre"',
      cookTime: '10-20',
      price: 19.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Rossi"]
    },
  //  white vine
    {
      id: 128,
      name: 'Ribolla Gialla "Cantina Rauscedo"',
      cookTime: '10-20',
      price: 15.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Bianchi"]
    },
    {
      id: 129,
      name: 'Viognier DOC Maremma Toscana',
      cookTime: '10-20',
      price: 20.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Bianchi"]
    },
    {
      id: 130,
      name: 'Chardonnay',
      cookTime: '10-20',
      price: 20.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Bianchi"]
    },
    {
      id: 131,
      name: 'Villa Diana Chardonnay Igt',
      cookTime: '10-20',
      price: 18.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Bianchi"]
    },
    {
      id: 132,
      name: 'Verdicchio dei Castelli di Jesi Classico DOC',
      cookTime: '10-20',
      price: 16.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Bianchi"]
    },
    {
      id: 133,
      name: 'IGT Vigneti delle Dolomiti Moscato giallo Pfefferer',
      cookTime: '10-20',
      price: 26.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Bianchi"]
    },
    {
      id: 134,
      name: 'Langhe Bianco Doc Podere Gagliassi',
      cookTime: '10-20',
      price: 26.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Bianchi"]
    },
    {
      id: 135,
      name: 'Fonte delle donne IGT Toscana BIO Fattoria Fibbiano',
      cookTime: '10-20',
      price: 27.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini","Vini Bianchi"]
    },

    // vini di rosati
    {
      id: 136,
      name: 'Wilde Rose IGT Toscana',
      cookTime: '10-20',
      price: 20.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini"]
    },
    {
      id: 137,
      name: "Exhib' Cap d'Agde Rosé Côtes de Thau",
      cookTime: '10-20',
      price: 15.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Vini"]
    },
    // coffee
    {
      id: 138,
      name: "Caffè Espresso",
      cookTime: '10-20',
      price: 1.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Caffè"]
    },
    {
      id: 139,
      name: "Orzo",
      cookTime: '10-20',
      price: 1.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Caffè"]
    },
    {
      id: 140,
      name: "Caffè Corretto",
      cookTime: '10-20',
      price: 2.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Caffè"]
    },
    {
      id: 141,
      name: "Cappuccino",
      cookTime: '10-20',
      price: 3.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Caffè"]
    },
    {
      id: 142,
      name: "Tè o Tisana",
      cookTime: '10-20',
      price: 1.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Caffè"]
    },
    {
      id: 143,
      name: "Amari/Grappa della casa",
      cookTime: '10-20',
      price: 2.50,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Bevande"]
    },
    {
      id: 144,
      name: "Amaro del Vecchio Toscano",
      cookTime: '10-20',
      price: 3.00,
      favourite: false,
      origins: ['italy', 'spain'],
      stars: 4,
      imageUrl: '/assets/img6.webp',
      tags: ["Bevande"]
    },
       
    ];
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food => food.name.toLowerCase()
      .includes(searchTerm.toLowerCase()));
  }

  getAllFoodsByTag(tag: string): Food[] {
    const normalizedTag = tag.toLowerCase();
    return normalizedTag === "all"
      ? this.getAll()
      : this.getAll().filter((food: any) =>
        food.tags.some((foodTag: any) => {
          return foodTag.toLowerCase() === normalizedTag;
        })
      );
  }

  getAllTags(): Tag[] {
    const foods = this.getAll(); // Retrieve all foods
    const tagCount: { [key: string]: number } = {};

    // Count occurrences of each tag
    foods.forEach(food => {
      (food.tags || []).forEach(tag => { // Add default empty array for tags
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    });
    

    // Create Tag array with dynamic counts
    const tags: Tag[] = Object.keys(tagCount).map(tag => ({
      name: tag,
      count: tagCount[tag]
    }));

    // Add "All" tag with total count
    tags.unshift({ name: 'All', count: foods.length });

    return tags;
  }

  constructor() { }
}
