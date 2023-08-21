/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import crossIcon from "../../assets/svg/crossIcon.svg";
import { useTasks } from "../../stores/useTasks";

const Box = styled.div`
  background: #fff;
  border: 1px solid
    ${({ $status }) =>
      $status === 0 ? "#F3E1DF" : $status === 1 ? "#EAE2CF" : "#DDEED9"};
  border-radius: 4px;
  padding: 12px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  line-height: 14.52px;
  font-weight: 600;
  & img {
    opacity: 0;
    cursor: pointer;
  }
  &:hover img {
    opacity: 1;
  }
`;
const Text = styled.div`
  flex: 1;
  text-decoration: ${({ $lineThrough }) =>
    $lineThrough ? "line-through" : "none"};
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  border: 1px solid
    ${({ $status }) =>
      $status === 0 ? "#F3E1DF" : $status === 1 ? "#EAE2CF" : "#DDEED9"};
`;
export default function TaskItem({ status, index }) {
  const task = useTasks((state) => state.tasks[status][index]);
  const tickTask = useTasks((state) => state.tickTask);
  const removeTask = useTasks((state) => state.removeTask);
  const addTask = useTasks((state) => state.addTask);

  function handleChangeTick(e) {
    tickTask(status, index, e.target.checked);
    setTimeout(() => {
      if (status < 2) {
        removeTask(status, index);
        addTask(2, task.label, true);
      } else {
        removeTask(status, index);
        addTask(0, task.label, false);
      }
    }, 3000);
  }
  return (
    <Box $status={status}>
      <Checkbox
        checked={task.isDone}
        type="checkbox"
        $status={status}
        onChange={handleChangeTick}
      />
      <Text $lineThrough={status === 2 && task.isDone}>{task.label}</Text>
      <img src={crossIcon} alt="" />
    </Box>
  );
}
