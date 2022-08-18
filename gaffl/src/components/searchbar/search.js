import styled from 'styled-components'


export const SearchField = styled.div`
position: fixed;
top: 90px;
left: 150px;
box-size: borderbox;
padding:300px 400px;
@media screen and (max-width: 1024px) {
  display: none;
}

border-radius: 15px;
background: #fff;

  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;