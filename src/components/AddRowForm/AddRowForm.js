import React from 'react';
import './AddRowForm.css'
import { connect } from 'react-redux';
import { setFormStateAction, setIsOpenAction } from '../../store/AddRowForm/actions';


const AddRowForm = ({ onAddNewRow, formState, onSetFormState, isOpen, onSetIsOpen}) => {


    React.useEffect(() => {
        return () => {
        onSetFormState({
                name: '',
                artikul: '',
                typeId: '',
                date: '',
                price: '',
                quantity: ''
            });
        }
      }, []);
      

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddNewRow(formState);
    }

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const value = event.target.value;

        onSetFormState(
            {
                ...formState,
                [fieldName]: value
            }
        );
    }

        const handleCloseForm = () => {
            onSetIsOpen(false);
        }
    
return (
    <div>
         <div className={isOpen ? 'showOverlay' : 'hideOverlay'}>
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

const mapStateToProps = (state) => {
    return { 
      formState: state.addRowForm.formState,
      isOpen: state.addRowForm.isOpen
    }
};

const mapDispatchToProps = {
    onSetFormState: setFormStateAction,
    onSetIsOpen: setIsOpenAction,
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddRowForm);