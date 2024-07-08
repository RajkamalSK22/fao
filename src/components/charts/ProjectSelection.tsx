import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { data } from '@/constants/project';
import { Select } from 'antd';
import { TableButton } from '@/components/common/styles';
import { AiOutlineDownload } from "react-icons/ai";

const { Option } = Select;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const SelectProject = styled(Select)`
    width: 828px;
    height: 48px;

    .ant-select-selection-item {
        padding: 12px 16px;
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        text-align: left;
        color: #101828;
    }
`;

const Descriptions = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
`;

const FilterProjects = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProjectSelection = ({ onProjectChange, onDownload  }) => {
    const [projects, setProjects] = useState([]);
    const [download, setDownload] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
                const projectNames = data.map(item => item.name);
                setProjects(projectNames);
        };

        fetchProjects();
    }, []);

     const handleProjectSelect = (value: any) => {
        onProjectChange(value); 
    };

    // const handleDownload = (value) => {
    //     setDownload(value); 
    // };
    
     const handleDownload = (value: boolean|((prevState: boolean) => boolean)) => {
        setDownload(value);
        if (onDownload) {
            onDownload(value);
        }
    };

    return (
        <Container>
            <FilterProjects>
                <SelectProject placeholder="Select a project" onChange={handleProjectSelect}>
                    {projects.map((project, index) => (
                        <Option key={index} value={project}>
                            {project}
                        </Option>
                    ))}
                </SelectProject>
                <TableButton onClick={handleDownload}><AiOutlineDownload />Download</TableButton>
            </FilterProjects>
            <Descriptions>Select a project to update the charts.</Descriptions>
        </Container>
    );
};

export default ProjectSelection;
