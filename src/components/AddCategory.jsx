import PropTypes from "prop-types";
import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState("One Punch");
  const onInputChange = ({target}) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    //setCategories(categories => [inputValue, ...categories]);
    onNewCategory( inputValue.trim());
    setInputValue("");
  }

  return (
    <form onSubmit={ (event) => onSubmit(event) } aria-label="form">
    <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />
    </form>

  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
