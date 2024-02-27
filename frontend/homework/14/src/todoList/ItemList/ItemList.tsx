import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setList } from '../../redux/reduxstore';

/** Interface for an item */
export interface Item {
    id: number;
    text: string;
    isCompleted: number;
}

/** Functional component for displaying the item list */
export function ItemList() {
    const list = useSelector((state: RootState) => state.itemList.list);
    const searchList = useSelector((state: RootState) => state.itemList.searchList);
    const searchInput = useSelector((state: RootState) => state.itemList.searchInput);

    const reduxDispatch = useDispatch();

    /** Function to delete an item from the list */
    const deleteItem = (id: number) => {
        let updatedList = [...list];
        updatedList = updatedList.filter((item: Item) => item.id !== id);
        reduxDispatch(setList(updatedList));
    };

    /** Function to handle checkbox change for marking an item as completed */
    const handleChange = (itemId: number) => {
        const updatedList: Item[] = list.map((item) => {
            if (item.id === itemId) {
                return {
                    ...item,
                    isCompleted: item.isCompleted ? 0 : 1
                };
            }
            return item;
        });

        reduxDispatch(setList(updatedList));
    };

    // Determine which list to iterate over based on search input
    let toIterateOverList = searchList;
    if (searchInput === '') toIterateOverList = list;
    else if (searchList.length === 0) {
        return (
            <div className='item-list'>
                <h2>Items</h2>
                <p>No items match the search item name</p>
            </div>
        );
    }

    // Render the item list
    return (
        <div className='item-list'>
            <h2>Items</h2>
            <ul>
                {
                    toIterateOverList.map((item: Item) => {
                        return (
                            <div className={item.isCompleted ? "li-div completed-item" : "li-div"} key={item.id}>
                                <div className="li-check-style">
                                    <input type="checkbox" onChange={() => handleChange(item.id)} />
                                    <li className={item.isCompleted ? "completed-item" : ""}>{item.text}</li>
                                </div>
                                <button className="button" onClick={() => deleteItem(item.id)}>X</button>
                            </div>
                        );
                    })
                }
            </ul>
        </div>
    );
}
