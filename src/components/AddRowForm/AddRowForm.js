import React from 'react';
import './AddRowForm.css'


const AddRowForm = (props) => {

    const [formState, setFormState] = React.useState({
        name: '',
        artikul: '',
        typeId: '',
        date: '',
        price: '',
        quantity: ''
    });
    const [isOpen, setIsOpen] = React.useState(false);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddNewRow(formState);
    }

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const value = event.target.value;

        setFormState(prev => ({
                ...prev,
                [fieldName]: value
            }
        ));
    }

        const handleOpenForm = () => {
            setIsOpen(true);
        }

        const handleCloseForm = () => {
            setIsOpen(false);
        }
    
return (
    <div>
        <button className={isOpen ? 'addButtonHidden' : 'addButton'} onClick={handleOpenForm}>Добавить товар</button>
        <div className={isOpen ? 'overlay' : 'form'}>
            <div className={isOpen ? 'showFormContainer' : 'hideFormContainer'}>
            <div className="formHeader">
                <h2>Добавление товара</h2>
                <button className="closeButton" type='button' onClick={handleCloseForm}>Х</button>
            </div>
            <form className={isOpen ? 'addFormDisplayed' : 'addForm'} onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='наименование' onChange={handleChange} value={formState.name}/>
                <input type="text" name='artikul' placeholder='артикул' onChange={handleChange}/>
                <input type="number" name='typeId' placeholder='тип(от 1 до 5)' onChange={handleChange}/>
                <input type="date" name='date' placeholder='дата' onChange={handleChange}/>
                <input type="number" name='price' placeholder='цена' onChange={handleChange}/>
                <input type="number" name='quantity' placeholder='количество' onChange={handleChange}/>
                <button className="saveButton" type='submit'>Сохранить</button>
            </form>
            </div>
        </div>
    </div>
)
}


export default AddRowForm;