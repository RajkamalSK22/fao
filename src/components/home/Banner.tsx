import {Layout} from 'antd';
import React from 'react';
import styled from 'styled-components';
import Summary from './Summary';
import ProjectsTable from './ProjectsTable';

const { Content } = Layout;

const BannerContainer = styled(Content)`
    padding: 40px 80px;
    display: flex;
    flex-direction: column;
    background: transparent;
`;

const Banner = () => {
    return (
        <BannerContainer>
            <Summary/>
            <ProjectsTable />
        </BannerContainer>
    );
}

export default Banner;