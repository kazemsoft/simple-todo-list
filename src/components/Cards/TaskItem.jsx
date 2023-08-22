/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { useTasks } from "../../stores/useTasks";
import { CrossIcon } from "../../assets/svg";
import Paper from "../Paper/Paper";

const Text = styled.div`
  flex: 1;
  text-decoration: ${({ $lineThrough }) =>
    $lineThrough ? "line-through" : "none"};
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  line-height: 14.52px;
  font-weight: 600;
  animation: fadeIn 1s;
  & svg {
    opacity: 0;
    cursor: pointer;
  }
  &:hover svg {
    opacity: 1;
  }
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  color: ${({ $status }) =>
    $status === 0 ? "#F3E1DF" : $status === 1 ? "#EAE2CF" : "#DDEED9"};
`;
export default function TaskItem({ status, index }) {
  const task = useTasks((state) => state.tasks[status][index]);
  const tickTask = useTasks((state) => state.tickTask);
  const removeTask = useTasks((state) => state.removeTask);
  const addTask = useTasks((state) => state.addTask);
  const deleteTask = useTasks((state) => state.deleteTask);

  function handleChangeTick(e) {
    tickTask(status, index, e.target.checked);
    e.currentTarget.parentNode.parentNode.style =
      "opacity:0.5; pointer-events:none;animation:fadeOut 3s;";
    setTimeout(() => {
      if (status < 2) {
        removeTask(status, index);
        addTask(2, task.label, true);
      } else {
        removeTask(status, index);
        addTask(0, task.label, false);
      }
    }, 2900);
  }
  function handleDelete(e, status, index) {
    e.currentTarget.parentNode.style =
      "pointer-events:none;animation:fadeOut 1s;";
    setTimeout(() => deleteTask(status, index), 900);
  }
  return (
    <Paper
      variant={status === 0 ? "alert" : status === 1 ? "warning" : "success"}
    >
      <Container>
        <Checkbox
          checked={task.isDone}
          type="checkbox"
          $status={status}
          onChange={handleChangeTick}
        />
        <Text $lineThrough={task.isDone}>{task.label}</Text>
        <CrossIcon onClick={(e) => handleDelete(e, status, index)} />
      </Container>
    </Paper>
  );
}
