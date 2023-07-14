import { FormEvent, useState } from "react";
import Input from "components/Input";
import Button from "components/Button";
import Radio from "components/Radio";

import * as S from "./styles";
import Label from "components/Label";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [todoList, setTodoList] = useState<string[]>([]);

  function handleAddTodoList(event: FormEvent) {
    event.preventDefault();
    if (task === "") return;
    setTodoList((oldTodoList) => [...oldTodoList, task]);
    setTask("");
  }

  function handleSelectTask(todo: string) {
    if (selectedTasks.includes(todo)) {
      setSelectedTasks(selectedTasks.filter((item) => item !== todo));
    } else {
      setSelectedTasks([...selectedTasks, todo]);
    }
  }

  return (
    <S.Container>
      <form
        onSubmit={handleAddTodoList}
        style={{
          height: 120,
          marginTop: 60,
          justifyContent: "space-around",
        }}
      >
        <Input
          type="text"
          value={task}
          placeholder="Insira a tarefa"
          onChange={(event) => setTask(event.target.value)}
        />
        <Button type="submit">Adicionar</Button>
      </form>
      <S.ListContainer>
        {todoList.map((todo) => (
          <Label
            key={todo}
            style={{
              marginTop: 10,
              textDecoration: selectedTasks.includes(todo)
                ? "line-through"
                : "",
            }}
          >
            <Radio
              type="radio"
              checked={selectedTasks.includes(todo)}
              onChange={() => handleSelectTask(todo)}
            />
            {todo}
          </Label>
        ))}
      </S.ListContainer>
    </S.Container>
  );
};

export default TodoList;
