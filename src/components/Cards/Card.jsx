/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const Box = styled.div`
  border-radius: 10px;
  padding: 20px;
  background: ${({ status }) =>
    status === 0 ? "#FEF4F3" : status === 1 ? "#FFFBF2" : "#F4F9F3"};
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  color: ${({ status }) =>
    status === 0 ? "#6E1E29" : status === 1 ? "#795B19" : "#286C1A"};
  font-size: 15px;
  line-height: 18.15px;
  font-weight: 600;
`;

export default function Card({ status, tasks }) {
  return (
    <Box status={status}>
      <Head>
        <Title status={status}>
          {status === 0 ? "Todo" : status === 1 ? "Doing 💪" : "Done 🎉"}
        </Title>
      </Head>
    </Box>
  );
}
