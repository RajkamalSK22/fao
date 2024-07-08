import { Layout } from 'antd';
import React, {useEffect} from 'react';
import styled from 'styled-components';
import ProjectDetails from './ProjectDetails';
import ChartDetails from './ChartDetails';

const { Content } = Layout;

const Container = styled(Content)`
    gap: 24px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`;

const ContainerDetails = styled(Content)`
    padding: 24px;
    gap: 12px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid #1018281A;
    box-shadow: 0 10 0 rgba(0, 0, 0, 0.1); 
`;

const ProjectTitle = styled.span`
    font-size: 28px;
    font-weight: 600;
    line-height: 40px;
    text-align: left;
    color: #7F56D9;
`;

const ProjectSummary = ({ project, onDownload  }) => {

    console.log(onDownload)
    useEffect(() => {
        if (onDownload) {
            window.print();
        }
    }, [onDownload]);

    return (
        <Container>
            <ContainerDetails>
                <ProjectTitle>{project}</ProjectTitle>
                <ProjectDetails project={project}/>
                 {onDownload && (
                    <PrintButton onClick={handlePrint} type="primary">Print</PrintButton>
                )}
            </ContainerDetails>
            <ChartDetails project={project}/>
        </Container>
    );
};

export default ProjectSummary;
