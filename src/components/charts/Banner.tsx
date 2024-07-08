import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectSelection from '@/components/charts/ProjectSelection';
import ProjectSummary from './ProjectSummary';
import { Layout } from 'antd';

const { Content } = Layout;

const BannerContainer = styled(Content)`
    padding: 40px 80px;
    display: flex;
    flex-direction: column;
    background: transparent;
    gap: 24px;
`;

const Banner = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectChange = (value: React.SetStateAction<null>) => {
        setSelectedProject(value);
    };

    return (
        <BannerContainer>
            <ProjectSelection onProjectChange={handleProjectChange} onDownload={undefined} />
            <ProjectSummary project={selectedProject} onDownload={undefined} />
        </BannerContainer>
    );
};

export default Banner;
