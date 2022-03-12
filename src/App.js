import React, { Suspense, lazy } from "react";
import { Button, ConfigProvider } from "antd";
import "antd/dist/antd.variable.min.css";
const LazyProTable = lazy(() => import("./LazyProTable"));
const LazyButton = lazy(() => import("./LazyButton"));

const App = () => (
  <div className="App">
    <Button
      type="primary"
      onClick={() =>
        ConfigProvider.config({
          theme: {
            primaryColor: "#25b864",
          },
        })
      }
    >
      change color
    </Button>
    <Suspense fallback={"loading"}>
      <LazyProTable />
      <LazyButton />
    </Suspense>
  </div>
);

export default App;
