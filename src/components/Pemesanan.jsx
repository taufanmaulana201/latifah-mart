import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Pemesanan = () => {
  // modal add controller
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg "
          className="w-[110px] h-[110px] text-blue-500"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m17.275 18.125l-.425-.425q-.225-.225-.538-.225q-.312 0-.537.225q-.225.225-.225.525q0 .3.225.525l.975.975q.225.225.525.225q.3 0 .525-.225l2.425-2.375q.225-.225.225-.538q0-.312-.225-.537q-.225-.225-.537-.225q-.313 0-.538.225ZM7 9h10q.425 0 .712-.288Q18 8.425 18 8t-.288-.713Q17.425 7 17 7H7q-.425 0-.713.287Q6 7.575 6 8t.287.712Q6.575 9 7 9Zm11 14q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23ZM3 21.875V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v6.675q-.475-.225-.975-.375T19 11.075V5H5v14.05h6.075q.125.775.388 1.475q.262.7.687 1.325q-.125.025-.263-.038q-.137-.062-.237-.162l-.8-.8q-.15-.15-.35-.15q-.2 0-.35.15l-.8.8q-.15.15-.35.15q-.2 0-.35-.15l-.8-.8q-.15-.15-.35-.15q-.2 0-.35.15l-.8.8q-.15.15-.35.15q-.2 0-.35-.15l-.8-.8q-.15-.15-.35-.15q-.2 0-.35.15l-.8.8l-.35.225ZM7 17h4.075q.075-.525.225-1.025q.15-.5.375-.975H7q-.425 0-.713.287Q6 15.575 6 16t.287.712Q6.575 17 7 17Zm0-4h6.1q.95-.925 2.212-1.463Q16.575 11 18 11H7q-.425 0-.713.287Q6 11.575 6 12t.287.712Q6.575 13 7 13Zm-2 6.05V5v14.05Z"
          />
        </svg>
        <div className="">
          <p className="font-semibold">Transaksi Pemesanan</p>
          <h1 className="text-3xl font-bold ">Latifah Busana</h1>
        </div>
      </div>
      <button
        onClick={openModal}
        className="max-w-max px-2 h-[35px] bg-blue-500 text-white rounded mb-2 mt-6"
      >
        Tambah Pesanan
      </button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No Transaksi
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal Tansaksi
              </th>
              <th scope="col" className="px-6 py-3">
                Customer
              </th>
              <th scope="col" className="px-6 py-3">
                Catatan
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Sliver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">asdasd</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Detail
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div onClick={closeModal}>
                    <svg
                      className="text-end hover:text-red-500 float-right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6Zm3.6 5q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"
                      />
                    </svg>
                  </div>
                  <div className="grid grid-cols-3 gap-6 mt-10">
                    <div className="bg-white p-6 shadow-md border border-black-100 w-full">
                      <h2 className="font-semibold">DATA CUSTOMER</h2>
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 mt-3">
                          <p className="font-semibold">Nama Customer</p>
                          <div>
                            <input
                              className="border border-slate-400 rounded pl-2"
                              placeholder="name..."
                              type="text"
                              name="nama"
                              id="nama"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 mt-3">
                          <p className="font-semibold">No.Hp</p>
                          <div>
                            <input
                              className="border border-slate-400 rounded pl-2"
                              placeholder="08xxxx"
                              type="number"
                              name="nomor"
                              id="nomor"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 mt-3">
                          <p className="font-semibold">Alamat</p>
                          <div>
                            <input
                              className="border border-slate-400 rounded pl-2"
                              placeholder="name..."
                              type="text"
                              name="alamat"
                              id="alamat"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white  p-6 shadow-md border border-black-100 w-full">
                      <h2 className="font-semibold">TRANSAKSI PEMESANAN</h2>
                      <div className="space-y-3 mt-2">
                        <div className=" px-1 w-[150px] rounded-sm font-bold h-[30px] pt-1">
                          DATA TRANSAKSI
                        </div>

                        <div>
                          <div className="flex">
                            <div className="font-semibold w-[35%]">
                              No Transaksi
                            </div>
                            <div className="">
                              <div className="max-w-max h-[30px] bg-slate-200 rounded-sm pt-1 px-1">
                                215462132516851321
                              </div>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="font-semibold w-[35%] mt-3">
                              Tanggal Transaksi
                            </div>
                            <div className="">
                              <input
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
                            <div className="font-semibold w-[35%]">
                              Nama Barang
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                className="max-w-max h-[30px] bg-slate-200 rounded-sm px-1 "
                                type="text"
                                name="searchbarang"
                                id="searchbarang"
                                onChange={() => {}}
                              />
                              <p>qty</p>
                              <input
                                className="w-[50px] h-[30px] bg-slate-200 rounded-sm px-1  "
                                type="number"
                                name="qty"
                                id="qty"
                                onChange={() => {}}
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
                        <div className="w-[50%]">
                          <h1 className="font-bold text-blue-500 text-xl mt-1">
                            Total Transaksi
                          </h1>
                        </div>
                        <div className="">
                          <h1 className="font-bold text-blue-500 text-3xl text-center">
                            Rp. 500000
                          </h1>
                        </div>
                      </div>
                      <div className="flex mt-3">
                        <div className="w-[50%]">
                          <h1 className="font-semibold text-blue-500 text-xl mt-4">
                            Bayar
                          </h1>
                        </div>
                        <div className="flex mt-4">
                          Rp. &nbsp;
                          <input
                            className="h-[35px] w-[150px]] border bg-slate-100 "
                            type="number"
                            name="bayar"
                            id="bayar"
                          />
                        </div>
                      </div>
                      <div className="flex mt-6">
                        <div className="w-[50%]">
                          <h1 className="font-semibold text-blue-500 text-xl mt-1">
                            Kembalian
                          </h1>
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
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Apple MacBook Pro 17"
                          </th>
                          <td className="px-6 py-4">Sliver</td>
                          <td className="px-6 py-4">Laptop</td>
                          <td className="px-6 py-4">$2999</td>
                          <td className="px-6 py-4">
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Hapus
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Microsoft Surface Pro
                          </th>
                          <td className="px-6 py-4">White</td>
                          <td className="px-6 py-4">Laptop PC</td>
                          <td className="px-6 py-4">$1999</td>
                          <td className="px-6 py-4">
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Hapus
                            </a>
                          </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Magic Mouse 2
                          </th>
                          <td className="px-6 py-4">Black</td>
                          <td className="px-6 py-4">Accessories</td>
                          <td className="px-6 py-4">$99</td>
                          <td className="px-6 py-4">
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Hapus
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Pemesanan;
