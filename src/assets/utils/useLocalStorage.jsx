import { useEffect, useState } from "react"

// rror.propTypes = {
//   error: PROP_TYPE.ERROR,
// };
// type LocalStorageSetValue = string;
// type LocalStorageReturnValue = LocalStorageSetValue | null;

// type UseLocalStorage = (key: string) => [
//     value: LocalStorageReturnValue,
//     {
//         setItem: (value: LocalStorageSetValue) => void;
//         removeItem: () => void;
//     },
// ];

function getValueStorage(key, initialState) {
    const saveValue = JSON.parse(localStorage.getItem(key))

    if (saveValue) {
        return saveValue
    }
    if (initialState instanceof Function) {
        return initialState()
    }


    return initialState
}

export function useLocalStorage(key) {
    const initialState = ''
    const [value, setValue] = useState(() =>
        getValueStorage(key, initialState))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))

    }, [value])

    function setItem(newvalue) {
        setValue(newvalue)
    }
    function removeItem() {
        setValue("")
    }

    return [
        value, { setItem, removeItem }
    ]


}
