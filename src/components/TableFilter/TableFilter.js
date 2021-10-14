import React from 'react';
import './TableFilter.css'

const FILTER_BUTTONS = [
    {
        columnName: 'id',
        isDesc: false,
        isActive: false
    },
    {
        columnName: 'name',
        isDesc: false,
        isActive: false
    },
    {
        columnName: 'artikul',
        isDesc: false,
        isActive: false
    },
    {
        columnName: 'type',
        isDesc: false,
        isActive: false
    },
    {
        columnName: 'date',
        isDesc: false,
        isActive: false
    },
    {
        columnName: 'price',
        isDesc: false,
        isActive: false
    },
    {
        columnName: 'quantity',
        isDesc: false,
        isActive: false
    }
];

const TableFilter = (props) => {
    const [buttons, setButtons] = React.useState(FILTER_BUTTONS);

    const handleClick = (columnName, isDesc) => {
        const isNewDesc = isDesc ? false : true; 
        const newButtons = buttons.map((button) => {
            if (button.columnName === columnName) {
                return { ...button, isDesc: isNewDesc, isActive: true };
            }
            return {
                ...button,
                isActive: false
            };
        });
        setButtons(newButtons);
        props.onSort(columnName, isNewDesc);
    }

    const getButtonClassName = (isActive, isDesc) => {
        if (isActive && isDesc) {
            return 'sortButtonDesc';
        } else if (isActive && !isDesc) {
            return 'sortButtonAsc';
        }
        return 'sortButtonDefault';
    }

return (
    <div className="sortingButtons">
    {buttons.map(({columnName, isDesc, isActive}) => {
        const handleSort = () => {
            handleClick(columnName, isDesc);
          }
        
        const buttonClassName = getButtonClassName(isActive, isDesc);

        return (
            <button onClick={handleSort} className={buttonClassName}>{columnName}</button>
        )
    })}
    </div>
)
}


export default TableFilter;