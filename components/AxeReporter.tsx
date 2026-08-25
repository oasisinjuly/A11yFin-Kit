"use client";

import { useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";

export const AxeReporter: React.FC = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const axe = require("@axe-core/react");
      axe(React, ReactDOM, 1000);
    }
  }, []);

  return null;
};