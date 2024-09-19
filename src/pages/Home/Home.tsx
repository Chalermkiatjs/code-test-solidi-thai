import Card from "components/Card/Card";
import Table from "components/Table/Table";
import { UserColumn } from "configurations/columns/UserColumn";
import MainLayout from "layouts/MainLayout";
import { UserData } from "mockup/UserData";
import React from "react";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="grid grid-rows-1 grid-cols-3 gap-4">
        <Card className="h-[150px] shadow-md">01</Card>
        <Card className="shadow-md">02</Card>
        <Card className="shadow-md">03</Card>
        <Card className="col-span-2 shadow-md">
          <Table height="h-[360px]" title="Members" rows={UserData} columns={UserColumn} />
        </Card>
        <Card className="shadow-md">05</Card>
      </div>
    </MainLayout>
  );
};

export default Home;
