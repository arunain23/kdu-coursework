import React, { createContext, useEffect, useState } from 'react';

export interface Todo {
  id: number;
  text: string;
}
interface ChildProps {
    children: React.ReactNode
}

interface TodoContextType {
    items: Todo[];
    searchItems: Todo[];
    onAddTodo: (text: string) => void;
    onSearch: (term: string) => void;
    onDeleteTodo: (id: number) => void;
    nextId: number;
}


export const TodoContext = createContext<TodoContextType>({
    items: [],
    searchItems: [],
    onAddTodo: () => {},
    onSearch: () => {},
    onDeleteTodo: () => {},
    nextId: 0,
});


export const TodoProvider = ({ children }: ChildProps) => {

    const [items, setItems] = useState<Todo[]>([]);
    const [searchItems, setSearchItems] = useState<Todo[]>([]);
    const [nextId, setNextId] = useState<number>(1);

    const onAddTodo = (item: string): void => {
        setItems([...items, { id: nextId, text: item }]);
        setNextId(nextId + 1);
    };

    const onSearch = (searchStr: string): void => {
        if (searchStr.length === 0) {
            setSearchItems([]);
            return;
        }
        const searchList = items.filter((item) => item.text.startsWith(searchStr));
        setSearchItems(searchList);
    };

    const onDeleteTodo = (id: number) => {
        setItems(items.filter((item) => item.id !== id));
    };

    useEffect(() => {
        setSearchItems(items);
    }, [items]);

    const value: TodoContextType = {
        items,
        searchItems,
        onAddTodo,
        onSearch,
        onDeleteTodo,
        nextId
    };

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};