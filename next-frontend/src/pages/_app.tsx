import "../styles/globals.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;

/*import "../styles/globals.css";
import { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // Check if the page component has a getLayout function, otherwise use a default layout
  const getLayout =
    (Component as any).getLayout || ((page: React.ReactNode) => page);

  // Apply the layout and render the component
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;*/
