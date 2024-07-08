import styled from 'styled-components';
import { Button } from 'antd';

export const FunderLabel = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 50%;
  color: #000;
  background-color: ${({ funder }) => (funder === 'GEF' ? '#ECFDF3' : '#F2F4F7')};
  color: ${({ funder }) => (funder === 'GEF' ? '#027A48' : '#344054')};
  font-weight: 500;
`;

export const ViewLink = styled.a`
  color: #8c61ff;
  font-weight: 500;
`;

export const DateLabel = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 50%;
  color: #000;
  color: #667085;
  font-weight: 400;
  font-size: 14px;
`;

export const TableButton = styled(Button)`
    padding: 10px 16px;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    font-size: 14px;
    font-weight: 600;
`;