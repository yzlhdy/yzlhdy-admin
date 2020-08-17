import styled from 'styled-components';

export const Container = styled.div`
    background:var(--primary);
    width:100%;
    height:100%;
`;

export const Logins = styled.div`
  width:400px;
  height:450px;
  border:1px solid var(--white);
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);

  padding:40px 30px;

  >h1{
    text-align:center;
    margin-bottom:40px;
    color:var(--white);
  }
`
