import "@ui5/webcomponents-react/dist/Assets.js";
import "@ui5/webcomponents-react/styles.css";
import "../styles/globals.css";
import { Avatar, ShellBar, ThemeProvider } from "@ui5/webcomponents-react/ssr";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import employeeIcon from "@ui5/webcomponents-icons/dist/employee.js";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const style = document.getElementById("server-side-styles");
    if (style) {
      style.parentNode?.removeChild(style);
    }
  }, []);

  const pathname = usePathname();

  return (
    <>
      <Head>
        <script
          data-ui5-config
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              theme: "sap_horizon",
            }),
          }}
        />
      </Head>
      <ThemeProvider staticCssInjected>
        <ShellBar
          logo={
            <Image
              src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/ui5-logo.svg"
              alt={"UI5 Web Components for React logo"}
              width={32}
              height={32}
            />
          }
          primaryTitle={
            pathname === "/"
              ? "Movies Database (List report) | UI5 Web Components for React"
              : "Movie Details | UI5 Web Components for React"
          }
          profile={<Avatar icon={employeeIcon} />}
        />
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </>
  );
}
