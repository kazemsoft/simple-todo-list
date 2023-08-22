/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { useTasks } from "../../stores/useTasks";
import TaskItems from "./TaskItems";
import TaskItem from "./TaskItem";
import Text from "../Typography/Text";
import NewButton from "./NewButton";

const Box = styled.div`
  border-radius: 10px;
  padding: 20px;
  background: ${({ $status }) =>
    $status === 0 ? "#FEF4F3" : $status === 1 ? "#FFFBF2" : "#F4F9F3"};
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ $status }) =>
    $status === 0 ? "#6E1E29" : $status === 1 ? "#795B19" : "#286C1A"};
`;
const Title = styled.div`
  font-size: 15px;
  line-height: 18.15px;
  font-weight: 600;
`;
const NumberOfTasks = styled.div`
  opacity: 0.4;
  font-weight: 500;
  font-size: 12px;
  line-height: 14.52px;
`;

export default function Card({ status, hasNewButton = true }) {
  const allTasks = useTasks((state) => state.tasks);
  const tasks = allTasks[status];
  return (
    <Box $status={status}>
      <Head $status={status}>
        <Title>
          {status === 0 ? "Todo" : status === 1 ? "Doing 💪" : "Done 🎉"}
        </Title>
        <NumberOfTasks>{`${tasks.length} Task${
          tasks.length > 1 ? "s" : ""
        }`}</NumberOfTasks>
      </Head>
      <TaskItems>
        {tasks.length ? (
          tasks.map((task, index) => (
            <TaskItem
              key={`${task.label + index}`}
              status={status}
              index={index}
              onChange={() => null}
            >
              {task.label}
            </TaskItem>
          ))
        ) : (
          <Text>No task exists here ...</Text>
        )}
      </TaskItems>
      <NewButton hasNewButton={hasNewButton} status={status} />
    </Box>
  );
}
