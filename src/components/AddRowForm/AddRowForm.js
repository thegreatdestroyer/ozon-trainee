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
    
return (
    <div>
        <button className="addButton" onClick={handleOpenForm}>Новый элемент</button>
            <form className={isOpen ? 'addFormDisplayed' : 'addForm'} onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='name' onChange={handleChange} value={formState.name}/>
                <input type="text" name='artikul' placeholder='artikul' onChange={handleChange}/>
                <input type="text" name='typeId' placeholder='type' onChange={handleChange}/>
                <input type="date" name='date' placeholder='date' onChange={handleChange}/>
                <input type="number" name='price' placeholder='price' onChange={handleChange}/>
                <input type="number" name='quantity' placeholder='quantity' onChange={handleChange}/>
                <button classeName="saveButton" type='submit'>Сохранить</button>
            </form>
    </div>
)
}


export default AddRowForm;