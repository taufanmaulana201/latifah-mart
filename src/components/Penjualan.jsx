import React, { useState } from "react";

const Penjualan = () => {
  const [formdata, setFormdata] = useState({
    notrnsaksi: "",
    tanggal: "",
    total: "",
    barang: [],
  });
  const [total, setTotal] = useState(0);
  const [bayar, setBayar] = useState(0);
  const [Kembalian, setKembalian] = useState(0);

  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  const dummybarang = [
    {
      nama: "barang",
      harga: 15000,
    },
    {
      nama: "barang lagi",
      harga: 17000,
    },
  ];
  return (
    <div>
      <div className="flex items-center space-x-2">
        <svg
          className="w-[110px] h-[110px] text-blue-800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM7 17q-1.125 0-1.7-.988q-.575-.987-.05-1.962L6.6 11.6L3 4H1.975q-.425 0-.7-.288Q1 3.425 1 3t.288-.713Q1.575 2 2 2h1.625q.275 0 .525.15t.375.425L5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4q-.275.5-.725.775q-.45.275-1.025.275H8.1L7 15h11.025q.425 0 .7.287q.275.288.275.713t-.288.712Q18.425 17 18 17Zm1.55-6h7Z"
          />
        </svg>
        <div className="">
          <p className="font-semibold">Transaksi Penjualan</p>
          <h1 className="text-3xl font-bold ">Latifah Busana</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-2">
        <div className="bg-white  p-2 shadow-md border border-black-100 w-full">
          <h2 className="font-semibold">TRANSAKSI PENJUALAN</h2>
          <div className="space-y-3 mt-6">
            <div className=" px-1 w-[150px] rounded-sm font-bold h-[30px] pt-1">
              DATA TRANSAKSI
            </div>

            <div>
              <div className="flex">
                <div className="font-semibold w-[35%]">No Transaksi</div>
                <div className="">
                  <div className="">
                    <input
                      onChange={handlechange}
                      className="max-w-max h-[30px] bg-slate-200 rounded-sm px-1 "
                      type="number"
                      name="notransaksi"
                      id="notransaksi"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="font-semibold w-[35%] mt-3">
                  Tanggal Transaksi
                </div>
                <div className="">
                  <input
                    onChange={handlechange}
                    type="date"
                    name="tanggal"
                    id="tanggal"
                    className="max-w-max h-[30px] bg-slate-200 rounded-sm pt-1 px-1  my-2"
                  />
                </div>
              </div>
            </div>
            <div className="px-1 w-[150px] rounded-sm font-bold h-[30px] pt-1">
              INPUT BARANG
            </div>

            <div>
              <div className="flex">
                <div className="font-semibold w-[35%]">Nama Barang</div>
                <div className="flex items-center space-x-2">
                  <input
                    onChange={handlechange}
                    className="max-w-max h-[30px] bg-slate-200 rounded-sm px-1 "
                    type="text"
                    name="searchbarang"
                    id="searchbarang"
                  />
                  <p>qty</p>
                  <input
                    className="w-[50px] h-[30px] bg-slate-200 rounded-sm px-1  "
                    type="number"
                    name="qty"
                    id="qty"
                    onChange={handlechange}
                  />
                </div>
              </div>
              <button className="px-2 bg-blue-500 rounded h-[30px] hover:bg-blue-600 float-right mr-6 mt-3">
                Tambah
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 shadow-md border border-black-100 w-full">
          <div className="flex">
            <div className="w-[40%]">
              <h1 className="font-bold text-blue-500 text-xl mt-3">
                Total Transaksi
              </h1>
            </div>
            <div className="">
              <h1 className="font-bold text-blue-500 text-5xl text-center">
                Rp. 500000
              </h1>
            </div>
          </div>
          <div className="flex mt-6">
            <div className="w-[40%]">
              <h1 className="font-semibold text-blue-500 text-xl">Bayar</h1>
            </div>
            <div className="">
              Rp. &nbsp;
              <input
                className="h-[35px] border bg-slate-100"
                type="number"
                name="bayar"
                id="bayar"
              />
            </div>
          </div>
          <div className="flex mt-6">
            <div className="w-[40%]">
              <h1 className="font-semibold text-blue-500 text-xl">Kembalian</h1>
            </div>
            <div className="">
              <h1 className="font-bold text-blue-500 text-3xl text-center">
                Rp. 500000
              </h1>
            </div>
          </div>

          <button className="max-w-max float-right mt-14 px-3 h-[35px] bg-blue-500 text-white rounded hover:bg-blue-600">
            Buat Transaksi
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Barang
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Harga
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dummybarang.map((data) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.nama}
                  </th>
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4">{data.harga}</td>
                  <td className="px-6 py-4">30000</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Hapus
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Penjualan;
