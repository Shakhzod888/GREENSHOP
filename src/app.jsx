import React from "react";
import { MantineProvider, createTheme } from "@mantine/core";
import Pages from "./components/pages";

export default class App extends React.Component {
  render() {
    const theme = createTheme({});
    return (
      <>
        <MantineProvider theme={theme}>
          <Pages />
        </MantineProvider>
      </>
    );
  }
}
