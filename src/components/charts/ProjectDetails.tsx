import { Layout } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { data as projectsData } from '@/constants/project';

const { Content } = Layout;

const Container = styled(Content)`
    display: flex;
    justify-content: space-between;
`;

const ProjectSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Description = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #101828;
`;

const DescriptionDetails = styled.span`
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    text-align: left;
`;


const ProjectDetails = ({ project }) => {
    const projectDetails = projectsData.find(item => item.name === project);

    if (!projectDetails) {
        return <Container>No data found for project "{project}"</Container>;
    }

    const { funders, date, budget, country, target, status } = projectDetails;

    return (
        <Container>
            <ProjectSummary><Description>Duration</Description><DescriptionDetails> {date}</DescriptionDetails></ProjectSummary>
            <ProjectSummary><Description>Budget</Description><DescriptionDetails> {budget}</DescriptionDetails></ProjectSummary>
            <ProjectSummary><Description>Funding Agency</Description><DescriptionDetails> {funders}</DescriptionDetails></ProjectSummary>
            <ProjectSummary><Description>Target</Description><DescriptionDetails> {target}</DescriptionDetails></ProjectSummary>
            <ProjectSummary><Description>Country/State</Description><DescriptionDetails> {country}</DescriptionDetails></ProjectSummary>
            <ProjectSummary><Description>Status</Description><DescriptionDetails style={{color: '#32AD28'}}> {status}</DescriptionDetails></ProjectSummary>
        </Container>
    );
};

export default ProjectDetails;
