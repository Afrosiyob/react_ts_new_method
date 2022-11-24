import React, { ReactElement, Suspense } from "react";

import ReactRouterProvider from "./components/ReactRouterProvider";

function RootProvider(): ReactElement {
  return (
    // other provider start
    <Suspense fallback={<div> ...loading </div>}>
      <ReactRouterProvider />
    </Suspense>
    // other provider end
  );
}

export default RootProvider;
