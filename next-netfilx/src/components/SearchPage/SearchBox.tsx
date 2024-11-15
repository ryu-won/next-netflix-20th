import styled from 'styled-components';
import Image from 'next/image';
import React, { useState } from 'react';
import search from '../../../public/SearchPage/search.svg';
import Xbuttom from '../../../public/SearchPage/X.svg';

const SearchBox: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value); // SearchPage로 검색어 전달
  };

  return (
    <SearchWrapper>
      <InputWrapper>
        <IconWrapper>
          <Image src={search} alt="search" />
        </IconWrapper>
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Search for a show, movie, genre, e.t.c."
        />
        {input && (
          <ClearButton onClick={() => setInput("")}>
            <Image src={Xbuttom} alt="Clear" />
          </ClearButton> // input에 값이 입력되면 나타나게 함.
        )}
      </InputWrapper>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  margin-top: 44px;
  position: relative;
  width: 375px;
  min-height: 52px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: space-between; /* 요소 간의 간격을 고르게 배치 */
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: #424242;
  outline: none;
  border: none;
  padding-left: 50px; /* 아이콘이 겹치지 않도록 왼쪽 패딩 */
  color: white;
  font-size: 15px;
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 10px; /* 아이콘을 왼쪽에 배치 */
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const ClearButton = styled.div`
  position: absolute;
  display: flex;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export default SearchBox;
