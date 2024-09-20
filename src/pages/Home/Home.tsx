import MainLayout from "layouts/MainLayout";
import Card from "components/Card/Card";
import Table from "components/Table/Table";
import { UserColumn } from "configurations/columns/UserColumn";
import { FaUserCircle, FaFolderOpen } from "react-icons/fa";
import { MemberData, MemberDataType } from "mockup/MemberData";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [rowData, setRowData] = useState<MemberDataType | null>(null);
  const handleRowClick = (row: MemberDataType) => {
    setRowData(row);
  };
  return (
    <MainLayout>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="col-span-2 md:col-span-1 shadow-md h-[150px]">01</Card>
        <Card className="col-span-2 md:col-span-1 shadow-md h-[150px]">02</Card>
        <Card className="col-span-2 md:col-span-1 shadow-md h-[150px]">03</Card>
        <Card className="col-span-2 md:col-span-2 shadow-md">
          <Table
            onRowClick={handleRowClick}
            height="h-[360px]"
            title="Members"
            rows={MemberData}
            columns={UserColumn}
          />
        </Card>
        <Card className="col-span-2 md:col-span-1 shadow-md h-[460px]">
          {rowData ? (
            <div className="flex flex-col items-center">
              <div id="icon">
                <FaUserCircle className="mb-4 mx-auto" size={70} />
                <p className="text-lg">{rowData.name}</p>
              </div>
              <div id="content">
                
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <FaFolderOpen className="mb-4" size={60}/>
              No data opened.
            </div>
          )}
        </Card>
      </div>
    </MainLayout>
  );
};

export default Home;
