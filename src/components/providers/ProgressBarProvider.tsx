"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = () => {
  return (
    <ProgressBar
      height="8px"
      color="#d4d4d8"
      options={{ showSpinner: true }}
      shallowRouting
    />
  );
};

export default ProgressBarProvider;
