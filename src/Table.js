import React from 'react';
import './App.css';
import { getDateString } from './getDateString';

const items = [
    {
        id: 1,
        name: 'Корм',
        artikul: 'FOE9FS',
        date: getDateString(new Date(2020, 1, 21)),
        price: 300,
        quantity: 4
    },
    
    {
        id: 2,
        name: 'Вода',
        artikul: 'DSK0SA',
        date: getDateString(new Date(2020, 1, 21)),
        price: 100,
        quantity: 3
    },

    {
        id: 3,
        name: 'Хлеб',
        artikul: 'CCSX00',
        date: getDateString(new Date(2020, 1, 21)),
        price: 50,
        quantity: 1
    },

    {
        id: 4,
        name: 'Пиво',
        artikul: 'IJFD099',
        date: getDateString(new Date(2020, 1, 21)),
        price: 400,
        quantity: 2
    },
    
    {
        id: 5,
        name: 'Полотенце',
        artikul: 'OISJ23S',
        date: getDateString(new Date(2020, 1, 21)),
        price: 500,
        quantity: 5
    }
];


const Table = () => {
    return (
        <table className="table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Артикул</th>
            <th>Дата</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
            <th>Резерв</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({id, name, artikul, date, price, quantity}) => (
          <tr key={id}> 
          <td>{name}</td>
          <td>{artikul}</td>
          <td>{date}</td>
          <td>{price}</td>
          <td>{quantity}</td>
          <td>{price * quantity}</td>
          <td></td>
          </tr>
          ))}
        </tbody>
      </table>
    )
}

export default Table;
