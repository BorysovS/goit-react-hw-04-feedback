import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  padding: 12px 20px;
  border: 1px solid transparent;
  border-radius: 12px;
  background-color: #5da17a;
  color: white;
  font-size: 18px;
  font-weight: 500;
  text-shadow: 1px 1px 2px #0a0000, 0 0 1em #0e14ad, 0 0 0.2em #21041e;
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #14512e;
  }
`;

export const FeedbackWrap = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 24px;
`;
