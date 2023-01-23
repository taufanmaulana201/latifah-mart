import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addbarang,
  deletebarang,
  getbarang,
  getdetail,
  upadtebarang,
} from "../redux/actions/Barang";
import { edit, trash } from "../assets/icons/icons";
import { useNavigate } from "react-router-dom";

const Barang = () => {
  const dispatch = useDispatch();
  const { barang, detail } = useSelector((state) => state.barang);
  const mysuplier = useSelector((state) => state.suplier.suplier);
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    kode_barang: "",
    nama_barang: "",
    stok: 0,
    harga_jual: 0,
    suplier: null,
    catatan: "",
  });
  // const [Formupdate, setFormupdate] = useState({
  //   kode_barang: "",
  //   nama_barang: "",
  //   stok: 0,
  //   harga_jual: 0,
  //   suplier: null,
  //   catatan: "",
  // });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  // const changeupdate = (e) => {
  //   const { name, value } = e.target;
  //   setFormupdate({
  //     ...formdata,
  //     [name]: value,
  //   });
  // };

  const { kode_barang, nama_barang, stok, harga_jual, suplier, catatan } =
    formdata;
  // console.log("sample", kode_barang);

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(
      addbarang(kode_barang, nama_barang, stok, harga_jual, suplier, catatan)
    );
    dispatch(getbarang());
    setFormdata({
      kode_barang: "",
      nama_barang: "",
      stok: 0,
      harga_jual: 0,
      suplier: null,
      catatan: "",
    });
  };

  const handledelete = (id) => {
    dispatch(deletebarang(id));
    dispatch(getbarang());
  };
  const [idedit, setIdedit] = useState("");
  const handledit = (e) => {
    setUpdate(true);
    setIdedit(e);
    barang &&
      barang
        .filter((data) => data.id === idedit)
        .map((data) => {
          setFormdata({
            kode_barang: data.kode_barang,
            nama_barang: data.nama_barang,
            stok: data.stok,
            harga_jual: data.harga_jual,
            suplier: data.suplier,
            catatan: data.catatan,
          });
        });
  };
  const handleupdate = (e) => {
    e.preventDefault();
    dispatch(
      upadtebarang(
        idedit,
        kode_barang,
        nama_barang,
        stok,
        harga_jual,
        suplier,
        catatan
      )
    );
    dispatch(getbarang());
  };

  // modal add controller
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  let [isUpdate, setUpdate] = useState(false);
  function closeModalUpdate() {
    setUpdate(false);
  }
  // redux

  // console.log("barang", barang);
  useEffect(() => {
    dispatch(getbarang());
  }, []);

  return (
    <div>
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[110px] h-[110px] text-blue-500"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 2048 2048"
        >
          <path
            fill="currentColor"
            d="m1344 2l704 352v785l-128-64V497l-512 256v258l-128 64V753L768 497v227l-128-64V354L1344 2zm0 640l177-89l-463-265l-211 106l497 248zm315-157l182-91l-497-249l-149 75l464 265zm-507 654l-128 64v-1l-384 192v455l384-193v144l-448 224L0 1735v-676l576-288l576 288v80zm-640 710v-455l-384-192v454l384 193zm64-566l369-184l-369-185l-369 185l369 184zm576-1l448-224l448 224v527l-448 224l-448-224v-527zm384 576v-305l-256-128v305l256 128zm384-128v-305l-256 128v305l256-128zm-320-288l241-121l-241-120l-241 120l241 121z"
          />
        </svg>
        <div className="">
          <p className="font-semibold">Stok Barang</p>
          <h1 className="text-3xl font-bold ">Latifah Busana</h1>
        </div>
      </div>
      <button
        onClick={openModal}
        className="max-w-max px-2 h-[35px] bg-blue-500 text-white rounded mb-2 mt-6"
      >
        Tambah Barang
      </button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID Barang
              </th>
              <th scope="col" className="px-6 py-3">
                Kode Barang
              </th>
              <th scope="col" className="px-6 py-3">
                nama barang
              </th>
              <th scope="col" className="px-6 py-3">
                stok barang
              </th>
              <th scope="col" className="px-6 py-3">
                Catatan
              </th>
              <th scope="col" className="px-6 py-3">
                suplier
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {barang ? (
              barang.map((data) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td className="px-6 py-4">{data.id}</td>
                    <td className="px-6 py-4">{data.kode_barang}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.nama_barang}
                    </th>
                    <td className="px-6 py-4">{data.stok}</td>
                    <td className="px-6 py-4">{data.harga_jual}</td>
                    <td className="px-6 py-4">{data.suplier}</td>
                    <td className="px-6 py-4 flex items-center space-x-2">
                      <div
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => handledit(data.id)}
                      >
                        {edit}
                      </div>
                      <div
                        onClick={() => handledelete(data.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        {trash}
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>Loading.....</div>
            )}
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
                <Dialog.Panel className="w-full w-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <form onSubmit={handlesubmit}>
                      <div>
                        <label
                          for="kode_barang"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Kode Barang
                        </label>
                        <input
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="text"
                          name="kode_barang"
                          id="kode_barang"
                          onChange={handlechange}
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          for="nama_barang"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Nama Barang
                        </label>
                        <input
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="text"
                          name="nama_barang"
                          id="nama_barang"
                          onChange={handlechange}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="">
                          <label
                            for="stok"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Stok Barang
                          </label>
                          <input
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            name="stok"
                            id="stok"
                            onChange={handlechange}
                          />
                        </div>
                        <div className="">
                          <label
                            for="harga_jual"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Harga Jual
                          </label>
                          <input
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            name="harga_jual"
                            id="harga_jual"
                            onChange={handlechange}
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label
                          for="jenis"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Suplier
                        </label>
                        <select
                          id="suplier"
                          name="suplier"
                          onChange={handlechange}
                          defaultValue=""
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Pilih Suplier</option>
                          {mysuplier &&
                            mysuplier.map((data) => {
                              return (
                                <option key={data.id} value={data.nama_suplier}>
                                  {data.nama_suplier}
                                </option>
                              );
                            })}
                        </select>
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
                        onClick={closeModal}
                        type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Tambah Barang
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isUpdate} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalUpdate}>
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
                <Dialog.Panel className="w-full w-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <form onSubmit={handleupdate}>
                      <div>
                        <label
                          for="kode_barang"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Kode Barang
                        </label>
                        <input
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="text"
                          name="kode_barang"
                          id="kode_barang"
                          value={kode_barang}
                          onChange={handlechange}
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          for="nama_barang"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Nama Barang
                        </label>
                        <input
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="text"
                          name="nama_barang"
                          id="nama_barang"
                          value={nama_barang}
                          onChange={handlechange}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="">
                          <label
                            for="stok"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Stok Barang
                          </label>
                          <input
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            name="stok"
                            id="stok"
                            value={stok}
                            onChange={handlechange}
                          />
                        </div>
                        <div className="">
                          <label
                            for="harga_jual"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Harga Jual
                          </label>
                          <input
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            name="harga_jual"
                            id="harga_jual"
                            value={harga_jual}
                            onChange={handlechange}
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label
                          for="jenis"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Suplier
                        </label>
                        <select
                          id="suplier"
                          name="suplier"
                          onChange={handlechange}
                          defaultValue=""
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected value={suplier}>
                            {suplier}
                          </option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                        </select>
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
                          value={catatan}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        ></textarea>
                      </div>

                      <button
                        onClick={closeModalUpdate}
                        type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Edit Barang
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

export default Barang;
