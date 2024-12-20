import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./@App/index.css";
import "./@App/Product.css";

import "swiper/swiper-bundle.css";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { routers } from "./feature";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={routers} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
