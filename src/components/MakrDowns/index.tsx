import React, { useEffect } from 'react';
import { Button } from 'antd';
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import { Container } from './styles';

const MakrDowns: React.FC = () => {
  useEffect(() => {
    new Vditor('contentEditor')
  }, [])
  return (
    <Container>


      <div
        id="contentEditor"
        style={{
          minHeight: 600
        }}
      />
      <Button type="primary">提交</Button>

    </Container>
  );
}

export default MakrDowns;