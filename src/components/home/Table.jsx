import React, { useState } from 'react';
import { Table, Input } from 'antd';
import styled from 'styled-components';
import { MdOutlineDateRange } from "react-icons/md";
import { IoFilterSharp, IoSearch  } from "react-icons/io5";
import { columns, data } from '@/constants/project'
import { TableButton } from '@/components/common/styles'

const StyledTable = styled(Table)`

    border: 1px solid #1018281A;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1); 

  .ant-table-thead > tr > th {
    background-color: transparent;
    font-weight: 500;
    font-size: 12px;
    color: #667085;
    padding: 16px;
    align-items: center;
  }

  .ant-table-tbody > tr > td {
    font-size: 14px;
    color: #101828;
    font-weight: 500;
    padding: 16px;
    background-color: transparent;
  }

  .ant-table-tbody > tr:hover {
    background-color: #f5f6fa;
  }

  .ant-table-tbody > tr > td a {
    color: #8c61ff;
    font-weight: 500;
  }

  .ant-input {
    border-radius: 8px;
    padding: 10px 15px;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .ant-btn {
    border-radius: 8px;
    font-size: 14px;
  }

  .ant-table-pagination {
    display: none;
  }
`;

const FilterAndDate = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #EAECF0;
  border-bottom: 1px solid #EAECF0;
  padding: 12px 16px;
  border: 1px solid #1018281A;
  box-shadow: 0 px 0px rgba(0, 0, 0, 0.1); 
`;


const SearchContainer = styled.div`
    display: flex;
    width: 400px;
    gap: 8px;
    border-radius: 8px;
    align-items: center;
    color: #667085;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding: 8px 14px;
    border: 1px solid #D0D5DD;
`;

const SearchInputStyled = styled(Input)`
    width: 380px;
    border: none;
    outline: none;
    padding: 0px;
`;

const TableData = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredData, setFilteredData] = useState(data);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.funders.toLowerCase().includes(value.toLowerCase()) ||
      item.date.toLowerCase().includes(value.toLowerCase()) ||
      item.budget.toLowerCase().includes(value.toLowerCase()) ||
      item.country.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

    const handleFilterClick = () => {
    setIsFiltering(!isFiltering);
    if (!isFiltering) {
      const filtered = data.filter(item => item.funders === 'GEF');
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };
  return(
    <>
      <Header>
        <SearchContainer>
          <IoSearch />
          <SearchInputStyled placeholder="Search for projects" value={searchInput} onChange={handleSearchChange} />
        </SearchContainer>
        <FilterAndDate>
          <TableButton><MdOutlineDateRange />Date</TableButton>
          <TableButton onClick={handleFilterClick}><IoFilterSharp />Filter</TableButton>
        </FilterAndDate>
      </Header>
      <StyledTable columns={columns} dataSource={filteredData} />
    </>
  );
};

export default TableData;
