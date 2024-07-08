import React from 'react';
import { Form, Input, Button, Radio, Select, DatePicker } from 'antd';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
const { Option } = Select;

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const ProjectDetails = () => {
  const router = useRouter();

  const onFinish = (values) => {
    console.log('Success:', values);
    router.push('/objectives');
  };

  return (
    <Container>
      <h2>Project Details</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="projectName" label="Project name" rules={[{ required: true, message: 'Please input the project name!' }]}>
          <Input placeholder="Write a description" />
        </Form.Item>
        <Form.Item name="implementationLevel" label="Implementation level">
          <Radio.Group>
            <Radio value="national">National level</Radio>
            <Radio value="state">State level</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="country" label="Country">
          <Select placeholder="Select country">
            <Option value="india">India</Option>
            <Option value="thailand">Thailand</Option>
          </Select>
        </Form.Item>
        <Form.Item name="budget" label="Budget">
          <Input.Group compact>
            <Input style={{ width: '80%' }} placeholder="Write a description" />
            <Select defaultValue="USD">
              <Option value="USD">USD</Option>
            </Select>
            <DatePicker.RangePicker />
          </Input.Group>
        </Form.Item>
        <Form.Item name="targetStatus" label="Target and Status">
          <Input placeholder="Target" />
          <Select placeholder="Select status">
            <Option value="ongoing">Ongoing</Option>
            <Option value="completed">Completed</Option>
          </Select>
        </Form.Item>
        <Form.Item name="fundingAgency" label="Funding agency and Partners">
          <Select placeholder="Select Funding agency">
            <Option value="gef">GEF</Option>
          </Select>
          <Input placeholder="Partners" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Next</Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default ProjectDetails;
