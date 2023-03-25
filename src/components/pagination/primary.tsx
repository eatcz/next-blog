import { Pagination } from "antd";
import React from "react";
const PrimaryPagin: React.FC = () => {
  return <Pagination responsive={true} defaultCurrent={1} total={50} />;
};

export default PrimaryPagin;
