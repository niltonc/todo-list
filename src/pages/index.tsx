import { FormEvent, useState, useEffect } from "react";
import Input from "components/Input";
import Button from "components/Button";
import Radio from "components/Radio";
import Label from "components/Label";
import * as S from "./styles";

export default function Home() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [selectedTasks, setSelectedTasks] = useState<{
    [key: string]: boolean;
  }>({});

  // Salva os dados no localStorage sempre que houver alterações na todoList
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  // Carrega os dados do localStorage quando o componente for montado
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
    setSelectedTasks((prevSelectedTasks) => {
      const isTaskSelected = prevSelectedTasks[todo];
      return {
        ...prevSelectedTasks,
        [todo]: !isTaskSelected,
      };
    });
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
          placeholder="Insert the task"
          onChange={(event) => setTask(event.target.value)}
        />
        <Button type="submit">To add</Button>
      </form>
      <S.ListContainer>
        {todoList.map((todo) => (
          <Label
            key={todo.length}
            style={{
              textDecoration: selectedTasks[todo] ? "line-through" : "",
            }}
          >
            <Radio
              checked={selectedTasks[todo]}
              onChange={() => handleSelectTask(todo)}
            />
            {todo}
          </Label>
        ))}
      </S.ListContainer>
    </S.Container>
  );
}
