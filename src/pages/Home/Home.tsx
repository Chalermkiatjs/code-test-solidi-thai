import MainLayout from "layouts/MainLayout";
import Card from "components/Card/Card";
import Table from "components/Table/Table";
import { UserColumn } from "configurations/columns/UserColumn";
import {
  FaUserCircle,
  FaFolderOpen,
  FaUsers,
  FaDollarSign,
  FaShoppingCart,
} from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { HiBuildingOffice, HiIdentification } from "react-icons/hi2";
import { GiPositionMarker } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import DashboardCard from "components/DashBoardCard/DashBoardCard";
import Modal from "components/Modal/Modal";
import { IoLogoOctocat } from "react-icons/io";
import {
  getPageLoadStorage,
  setPageLoadStorage,
} from "helpers/pageLoadStorage";
import { MemberDataType } from "shared/types/MemberDataType";

const Home: React.FC = () => {
  const [rowData, setRowData] = useState<MemberDataType | null>(null);
  const [rows, setRows] = useState<MemberDataType[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleRowClick = (row: MemberDataType) => {
    setRowData(row);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const isPageLoadFirstTime = getPageLoadStorage();

  useEffect(() => {
    if (isPageLoadFirstTime === "true") {
      setModalOpen(true);
      setPageLoadStorage("false");
    }
  }, [isPageLoadFirstTime]);

  useEffect(() => {
    fetch("/member-data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then(async (data: MemberDataType[]) => {
        setRows(data);
      });
  }, []);
  return (
    <MainLayout>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-4">
        <Modal isOpen={modalOpen} onClose={handleCloseModal}>
          <div className="flex flex-col items-center h-[200px] overflow-y-auto mt-6">
            <IoLogoOctocat className="hover:cursor-pointer" size={80} />
            <p className="text-2xl mt-4">Welcome to your work space!</p>
            <p>Have a nice day.</p>
          </div>
        </Modal>
        <DashboardCard
          className="col-span-2 md:col-span-1"
          title="Users"
          value={50}
          icon={<FaUsers className="w-6 h-6 text-info" />}
          change="12%"
          changeType="increase"
        />
        <DashboardCard
          className="col-span-2 md:col-span-1"
          title="Revenue"
          value="$12,456"
          icon={<FaDollarSign className="w-6 h-6 text-success" />}
          change="5%"
          changeType="decrease"
        />
        <DashboardCard
          className="col-span-2 md:col-span-1"
          title="Orders"
          value={320}
          icon={<FaShoppingCart className="w-6 h-6" />}
        />
        <Card className="col-span-2 md:col-span-2 shadow-md">
          <Table
            onRowClick={handleRowClick}
            height="h-[360px]"
            title="Members"
            rows={rows}
            columns={UserColumn}
          />
        </Card>
        <Card className="col-span-2 md:col-span-1 shadow-md h-[470px] overflow-y-auto">
          {rowData ? (
            <div className="flex flex-col ">
              <div id="icon" className="mx-auto">
                <FaUserCircle className="mb-4 mx-auto" size={70} />
                <p className="text-xl">{rowData.name}</p>
              </div>
              <div id="content" className="mt-2">
                <div className="border-y pb-2">
                  <p className="text-xl font-bold">Profile</p>
                  <div className="flex my-1  mx-2 gap-2 items-center">
                    <HiIdentification size={25} /> No. {rowData.id}
                  </div>
                  <div className="flex my-1 mx-2 gap-2 items-center">
                    <PiBagFill size={25} /> Job Position: {rowData.job_title}
                  </div>
                  <div className="flex my-1 mx-2 gap-2 items-center">
                    <PiBagFill size={25} /> Role: {rowData.role}
                  </div>
                  <div className="flex my-1  mx-2 gap-2 items-center">
                    <HiBuildingOffice size={25} /> Company: {rowData.company}
                  </div>
                </div>
                <div className="mt-2 pb-2 border-b ">
                  <p className="text-xl font-bold ">Contact</p>
                  <div className="flex my-1  mx-2 gap-2 items-center">
                    <GiPositionMarker size={25} /> Address: {rowData.address}
                  </div>
                  <div className="flex my-1  mx-2 gap-2 items-center">
                    <MdEmail size={25} /> Email: {rowData.email}
                  </div>
                  <div className="flex my-1  mx-2 gap-2 items-center">
                    <MdOutlinePhoneIphone size={25} /> Phone number:{" "}
                    {rowData.phone}
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <FaFolderOpen className="mb-4" size={60} />
              No data opened.
            </div>
          )}
        </Card>
      </div>
    </MainLayout>
  );
};

export default Home;
