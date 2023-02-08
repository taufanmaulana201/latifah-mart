import React, { useState } from "react";
import logo from "../assets/img/logo-putih.jpg";
import Barang from "../components/Barang";
import Laporan from "../components/Laporan";
import Pemesanan from "../components/Pemesanan";
import Pengeluaran from "../components/Pengeluaran";
import Penjualan from "../components/Penjualan";
import Suplier from "../components/Suplier";

const Dashboard = () => {
  const [dashboardactive, setDashboardactive] = useState(0);
  // console.log(dashboardactive);
  return (
    <div className="flex min-h-screen">
      <div className="w-[15%] ">
        <div className="space-x-4 p-2 flex items-center justify-center flex-col">
          <img className="w-[120px] h-[120px]" src={logo} alt="" />
          <div className="font-medium dark:text-white">
            <div>admin Latifah Busana</div>
          </div>
        </div>
        <div className="p-2 space-y-3">
          <div className=" flex  items-center">
            <div className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2zm4.596 5.404a.595.595 0 0 0-.763-.067c-2.89 2.028-4.52 3.23-4.894 3.602a1.502 1.502 0 0 0 0 2.122a1.502 1.502 0 0 0 2.122 0c.219-.22 1.418-1.851 3.598-4.897a.59.59 0 0 0-.063-.76zM17.5 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-11 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm2.318-3.596A1 1 0 1 0 7.404 8.82a1 1 0 0 0 1.414-1.416zM12 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z"
                />
              </svg>
            </div>
            <p>Dashboard</p>
          </div>
          <p className="text-slate-500 mt-3">Transaksi</p>
          <div
            onClick={() => setDashboardactive(0)}
            className={` flex px-2 h-8 items-center cursor-pointer ${
              dashboardactive === 0 ? "bg-slate-200" : ""
            }`}
          >
            <div className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M4 7a1 1 0 0 0 0 2h2.22l2.624 10.5c.223.89 1.02 1.5 1.937 1.5h12.47c.903 0 1.67-.6 1.907-1.47L27.75 10h-2.094l-2.406 9H10.78L8.157 8.5A1.984 1.984 0 0 0 6.22 7H4zm18 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm3-14v5h-3l4 4l4-4h-3V7h-2zm-3 16c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1zm9 0c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1z"
                />
              </svg>
            </div>
            <p>Penjualan</p>
          </div>
          {/* <div
            onClick={() => setDashboardactive(1)}
            className={` flex px-2 h-8 items-center cursor-pointer ${
              dashboardactive === 1 ? "bg-slate-200" : ""
            }`}
          >
            <div className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m17.275 20.25l3.475-3.45l-1.05-1.05l-2.425 2.375l-.975-.975l-1.05 1.075ZM6 9h12V7H6Zm12 14q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23ZM3 22V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v6.675q-.475-.225-.975-.375T19 11.075V5H5v14.05h6.075q.125.775.388 1.475q.262.7.687 1.325L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5Zm3-5h5.075q.075-.525.225-1.025q.15-.5.375-.975H6Zm0-4h7.1q.95-.925 2.212-1.463Q16.575 11 18 11H6Zm-1 6.05V5v14.05Z"
                />
              </svg>
            </div>
            <p>Pemesanan</p>
          </div> */}
          <div
            onClick={() => setDashboardactive(2)}
            className={` flex px-2 h-8 items-center cursor-pointer ${
              dashboardactive === 2 ? "bg-slate-200" : ""
            }`}
          >
            <div className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.09 20H5V6H3v14a2 2 0 0 0 2 2h8.81a5.46 5.46 0 0 1-.72-2M19 2H9c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4.09c.11-.71.35-1.39.72-2H9V4h2v6l2.5-2.25L16 10V4h3v9c.68 0 1.36.11 2 .34V4a2 2 0 0 0-2-2m4 16v2h-8v-2h8Z"
                />
              </svg>
            </div>
            <p>Pengeluaran</p>
          </div>
          <p className="text-slate-500 mt-3">Master Data</p>
          <div
            onClick={() => setDashboardactive(3)}
            className={` flex px-2 h-8 items-center cursor-pointer ${
              dashboardactive === 3 ? "bg-slate-200" : ""
            }`}
          >
            <div className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="m1344 2l704 352v785l-128-64V497l-512 256v258l-128 64V753L768 497v227l-128-64V354L1344 2zm0 640l177-89l-463-265l-211 106l497 248zm315-157l182-91l-497-249l-149 75l464 265zm-507 654l-128 64v-1l-384 192v455l384-193v144l-448 224L0 1735v-676l576-288l576 288v80zm-640 710v-455l-384-192v454l384 193zm64-566l369-184l-369-185l-369 185l369 184zm576-1l448-224l448 224v527l-448 224l-448-224v-527zm384 576v-305l-256-128v305l256 128zm384-128v-305l-256 128v305l256-128zm-320-288l241-121l-241-120l-241 120l241 121z"
                />
              </svg>
            </div>
            <p>Barang</p>
          </div>
          <div
            onClick={() => setDashboardactive(4)}
            className={` flex px-2 h-8 items-center cursor-pointer ${
              dashboardactive === 4 ? "bg-slate-200" : ""
            }`}
          >
            <div className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192l-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160a80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160a80 80 0 0 0 0 160z"
                />
              </svg>
            </div>
            <p>Suplier</p>
          </div>
          <p className="text-slate-500 mt-3">Report</p>
          <div
            onClick={() => setDashboardactive(5)}
            className={` flex px-2 h-8 items-center cursor-pointer ${
              dashboardactive === 5 ? "bg-slate-200" : ""
            }`}
          >
            <div className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 21H2V3h2v16h2v-9h4v9h2V6h4v13h2v-5h4v7Z"
                />
              </svg>
            </div>
            <p>Laporan</p>
          </div>
        </div>
      </div>
      <div className="w-[85%] bg-slate-200 p-6">
        <div className={`${dashboardactive === 0 ? "" : "hidden"}`}>
          <Penjualan />
        </div>
        <div className={`${dashboardactive === 1 ? "" : "hidden"}`}>
          <Pemesanan />
        </div>
        <div className={`${dashboardactive === 2 ? "" : "hidden"}`}>
          <Pengeluaran />
        </div>
        <div className={`${dashboardactive === 3 ? "" : "hidden"}`}>
          <Barang />
        </div>
        <div className={`${dashboardactive === 4 ? "" : "hidden"}`}>
          <Suplier />
        </div>
        <div className={`${dashboardactive === 5 ? "" : "hidden"}`}>
          <Laporan />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
