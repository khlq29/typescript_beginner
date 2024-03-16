// // var _ = require('lodash')
// import _ from 'lodash'
// console.log(_.shuffle([1, 2, 3]));

// in app.ts
// using plainToInstance instead of plainToClass
// with class-transformer v0.5.1+

import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import {validate} from 'class-validator'

import { Product } from './product.model'


const newProd = new Product('', -9999)
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('VALIDATION ERROR!');
        console.log(errors);
    } else {
        console.log(newProd.getInformation());
   }
    
})


const products = [
    { title: 'Chizuru', price: 29.99 },
    { title: 'Yukinon', price:99.99}
];
// const p1 = new Product('Oshi no ko', 12.99)

// const loaderProducts = products.map(prod => {
//     return new Product(prod.title,prod.price)
// })

const loaderProducts = plainToInstance(Product, products)

for (const prod of loaderProducts) {
    console.log(prod.getInformation());
}
