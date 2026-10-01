import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const STORAGE_KEY = "actionItems";
  const [actions, setActions] = useState([]);
  useEffect(() => {
    let saved = localStorage.getItem(STORAGE_KEY);
    saved && setActions(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (actions.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(actions));
    }
  }, [actions]);

  const dispatch = (action) => {
    switch (action.type) {
      case "SET":
        setActions(action.actions);
        return;
      case "ADD":
        setActions((prev) => [
          ...prev,
          { desc: action?.desc, id:action.id },
        ]);
        return;
      case "EDIT":
        setActions((prev) =>
          prev.map((act) =>
            act.id === action.id ? { ...act, desc: action.desc } : act,
          ),
        );
        return;
      case "DELETE":
        setActions((prev) => prev.filter((act) => act.id !== action.id));
        return;
      default:
        return;
    }
  };

  return [actions, setActions, dispatch];
};
export default useLocalStorage;
