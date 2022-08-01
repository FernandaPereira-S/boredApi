import React from 'react';
import './TodoList.css'

function TodoList() {
  const url = `http://www.boredapi.com/api/activity/`;

  const getActivity = async() => {
    const res = await fetch(url);
    const json = await res.json();
  
    document.querySelector('.activity').innerText = json.activity;
    document.querySelector('.type').innerText = json.type;
    document.querySelector('.participants').innerText = json.participants;
    document.querySelector('.price').innerText = json.price;
    document.querySelector('.link').innerText = json.link;
    document.querySelector('.key').innerText = json.key;
    document.querySelector('.accessibility').innerText = json.accessibility;
  }

  getActivity()

  return (
    <section className='todo-section'>
      <h2 className='todo-title'>Todo List</h2>
      <div className='todo-card'>
        <h3>Activity: </h3>
        <p className='activity'></p>
        <h3>Type: </h3>
        <p className='type'></p>
        <h3>Participants: </h3>
        <p className='participants'></p>
        <h3>Price: </h3>
        <p className='price'></p> 
        <h3>Link: </h3>
        <p className='link'></p>  
        <h3>Key: </h3>
        <p className='key'></p>
        <h3>Accessibility: </h3>
        <p className='accessibility'></p>
      </div>
    </section>
  )
}

export default TodoList;