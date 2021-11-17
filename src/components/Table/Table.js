import React from 'react';
import itemsService from '../../services/ItemsService';
import AddRowForm from '../AddRowForm/AddRowForm';
import TableFilter from '../TableFilter/TableFilter'
import { ITEMS_DATA_STORAGE_KEY } from '../../services/ItemsService';
import { connect } from 'react-redux';

import './Table.css';
import { setItemsAction, setTypesAction, setIsLoadingAction} from '../../store/Table/actions';
import { setIsOpenAction } from '../../store/AddRowForm/actions';
import { setCardItemAction } from '../../store/TableInfo/actions'
import { useHistory } from 'react-router';


// itemsService.sleep().then((result) => {console.log(result)}).catch((err) => {alert(err)});

const Table = ({items, onSetItems, types, onSetTypes, isLoading, onSetIsLoading, isOpen, onSetIsOpen, onSetCardItemAction}) => {
    const history = useHistory();

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

      // const newId = itemsWithNewRow.reduce((max, item) => {
      //   return Math.max(max, item['id']);
      // }, 0)

      const newId = itemsWithNewRow.reduce((max, {id}) => Math.max(max, id), 0)
      itemsWithNewRow.push({
        ...row,
        id: newId + 1
      });
      onSetItems(itemsWithNewRow);   

      localStorage.setItem(ITEMS_DATA_STORAGE_KEY, JSON.stringify(itemsWithNewRow));
    }

    const tableSort = (columnName, isDesc) => {
      const newItems = items.slice();
      const newSortItems = newItems.sort((a,b) => {
        if (isDesc) {
        return a[columnName] < b[columnName] ? 1 : -1;
      }
      return a[columnName] > b[columnName] ? 1 : -1;
    });

      onSetItems(newSortItems);

      console.log(columnName, isDesc);
      }
    
    const deleteItem = (id) => {
      const newItems = items.filter(item => item.id !== id);

      onSetItems(newItems);
      localStorage.setItem(ITEMS_DATA_STORAGE_KEY, JSON.stringify(newItems))
    }

    const handleOpenForm = () => {
      onSetIsOpen(true);
  }

    const handleGoToInfo = (id) => {
      const row = agregateTable.find((item) => id === item.id);
      console.log(row);
      onSetCardItemAction(row);
      history.push("/table-info");
    }

    React.useEffect(() => {
      onSetIsLoading(true);
        itemsService.getItems().then((result) => {
          onSetIsLoading(false);
          onSetItems(result);
        });
        itemsService.getTypes().then((result) => {
          onSetIsLoading(false);
          onSetTypes(result);
        });
    }, []);
    
    return (
        <div>
        <button className={isOpen ? 'addButtonHidden' : 'addButton'} onClick={handleOpenForm}>Добавить товар</button>
          { isOpen && <AddRowForm onAddNewRow={handleAddNewRow}/> }
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
          const handleClick = () => {
            handleGoToInfo(id);
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
          <td><button onClick={handleClick} className="showItemCardButton">Показать товар</button></td>
          <td><button onClick={handleDelete} className="deleteButton">Удалить</button></td>
          </tr>
          )
          })}
        </tbody>
      </table>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
      items: state.table.items,
      types: state.table.types,
      isLoading: state.table.isLoading,
      isOpen: state.addRowForm.isOpen,
      item: state.item.item
    }
};

const mapDispatchToProps = {
  onSetItems: setItemsAction,
  onSetTypes: setTypesAction,
  onSetIsLoading: setIsLoadingAction,
  onSetIsOpen: setIsOpenAction,
  onSetCardItemAction: setCardItemAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
