import Wrapper from "@/layout/Wrapper/Wrapper";
import { ThemeContextProvider } from "@/muitheme/ThemeContextProvider";
import theme from "@/muitheme/palette";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Globalwrapper } from "@/styles/Stylecomponents/Globalstylewrapper";
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Globalwrapper>
        <QueryClientProvider client={queryClient}>
          <ThemeContextProvider>
            <ThemeProvider theme={theme}>
              <Wrapper>
                <Component {...pageProps} />
              </Wrapper>
            </ThemeProvider >
          </ThemeContextProvider>
        </QueryClientProvider>
      </Globalwrapper>
    </>
  )
}
