
import { useDispatch, useSelector } from 'react-redux';
import { RootState , setList, setSearchInput } from '../../redux/reduxstore';
import './AddItem.css'; 

export interface Item {
  id: number;
  text: string;
  isCompleted: number;
}

export function AddItem() {
  const list = useSelector((state: RootState) => state.itemList.list);
  const reduxDispatch = useDispatch();

  const clearList = () => {
    const updatedList = list.filter((item) => !item.isCompleted);
    reduxDispatch(setList(updatedList));
  }

  const addItemToList = () => {
    const itemAddInput:HTMLInputElement | null = document.querySelector("#item-add-input");
    if (!itemAddInput) return;
    const itemText:string = itemAddInput.value;
    if (itemText.length === 0) return;
    const lenOfList = list.length;
    const itemId = (lenOfList === 0) ? 1 : list[lenOfList - 1].id + 1;
    const newItem:Item = {
      id: itemId,
      text: itemText,
      isCompleted: 0
    }
    const updatedList = [...list, newItem];
    reduxDispatch(setList(updatedList));
    itemAddInput.value = '';
    reduxDispatch(setSearchInput(''))
  }

  return (
    <div>
      <h2 className="h2">Add Items</h2>
      <div className="divStyles">
        <div>
          <input type="text" id='item-add-input' className="input" />
          <button onClick={addItemToList} className="button">Submit</button>
        </div>
        <div>
          <button onClick={clearList} className="button">Clear</button>
        </div>
      </div>
    </div>
  )
}
