import React from 'react';
import styled from 'styled-components';

const Container = styled.header({
  backgroundColor: 'blue',
});

const Header: React.FC = () => (
  <Container>
    <h1>Developer Applicant Interview Test</h1>
  </Container>
);

export default Header;