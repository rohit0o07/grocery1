import React from 'react'
import ItemList from './itemList';

const Content = ({items,handleCheck,handleDelete}) => {
  
  return (
    <>
        {items.length ? (
      <ItemList 
              items={items}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              />
      ):(
        <p style={{marginTop:'2rem'}}>your list is empty</p>
      )}
    </>
  )
};

export default Content;