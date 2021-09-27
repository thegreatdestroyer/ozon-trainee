import React from 'react';
import { getDate } from '../../utils/getDateString';
import itemsService from '../../services/ItemsService';
import '../../App.css';


itemsService.sleep().then((result) => {console.log(result)}).catch((err) => {alert(err)});

const Table = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        itemsService.getItems().then((result) => {
          setIsLoading(false);
          setItems(result)
        })
    }, []);
    return (
        <div>
          {isLoading ? (<span>Loading...</span>) : (<table className="table">
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
          <td />
          </tr>
          ))}
        </tbody>
      </table>)}
        </div>
    )
}

export default Table;
