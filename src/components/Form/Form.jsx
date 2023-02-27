
import css from './Form.module.css';
import PropTypes from 'prop-types';
import { useState } from "react";

export const Form = ({onSubmit})=> {
  const [name, setName] = useState('');
  const [number, setNumber]= useState('')

 
const handleChange = (e) => {
  const { name } = e.target
  switch (name) {
    case 'name':
      setName(e.target.value)
      break;
    case 'number':
      setNumber(e.target.value)
      break;
    default:
      throw new Error('error');
  }
  
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ name, number })
    setName('')
    setNumber('')
  }

  
    return (<>
  < form className={css.form} onSubmit={handleSubmit} >
<label className={css.label} htmlFor="name">Name</label>
        <input className={css.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
        />
        
      <label className={css.label} htmlFor="number">Number</label>
        <input className={css.input}
          value={number}
      onChange={handleChange}
      type="tel"
      name="number"
      required
      />
      <button className={css.btn} type="submit">Add contact</button>
      </form>

  </>)
  
}
Form.propTypes = {
  onSubmit: PropTypes.func,
}