import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { trash } from "../assets/icons/icons";
import {
  addpengeluaran,
  deletepengeluaran,
  getpengeluaran,
} from "../redux/actions/pengeluaran";

const Pengeluaran = () => {
  const dispatch = useDispatch();
  const { pengeluaran, detail } = useSelector((state) => state.pengeluaran);
  // modal add controller
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const [formdata, setFormdata] = useState({
    tanggal_pengeluaran: null,
    jenis_pengeluaran: "",
    total: null,
    catatan: "",
  });
  const { tanggal_pengeluaran, jenis_pengeluaran, total, catatan } = formdata;
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(
      addpengeluaran(tanggal_pengeluaran, jenis_pengeluaran, total, catatan)
    );
    setFormdata({
      tanggal_pengeluaran: null,
      jenis_pengeluaran: "",
      total: null,
      catatan: "",
    });
    dispatch(getpengeluaran());
    closeModal();
  };
  const handledelete = (id) => {
    dispatch(deletepengeluaran(id));
    getdata();
  };
  const getdata = () => {
    dispatch(getpengeluaran());
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[110px] h-[110px] text-blue-500"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M13.09 20H5V6H3v14a2 2 0 0 0 2 2h8.81a5.46 5.46 0 0 1-.72-2M19 2H9c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4.09c.11-.71.35-1.39.72-2H9V4h2v6l2.5-2.25L16 10V4h3v9c.68 0 1.36.11 2 .34V4a2 2 0 0 0-2-2m4 16v2h-8v-2h8Z"
          />
        </svg>
        <div className="">
          <p className="font-semibold">Transaksi Pengeluaran</p>
          <h1 className="text-3xl font-bold ">Latifah Busana</h1>
        </div>
      </div>
      <button
        onClick={openModal}
        className="max-w-max px-2 h-[35px] bg-blue-500 text-white rounded mb-2 mt-6"
      >
        Tambah Pengeluaran
      </button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id Pengeluaran
              </th>
              <th scope="col" className="px-6 py-3">
                Jenis Pengeluaran
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal Pengeluaran
              </th>
              <th scope="col" className="px-6 py-3">
                Total Pengeluaran
              </th>
              <th scope="col" className="px-6 py-3">
                Catatan
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {pengeluaran &&
              pengeluaran.map((data) => {
                return (
                  <tr
                    key={data.id}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{data.id}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.jenis_pengeluaran}
                    </th>
                    <td className="px-6 py-4">{data.tanggal_pengeluaran}</td>
                    <td className="px-6 py-4">{data.total}</td>
                    <td className="px-6 py-4">{data.catatan}</td>
                    <td className="px-6 py-4">
                      <div
                        onClick={() => handledelete(data.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        {trash}
                      </div>
                    </td>
                  </tr>
                );
              })}
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
                <Dialog.Panel className="w-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <form onSubmit={handlesubmit}>
                      <div className="mb-6">
                        <label
                          for="date"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Tanggal
                        </label>
                        <input
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="date"
                          name="tanggal_pengeluaran"
                          onChange={handlechange}
                          id="date"
                        />
                      </div>
                      <div class="mb-6">
                        <label
                          for="jenis"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Jenis Pengeluaran
                        </label>
                        <input
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="text"
                          name="jenis_pengeluaran"
                          onChange={handlechange}
                          id="jenis"
                        />
                      </div>
                      <div class="mb-6">
                        <label
                          for="total"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Total Pengeluaran
                        </label>
                        <input
                          className="w-[300px]bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="number"
                          name="total"
                          onChange={handlechange}
                          id="total"
                        />
                      </div>
                      <div class="mb-6">
                        <label
                          for="total"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Catatan
                        </label>
                        <textarea
                          id="catatan"
                          name="catatan"
                          onChange={handlechange}
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Tambah Pengeluaran
                      </button>
                    </form>
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

export default Pengeluaran;
