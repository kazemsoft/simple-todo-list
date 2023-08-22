/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import { PlusIcon } from "../../assets/svg/PlusIcon";
import { styled } from "styled-components";
import { useEffect, useRef, useState } from "react";
import Paper from "../Paper/Paper";
import { useTasks } from "../../stores/useTasks";

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: column nowrap;
  gap: 12px;
  & label {
    font-size: 10px;
    color: gray;
  }
  & textarea {
    width: calc(100% - 10px);
    border: 0;
    outline: none;
    resize: none;
    font-family: "Inter";
  }
  & .cancel svg {
    transform: rotate(45deg);
    transition: all 500ms;
  }
`;

export default function NewButton({ hasNewButton, status, ...rest }) {
  const [open, setOpen] = useState(false);
  const tx = useRef();
  const addMultiTasks = useTasks((state) => state.addMultiTasks);

  function handleKeyUp(e) {
    if (e.key === "Escape") {
      setOpen(false);
    }
    if (e.key === "Enter") {
      const text = tx.current.value;
      const _tasks = text.split("\n");
      const tasks = _tasks.filter((line) => line.trim() !== "");
      if (tasks?.length) addMultiTasks(status, tasks);
      setOpen(false);
    }
  }

  useEffect(() => {
    if (!open) return;
    tx.current.addEventListener("input", OnInput, false);
    function OnInput() {
      this.style.height = 0;
      this.style.height = this.scrollHeight + "px";
    }
  }, [open]);

  if (!hasNewButton) return <></>;
  return (
    <Container>
      {open && (
        <Paper
          variant={
            status === 0 ? "alert" : status === 1 ? "warning" : "success"
          }
        >
          <textarea
            onKeyUp={handleKeyUp}
            placeholder="Add your new task here ..."
            ref={tx}
          />
        </Paper>
      )}
      {open && <label>Hit Enter to submit tasks or Escape to Cancel.</label>}
      <Button
        $color={status === 0 ? "alert" : status === 1 ? "warning" : "success"}
        startIcon={<PlusIcon />}
        className={open ? "cancel" : ""}
        onClick={() => setOpen((prev) => !prev)}
        {...rest}
      >
        {open ? "Cancel" : "New"}
      </Button>
    </Container>
  );
}
