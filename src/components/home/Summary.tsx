import { Layout, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchedDetails } from '@/constants/project'
import {ROUTES} from '@/constants/routes';
import { useHistory } from 'react-router-dom';

const SummaryContainer = styled(Layout)`
    padding: 24px;
    gap: 80px;
    border-radius: 8px 8px 0 0;
    background: transparent;
    border: 1px solid #1018281A;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.1); 
`;

const SummaryDetails = styled.div`
    gap: 16px;
    display: flex;
    flex-direction: column;
`;

const ProjectAdd = styled.div`
    width: 100%;
    height: 40px;
    justify-content: space-between;
    display: flex;
`;

const DetailsNumber = styled.div`
    justify-content: space-between;
    display: flex;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const DetailsTitle = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;

const Description = styled.span`
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    color: #101828;
`;

const Counts = styled.span`
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    color: #101828;
`;

const AddProjectButton = styled(Button)`
    background-color: #8c61ff;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0 20px;
    height: 40px;
    font-size: 14px;
    &:hover {
        background-color: #7b52e3;
    }
`;

const Summary = () => {
    const [detailsData, setDetailsData] = useState([]);
    // const history = useHistory();

    useEffect(() => {
            setDetailsData(fetchedDetails);
    }, []);

    const handleAddProjectClick = () => {
        ROUTES.ADDPROJECT;
    };

    return (
        <SummaryContainer>
            <SummaryDetails>
                <ProjectAdd>
                    <Description>Dashboard</Description>
                    <AddProjectButton onClick={handleAddProjectClick}>+ Add Project</AddProjectButton>
                </ProjectAdd>
                <DetailsNumber>
                    {detailsData.map((detail, index) => (
                        <Details key={index}>
                            <DetailsTitle>{detail.title}</DetailsTitle>
                            <Counts>{detail.count}</Counts>
                        </Details>
                    ))}
                </DetailsNumber>
            </SummaryDetails>
        </SummaryContainer>
    );
}

export default Summary;
