import React from "react";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { StyledPaginationWrapper } from "../styles/Pagination.styled";

function Pagination({ activeIndex, setActiveIndex, pages }) {
  const iconSize = {
    width: "20px",
    height: "20px",
    cursor: "pointer",
  };
  const iconSizeBig = {
    width: "25px",
    height: "25px",
    cursor: "pointer",
  };

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= pages.length + 1) {
      newIndex = pages.length;
    }

    setActiveIndex(newIndex);
  }

  return (
    <StyledPaginationWrapper>
      <AiOutlineLeft
        onClick={() => updateIndex(activeIndex - 1)}
        style={iconSizeBig}
      />
      <div>
        {activeIndex == 0 ? (
          <IoMdRadioButtonOn
            onClick={() => setActiveIndex(0)}
            style={iconSize}
          />
        ) : (
          <IoMdRadioButtonOff
            onClick={() => setActiveIndex(0)}
            style={iconSize}
          />
        )}
        {pages.map((page, index) =>
          index + 1 === activeIndex ? (
            <IoMdRadioButtonOn
              onClick={() => setActiveIndex(index + 1)}
              style={iconSize}
            />
          ) : (
            <IoMdRadioButtonOff
              onClick={() => setActiveIndex(index + 1)}
              style={iconSize}
            />
          )
        )}
      </div>
      <AiOutlineRight
        onClick={() => updateIndex(activeIndex + 1)}
        style={iconSizeBig}
      />
    </StyledPaginationWrapper>
  );
}

export default Pagination;
