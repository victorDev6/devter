import { createContext, useState } from "react"

const AppContext = createContext({
    isOpen: false,
    items: [],
    handleOpenCart: () => {},
    addItemToCart: (item) => {},
    getNumberOfItems: () => {},
});

const StateWarapper = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);

    const handleOpenCart = () => {
        setIsOpen(!isOpen);
    }

    const addItemToCart = (item) => {
        // setItems([...items, item]);
        const temp = [...items];
        const found = temp.find(i => i.id === item.id);
        if (found) {
            found.qty++;
        } else {
            item.qty = 1;
            temp.push(item);
        }

        setItems([...temp]);
    } 
    
    const getNumberOfItems = () => {
        // se regresa la suma del total de productos en el carrito
        return items.reduce((acc, item) => acc + item.qty, 0);
    }

    return (
        <AppContext.Provider value={{
            isOpen,
            items,
            handleOpenCart,
            addItemToCart,
            getNumberOfItems
        }}>
            { children }
        </AppContext.Provider>
    )
}

export { StateWarapper, AppContext };