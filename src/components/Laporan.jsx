import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getlaporan } from "../redux/actions/Laporan";
import { Dialog, Transition } from "@headlessui/react";

const Laporan = () => {
  const dispatch = useDispatch();
  const [opendate, setOpendate] = useState(false);
  const { laporan } = useSelector((state) => state.laporan);
  const [Short, setShort] = useState();
  const [details, setDetails] = useState();
  const [today, setToday] = useState("");
  const [sum, setSum] = useState([]);

  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const detail = (e) => {
    const filter = laporan && laporan.filter((data) => data.id === e);
    setDetails(filter);
    openModal();
  };

  const laporantoday =
    laporan && laporan.filter((data) => data.tanggal_transaksi === today);

  console.log("laporantoday", laporantoday);

  let jmltransaksi = 0;
  laporantoday.forEach((item) => {
    jmltransaksi += item.total_transaksi;
  });

  console.log("jmltransaksi", jmltransaksi);

  useEffect(() => {
    dispatch(getlaporan());
  }, []);

  useEffect(() => {
    const dated = new Date();
    const y = dated.getFullYear();
    const m = dated.getMonth() + 1;
    const d = dated.getDate();

    if (d < 10) {
      setToday(y + "-" + m + "-" + "0" + d);
    }
    if (m < 10) {
      setToday(y + "-" + "0" + m + "-" + d);
    }
    if (m < 10 && d < 10) {
      setToday(y + "-" + "0" + m + "-" + "0" + d);
    } else {
      setToday(y + "-" + m + "-" + d);
    }
  }, []);

  const handletoday = (e) => {
    setToday(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[110px] h-[110px] text-blue-500"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192l-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160a80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160a80 80 0 0 0 0 160z"
          />
        </svg>
        <div className="">
          <p className="font-semibold">Suplier Barang</p>
          <h1 className="text-3xl font-bold ">Latifah Busana</h1>
        </div>
      </div>
      <div className="flex items-center w-full my-3">
        <p className="mx-3">Filter</p>
        <div className="w-[150px] h-[30px] bg-white rounded-sm flex items-center px-1">
          <input
            type="date"
            name="date"
            id="date"
            value={today}
            onChange={handletoday}
          />
        </div>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID_Transaksi
              </th>
              <th scope="col" class="px-6 py-3">
                jenis transaksi
              </th>
              <th scope="col" class="px-6 py-3">
                tanggal transaksi
              </th>
              <th scope="col" class="px-6 py-3">
                Total transaksi
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {laporan &&
              laporantoday.map((data) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.id}
                    </th>
                    <td class="px-6 py-4">{data.jenis_transaksi}</td>
                    <td class="px-6 py-4">{data.tanggal_transaksi}</td>
                    <td class="px-6 py-4">Rp. {data.total_transaksi}</td>
                    <td class="px-6 py-4">
                      <p
                        onClick={() => detail(data.id)}
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                      >
                        Detail
                      </p>
                    </td>
                  </tr>
                );
              })}
            <tr className="bg-slate-100">
              <td colSpan={3} className="text-md font-semibold p-4 px-6">
                Total Transaksi
              </td>
              <td className="text-md font-semibold p-4 px-6">
                <p>Rp. {jmltransaksi}</p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {details &&
          details.map((data) => {
            const barangs = data.barang;
            // console.log("barangs", barangs);
            return (
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
                        <Dialog.Panel className="w-[68%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <div>
                            <p className="mt-2">id transaksi : {data.id}</p>
                            <p className="mt-2">
                              tanggal transaksi : {data.tanggal_transaksi}
                            </p>
                            <p className="mt-2">
                              jenis transaksi : {data.jenis_transaksi}
                            </p>
                            <p className="mt-2">
                              total transaksi : Rp. {data.total_transaksi}
                            </p>
                          </div>
                          <div>
                            <div className="mt-4">
                              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                  <tr>
                                    <th scope="col" class="px-6 py-3">
                                      nama barang
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                      kode barang
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                      harga barang
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                      qty
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                      total
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {barangs &&
                                    barangs.map((data) => {
                                      return (
                                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                          <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                            {data.data.nama_barang}
                                          </th>
                                          <td className="px-6 py-4">
                                            {data.data.kode_barang}
                                          </td>
                                          <td className="px-6 py-4">
                                            {data.data.harga_jual}
                                          </td>
                                          <td className="px-6 py-4">
                                            {data.qty}
                                          </td>
                                          <td className="px-6 py-4">
                                            {data.semua}
                                          </td>
                                        </tr>
                                      );
                                    })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            );
          })}
      </div>
    </div>
  );
};

export default Laporan;
