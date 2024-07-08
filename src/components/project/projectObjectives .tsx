import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const ProjectObjectives = () => {
  const router = useRouter();

  const onFinish = (values) => {
    console.log('Success:', values);
    router.push('/components');
  };

  return (
    <Container>
      <h2>Project Objectives</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="projectObjectives" label="Project objectives" rules={[{ required: true, message: 'Please input the project objectives!' }]}>
          <Input.TextArea placeholder="Write a description" />
        </Form.Item>
        <Form.Item name="component1" label="Component 1">
          <Input.TextArea placeholder="Type description" />
        </Form.Item>
        <Form.Item name="component2" label="Component 2">
          <Input.TextArea placeholder="Type description" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Next</Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default ProjectObjectives;
