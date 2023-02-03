/* eslint-disable prettier/prettier */
import {Routes, Route} from "react-router-dom";
import {DefaultLayout} from "./DefaultLayoult";
import {History} from "./pages/history";
// eslint-disable-next-line prettier/prettier
import {Home} from "./pages/home";

export function Router() {
  return (
    <Routes>
      <Route path="" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
