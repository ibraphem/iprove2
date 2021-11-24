import styled from "styled-components";

export const ApiDocumentStyled = styled.div`
  backgroundImage: 'url(${({ theme }) => theme.colors.abtPg} !important)';
  h1{
      color: ${({ theme }) => theme.colors.secondary};
  }
  }
`;
