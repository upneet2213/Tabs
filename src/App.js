import React, { useState, } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [categories,setCategories]= useState(['All', ...new Set(items.map((item)=>item.category))])
  const [menuItems,setMenuItems]= useState(items);
  const filterItems=(category)=>{
    if(category==="All"){
      setMenuItems(items);
      return;
    }
    const newItems=items.filter((item)=>item.category===category)
    setMenuItems(newItems)
  }

  return <main>
      <section className="menu section">
        <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu items={menuItems}/>
      </section>
    
  </main>
}

export default App;
