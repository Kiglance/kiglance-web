import React from "react";

const HeaderLine = () => {
  return (
    <div className="flex items-center gap-1 w-[80px] sm:pt-[5px]">
      <div className="w-[60px] h-[6px] bg-[#3E68FF] rounded-xl"></div>
      <div className="w-[6px] h-[6px] bg-[#3E68FF] rounded-full left-12"></div>
      <div className="w-[4px] h-[4px] bg-[#3E68FF] rounded-full left-[60px]"></div>
    </div>
  );
};

export default HeaderLine;
