import { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Landing from "./Landing";
import { OAuth } from "./Oauth";
import logo from "./logo.svg";
import styles from "./App.module.css";

export const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <Routes>
          <Route path="/" component={Landing} />
          <Route path="/oauth" component={OAuth} />
        </Routes>
      </header>
    </div>
  );
};
