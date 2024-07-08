import {Layout} from 'antd';
import React from 'react';
import styled from 'styled-components';
import TableData from '@/components/home/Table';

const TableContainer = styled(Layout)`
    background: transparent;
    height: 556px;
    gap: 0px;
    border-radius: 0px 0px 8px 8px;
`;

const ProjectsTable = () => {
    return (
        <TableContainer>
            <TableData />
        </TableContainer>
    );
}

export default ProjectsTable;