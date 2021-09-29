import React from 'react';
import { getDate } from '../../utils/getDateString';
import itemsService from '../../services/ItemsService';
import '../../App.css';


itemsService.sleep().then((result) => {console.log(result)}).catch((err) => {alert(err)});

const Table = () => {
    const [items, setItems] = React.useState([]);
    const [types, setTypes] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const agregateTable = items.map((item) => { 
      const newTable = {
        ...item,
        type: types[item.typeId],
        };
        return newTable;
      }
    );

    React.useEffect(() => {
        setIsLoading(true);
        itemsService.getItems().then((result) => {
          setIsLoading(false);
          setItems(result);
        });
        itemsService.getTypes().then((result) => {
          setIsLoading(false);
          setTypes(result);
        });
    }, []);
    return (
        <div>
          {isLoading ? (<span>Loading...</span>) : (<table className="table">
        <thead>
          <tr>
            <th>Номер</th>
            <th>Название</th>
            <th>Артикул</th>
            <th>Тип</th>
            <th>Дата</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
            <th>Резерв</th>
          </tr>
        </thead>
        <tbody>
          {agregateTable.map(({id, name, artikul, type, date, price, quantity}) => (
          <tr key={id}>
          <td>{id}</td>   
          <td>{name}</td>
          <td>{artikul}</td>
          <td>{type}</td>
          <td>{date}</td>
          <td>{price}</td>
          <td>{quantity}</td>
          <td>{price * quantity}</td>
          <td />
          </tr>
          ))}
        </tbody>
      </table>)}
        </div>
    )
}

export default Table;
