import React from "react";
import { useTranslation } from "react-i18next";

function App(): JSX.Element {
  const { t } = useTranslation();
  return <h1>{t("Welcome to React")}</h1>;
}

export default App;
