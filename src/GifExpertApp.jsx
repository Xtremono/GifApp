import { useState } from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball Z']);

  return (
    <>
    <h1>GifExpertApp</h1>

    <ol>
      {categories.map(category => <li key={category}>{category}</li>)}
    </ol>
    </>
  )
}
