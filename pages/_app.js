import Layout from "../components/Layout";
import "react-awesome-slider/dist/styles.css";

import { Provider } from "react-redux";
import { useStore } from "../store";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
