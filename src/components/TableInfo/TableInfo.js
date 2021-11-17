import React from 'react';
import './TableInfo.css';
import { setCardItemAction } from '../../store/TableInfo/actions';
import { connect } from 'react-redux';

const TableInfo = ({ item }) => {

    return (
       <div>
        <h2>{item.name}</h2>
        <div>{item.artikul}</div>
        <div>{item.type}</div>
        <div>{item.date}</div>
        <div>{item.price}</div>
        <div>{item.quantity}</div>
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