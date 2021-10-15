import React from 'react';
import itemsService from '../../services/ItemsService';
import AddRowForm from '../AddRowForm/AddRowForm';
import TableFilter from '../TableFilter/TableFilter'
import './Table.css';


itemsService.sleep().then((result) => {console.log(result)}).catch((err) => {alert(err)});

const Table = (props) => {
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

    const handleAddNewRow = (row) => {
      const itemsWithNewRow = items.slice();
      const newId = itemsWithNewRow.reduce((max, item) => {
        return Math.max(max, item['id']);
      }, 0)
      itemsWithNewRow.push({
        ...row,
        id: newId + 1
      });
      setItems(itemsWithNewRow);   
      localStorage.setItem('storedTable', JSON.stringify(itemsWithNewRow));   
      console.log(row);
    }

    const tableSort = (columnName, isDesc) => {
      const newItems = items.slice();
      const newSortItems = newItems.sort((a,b) => {
        if (isDesc) {
        return a[columnName] < b[columnName] ? 1 : -1;
      }
      return a[columnName] > b[columnName] ? 1 : -1;
    });

      setItems(newSortItems);

      console.log(columnName, isDesc);
      }
    
    const deleteItem = (id) => {
      // const newAgregateTable = agregateTable.slice();
      // const index = newAgregateTable.findIndex(({id: iId}) => id === iId);
      // newAgregateTable.splice(index, 1);
      const newItems = items.filter(item => item.id !== id);
      setItems(newItems);
      localStorage.setItem('storedTable', JSON.stringify(newItems))
    }

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
          <AddRowForm onAddNewRow={handleAddNewRow}/>
          <TableFilter onSort={tableSort} />
          {isLoading ? (<span className="loading">Loading...</span>) : 
          (<table className="table">
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
            <th>Удалить строку</th>
          </tr>
        </thead>
        <tbody>
          {agregateTable.map(({id, name, artikul, type, date, price, quantity}) => { 
          const handleDelete = () => {
            deleteItem(id);
          }
          return (
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
          <td><button onClick={handleDelete} className="deleteButton">Удалить</button></td>
          </tr>
          )
          })}
        </tbody>
      </table>)}
        </div>
    )
}

export default Table;
