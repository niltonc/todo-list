import { FormEvent, useState, useEffect } from "react";
import Input from "components/Input";
import Button from "components/Button";
import Radio from "components/Radio";
import Label from "components/Label";
import * as S from "./styles";

export default function Home() {
  const [task, setTask] = useState("");
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [todoList, setTodoList] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    const storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);

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
              textDecoration: selectedTasks.includes(todo)
                ? "line-through"
                : "",
            }}
          >
            <Radio
              checked={selectedTasks.includes(todo)}
              onChange={() => handleSelectTask(todo)}
            />
            {todo}
          </Label>
        ))}
      </S.ListContainer>
    </S.Container>
  );
}
