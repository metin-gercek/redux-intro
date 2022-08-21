import { configureStore } from "@reduxjs/toolkit";
import reducer from "./index";

export default function createStore() {
    return configureStore({reducer})
}