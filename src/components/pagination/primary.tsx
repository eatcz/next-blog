import { Pagination } from "antd";
import React from "react";
import style from "@/styles/pagination.css";
const PrimaryPagin: React.FC = () => {
  return <Pagination responsive={true} defaultCurrent={1} total={50} />;
};

export default PrimaryPagin;
