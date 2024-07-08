import React from 'react';
import Logo from '../svgIcons/Logo';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';

const Container = styled.div`
    max-width: 360px;
    padding: 151px 0px 200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 56px;
    align-items: center;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 56px;
    align-items: center;
`;

const StyledForm = styled(Form)`
    width: 100%;
    flex-direction: column;
    align-items: center;

    .ant-form-item{
        width: 100%;
    }

    .ant-btn-primary {
        width: 100%;
        background: #7F56D9;
        height: 44px;
        padding: 10px 18px 10px 18px;
        gap: 8px;
        border-radius: 8px;
        border: 1px;
    }  
`;
const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const TitleLable = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #344054;
`;

const ImageContainer = styled.div`
    max-width: 360px;
    margin: auto;
`;

const NoteDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
`;

const LoginText = styled.div`
    font-size: 30px;
    font-weight: 600;
    line-height: 38px;
    color: #101828;
`;

const LoginNote = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #667085;
`;

const Login = () => {
    const onFinish = (values: any) => {
    console.log('Received values:', values);
  };

    return(
        <Container>
            <LogoContainer>
                <ImageContainer>
                    <Logo width='243px' height='64px' alt='Logo' />
                </ImageContainer>
                <NoteDescription>
                    <LoginText>Log in</LoginText>
                    <LoginNote>Welcome back! Please enter your details.</LoginNote>
                </NoteDescription>
            </LogoContainer>
            <FormContainer>
                <StyledForm name="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                    <InputsContainer>
                        <TitleLable>Email</TitleLable>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="Username" />
                        </Form.Item>
                    </InputsContainer>
                    <InputsContainer>
                    <TitleLable>Password</TitleLable>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                    </InputsContainer>
                    
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember for 30 days</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                        Sign in
                        </Button>
                    </Form.Item>
                    </StyledForm>
            </FormContainer>
        </Container>
    );
}

export default Login;
