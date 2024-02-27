import React  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState , setSearchInput, setSearchList} from '../../redux/reduxstore';
import './Header.css'

export interface Item{
    id: number;
    text: string;
    isCompleted: number;
}

export function Header() {
    const list = useSelector((state: RootState) => state.itemList.list)
    const searchInput = useSelector((state: RootState) => state.itemList.searchInput)

    const reduxDispatch = useDispatch();

    const searchItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchText: string = event.target.value.trim().toLowerCase(); 
        const searchResultList = list.filter((item: Item) => {  
            return item.text.toLowerCase().includes(searchText);
        });
        reduxDispatch(setSearchInput(searchText))
        reduxDispatch(setSearchList(searchResultList));
    };

    return (
        <div className="header-container"> 
            <h1 className="header-title">Item Lister</h1>
            <input className="header-input" type="text" placeholder='Search Items' value={searchInput} onChange={searchItem}/>
        </div>
    )
}
