import styled, { css } from 'styled-components';
import { colors } from './global';

export const Button = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 30px;
  margin: 0 24px;
  border: none;
  color: ${colors.black};
  background-color: white;
  cursor: pointer;

  ${(props) =>
    props.outline &&
    css`
      background-color: transparent;
      border: 1px solid ${colors.black};
    `}

  ${(props) =>
    props.primary &&
    css`
      background-color: ${colors.primary};
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: ${colors.secondary};
    `}
`;

export const SearchBar = styled.div`
  width: 700px;
  height: 50px;
  position: relative;
  margin: 0 24px 40px;

  svg {
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
  }

  input {
    width: 100%;
    height: 100%;
    padding-left: 70px;
    border-radius: ${(props) => (props.squared ? '0px' : '30px')};
    border: none;
    outline: none;

    &::placeholder {
      color: ${colors.gray};
    }
  }
`;

export const Subhead = styled.h1`
  font-weight: bold;
  margin: 160px 0 48px;
`;
