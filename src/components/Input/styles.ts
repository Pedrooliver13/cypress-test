import styled from 'styled-components';

import * as C from 'styles/constants';

type Props = {
  hasError?: boolean;
  disabled?: boolean;
};

export const Wrapper = styled.div<Props>`
  position: relative;
  max-width: 100%;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  .label {
    line-height: 2.5;
    font-size: 2rem;
    color: ${C.COLOR_GRAY};
  }
  .input {
    width: 100%;
    border: 2px solid ${C.COLOR_GRAY_LIGHT};
    border-radius: 0.8rem;
    padding: 1.6rem 1rem;
    font-size: 1.6rem;
    color: ${C.COLOR_GRAY};
    outline: 0;
    transition: border 0.5s ease;
    ${({ disabled }) => disabled && `cursor: not-allowed; opacity: 0.5;`};
    ${({ hasError }) => hasError && `border: 2px solid ${C.COLOR_ERROR}`};
  }
  .icon {
    position: absolute;
    max-width: 100%;
    width: 2.5rem;
    bottom: 3.2rem;
    right: 1.5rem;
    cursor: pointer;
    transition: color 0.5s ease;
    &:hover {
      color: ${C.COLOR_PRIMARY};
    }
  }
  .error {
    font-weight: lighter;
    font-size: 1.6rem;
    line-height: 1.5;
    color: ${C.COLOR_ERROR};
  }
`;
