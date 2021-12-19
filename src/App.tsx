import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from "./store/todo/selectors";
import { fetchTodoRequest } from "./store/todo/actions";

const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const todos = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  return (
      <div style={{ padding: "15px" }}>
        {pending ? (
            <div>Loading...</div>
        ) : error ? (
            <div>Error</div>
        ) : (
            todos.map((todo: { id: React.Key | null | undefined; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, index: number) => (
                <div style={{ marginBottom: "10px" }} key={todo.id}>
                  {++index}. {todo.title}
                </div>
            ))
        )}
      </div>
  );
};

export default App;