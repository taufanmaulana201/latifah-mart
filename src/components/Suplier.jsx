import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addsuplier,
  deletesuplier,
  getsuplier,
} from "../redux/actions/suplier";
import { trash } from "../assets/icons/icons";

const Suplier = () => {
  const dispatch = useDispatch();
  const { suplier, detail } = useSelector((state) => state.suplier);
  // console.log(suplier);
  // modal add controller
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const [formdata, setFormdata] = useState({
    alamat: "",
    catatan: "",
    email: "",
    hp: null,
    nama_suplier: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const { alamat, catatan, email, hp, nama_suplier } = formdata;
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addsuplier(alamat, catatan, email, hp, nama_suplier));
    setFormdata({
      alamat: "",
      catatan: "",
      email: "",
      hp: null,
      nama_suplier: "",
    });
    getdata();
    closeModal();
  };
  const handledelete = (id) => {
    dispatch(deletesuplier(id));
    getdata();
  };

  const getdata = () => {
    dispatch(getsuplier());
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div></div>
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
      <button
        onClick={openModal}
        className="max-w-max px-2 h-[35px] bg-blue-500 text-white rounded mb-2 mt-6"
      >
        Tambah Suplier
      </button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID Suplier
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Suplier
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Hp
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
            {suplier &&
              suplier.map((data) => {
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
                      {data.nama_suplier}
                    </th>
                    <td className="px-6 py-4">{data.alamat}</td>
                    <td className="px-6 py-4">{data.email}</td>
                    <td className="px-6 py-4">{data.hp}</td>
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
                <Dialog.Panel className=" w-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <form onSubmit={handlesubmit}>
                      <div className="mb-6">
                        <label
                          for="nama"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Nama Suplier
                        </label>
                        <input
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="text"
                          name="nama_suplier"
                          onChange={handlechange}
                          id="nama"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          for="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          E-mail
                        </label>
                        <input
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="email"
                          name="email"
                          onChange={handlechange}
                          id="email"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          for="hp"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Nomor Handpone
                        </label>
                        <input
                          className="w-[300px]bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="number"
                          name="hp"
                          onChange={handlechange}
                          id="hp"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          for="alamat"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Alamat Suplier
                        </label>
                        <input
                          className="w-[300px]bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="text"
                          name="alamat"
                          onChange={handlechange}
                          id="alamat"
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          for="catatan"
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

export default Suplier;
