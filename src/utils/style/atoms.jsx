import styled from 'styled-components';

export const AuthorInfo = styled.span`
     position: absolute;
     right: 5px;
     bottom: 5px;
     font-size: 0.6rem;
     & a {
          color: #fff;
          text-decoration: none;
          opacity: 0.7;
     }
     & a:hover {
          opacity: 1;
          z-index: 10;
     }
`;
