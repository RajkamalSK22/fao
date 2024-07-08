import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Components = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    alert('Project successfully created');
  };

  return (
    <Container>
      <h2>Components</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="component1" label="Component 1">
          <Input.TextArea placeholder="Type description" />
          <Form.Item name="outcome1.1" label="Outcome 1.1">
            <Input.TextArea placeholder="Write a description" />
            <Form.Item name="output1.1.1" label="Output 1.1.1">
              <Input.TextArea placeholder="Type description" />
              <Form.Item name="activity1.1.1.1" label="Activity 1.1.1.1">
                <Input.TextArea placeholder="Type description" />
                <Input placeholder="Activity indicator 1" />
              </Form.Item>
            </Form.Item>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Complete</Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Components;
