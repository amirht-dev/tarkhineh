import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

const LOCALSTORAGE_CHANGE_EVENT_TYPE = "localstorage:change";

class LocalStorageChangeEvent<T> extends CustomEvent<{
  key: string;
  value: T;
}> {
  constructor(key: string, value: T) {
    super(LOCALSTORAGE_CHANGE_EVENT_TYPE, { detail: { key, value } });
  }
}

function useLocalStorageState<T>(key: string, initialValue?: T) {
  const [value, setValue] = useState<T | null>(initialValue ?? null);

  useEffect(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      setValue(JSON.parse(storageValue));
    }

    const handler = (e: Event) => {
      const { detail } = e as LocalStorageChangeEvent<T>;

      if (detail.key === key) {
        setValue(detail.value);
      }
    };

    const storageHandler = (e: StorageEvent) => {
      if (e.key === key && e.newValue != null) {
        const value = JSON.parse(e.newValue) as T;

        setValue(value);
      }
    };

    window.addEventListener(LOCALSTORAGE_CHANGE_EVENT_TYPE, handler);

    window.addEventListener("storage", storageHandler);

    return () => {
      window.removeEventListener(LOCALSTORAGE_CHANGE_EVENT_TYPE, handler);

      window.removeEventListener("storage", storageHandler);
    };
  }, [key]);

  const handleSetValue = useCallback<Dispatch<SetStateAction<T | null>>>(
    (updater) => {
      setValue((prev) => {
        const newValue = updater instanceof Function ? updater(prev) : updater;

        window.dispatchEvent(new LocalStorageChangeEvent(key, newValue));

        localStorage.setItem(key, JSON.stringify(newValue));

        return newValue;
      });
    },
    [key],
  );

  return [value, handleSetValue] as const;
}

export default useLocalStorageState;
