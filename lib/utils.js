import { getItems } from "../services/itemService";

export const getPathsFromIds = async () => {
    const items = await getItems();
    const ids = items.map(item => {
        return {
            params: { 
                // id es el mismo que se le coloca al archivo que se utiliza para crear la rutas dinamicas
                id: convertToPath(item.title) 
            }
        };
    });

    return ids;
}

export const getItemData = async (id) => {
    const items = await getItems();
    const item = items.find((item) => convertToPath(item.title) === id);

    return {
        id: id,
        data: item
    }
}

export const convertToPath = (title) => {
    // regrex: sustituye todos los espacios por guiones
    return title.toLowerCase().replace(/\s/g, '-');
}