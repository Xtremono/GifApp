import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball Z']);
  const addCategory = () => {
    setCategories([...categories, "Valorant"])
  }


  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory/>
    <button onClick={addCategory}>Agregar</button>
    <ol>
      {categories.map(category => <li key={category}>{category}</li>)}
    </ol>
    </>
  )
}
