import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';

function MenuApp() {
  const [items, setItems] = useState(data);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories setItems={setItems} data={data}/>
        <div className="section-center">
          {items.map(item => (
            <Menu key={item.id} {...item}/>
          ))}
        </div>
      </section>
    
    </main>
  );
}

export default MenuApp;