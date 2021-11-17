import React from 'react';
import './TableInfo.css';
import { setCardItemAction } from '../../store/TableInfo/actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const TableInfo = ({ item }) => {

  const history = useHistory();

  const handleGoToTable = () => {
    history.push("/table");
  }

    return (
      <div>
        <div className="card-container">
          <h2>{item.name}</h2>
          <div>Артикул: {item.artikul}</div>
          <div>Тип: {item.type}</div>
          <div>Дата: {item.date}</div>
          <div>Цена: {item.price}</div>
          <div>Количество: {item.quantity}</div>
        </div>
        <button className="button" onClick={handleGoToTable}>Назад</button>
      </div>
    );
}

const mapStateToProps = (state) => {
    return { 
      item: state.item.item,
    }
};

const mapDispatchToProps = {
    onSetCardItemAction: setCardItemAction
  }

export default connect(mapStateToProps, mapDispatchToProps)(TableInfo);