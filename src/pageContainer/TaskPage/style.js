import styled from 'styled-components';

export const Task = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskWrapper = styled.div`
  width: 65rem;
  height: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.8125rem;
`;

export const Title = styled.h1`
  color: #212121;
  font-weight: 700;
  font-size: 1.75rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  select {
    width: 4.5rem;
    height: 2rem;
    border-radius: 0.25rem;
    border: 0.0625rem solid #6142f8;
    font-size: 1rem;
    font-weight: 400;
    color: #6142f8;
    outline: none;
    padding-left: 0.75rem;
  }
`;

export const TaskList = styled.div`
  width: 100%;
  margin-top: 1.25rem;
`;

export const TaskItem = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0625rem solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }
`;

export const TaskNum = styled.span`
  width: 33px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #888;
`;

export const TaskTitle = styled.span`
  width: 100%;
  padding-left: 1.75rem;
  color: #212121;
`;

export const TaskDate = styled.span`
  white-space: nowrap;
  padding-right: 2rem;
  color: #888;
`;
