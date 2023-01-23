import { combineReducers } from "redux";
import { authreducers } from "./Auth";
import { addbarang } from "./Barang";
import { laporan } from "./Laporan";
import { pengeluaran } from "./pengeluaran";
import { pesanan } from "./pesanan";
import { suplier } from "./suplier";
const reducers = combineReducers({
  Auth: authreducers,
  barang: addbarang,
  pengeluaran: pengeluaran,
  suplier: suplier,
  laporan: laporan,
  pesanan: pesanan,
});

export default reducers;
