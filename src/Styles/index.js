import styled from "styled-components";
import ContentEditable from "react-contenteditable";

export const StyledContentEditable = styled(ContentEditable)`
  display: flex;
  margin-bottom: 0.4rem;
  &:focus-visible {
    outline: none;
  }
`;

export const InputDiv = styled.div`
  border-bottom: 1px black solid;
  margin: 2rem;
  height: 4rem;
  cursor: pointer;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
`;
export const StyledButton = styled.button`
  background: #d195cb;
  border: 0px solid transparent;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  color: #2a0404;
`;
export const MainInput = styled.input`
  margin: 2rem;
  display: flex;
  width: 50%;
  justify-content: flex-start;
  height: 2rem;
  border: 0px;
  border-bottom: 1px black solid;
  &:focus-visible {
    outline: none;
  }
`;

export const CardDiv = styled.div`
  margin: 2rem;
  width: 15rem;
  padding: 1rem;
  display: grid;
  justify-content: flex-start;
  background: #fff3f5;
  gap: 10px;
  text-align: justify;
`;
export const List = styled.span`
  font-size: 14px;
  font-weight: 350;
`;

export const TextSpan = styled.span`
  margin-left: 0.5rem;
  cursor: pointer;
  &:nth-child(3) {
    margin-left: 0.2rem;
  }
`;
