import React from 'react';
import { Header } from '../Header/Header';
import { AddItem } from '../AddItem/AddItem';
import { ItemList } from '../ItemList/ItemList';
import './ToDoProvider.css'; 

/** Functional component to provide the ToDo list */
export function ToDoProvider() {
  return (
    <div className="todo-list-container">
      <Header />
      <div className="main-container">
        <AddItem />
        <ItemList />  
      </div>
    </div>
  );
}
