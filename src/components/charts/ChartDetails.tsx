import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import Image from 'next/image';
import { data } from '@/constants/project';

const { Content } = Layout;

const Container = styled(Content)`
    display: flex;
    gap: 24px;
`;

const LeftChart = styled.div`
    padding: 24px;
    display: flex;
    width: 75%;
    flex-direction: column;
    border-radius: 8px;
    gap: 24px;
    border: 1px solid #1018281A;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.1); 
`;

const RightChart = styled.div`
    display: flex;
    padding: 24px;
    width: 25%;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid #1018281A;
    box-shadow: 0 10 0 rgba(0, 0, 0, 0.1); 
`;

const ChartDescription = styled.span`
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
    text-align: left;
    color: #101828;
`;

const Charts = styled(Image)`
    width: 100%;
    height: 100%;
`;

const ChartDetails = ({ project }) => {
    const projectDetails = data.find(item => item.name === project);

    if (!projectDetails) {
        return <Container>No data found for project "{project}"</Container>;
    }

    const { leftimage, rightimage, leftdescription, rightdescription } = projectDetails;

    return (
        <>
            {[0, 1].map((index) => (
                <Container key={`container_${index}`}>
                    <LeftChart>
                        <ChartDescription>{leftdescription[index].description}</ChartDescription>
                        <Charts
                            src={leftimage[index].src}
                            alt={`Left Chart ${index + 1}`}
                            width={780}
                            height={300}
                        />
                    </LeftChart>
                    <RightChart>
                        <ChartDescription>{rightdescription[index].description}</ChartDescription>
                        <Charts
                            src={rightimage[index].src}
                            alt={`Right Chart ${index + 1}`}
                            width={428}
                            height={340}
                        />
                    </RightChart>
                </Container>
            ))}
        </>
    );
};

export default ChartDetails;
