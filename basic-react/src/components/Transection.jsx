import React from 'react';
import Item from './Item';
import "./Transection.css"

const Transection = (props)=>{
  const {items} = props
  return(
    <ul className='item-list'>
        {items.map((item) => (
            <Item key={item.id} {...item} />

            // <Item key={key} title={item.title} amount={item.amount} />
        ))}
    </ul>
  );
}
export default Transection