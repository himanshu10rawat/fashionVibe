"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("resize", callback);

  return () => {
    window.removeEventListener("resize", callback);
  };
}

function getSnapshot() {
  return window.innerWidth;
}

function getServerSnapshot() {
  return null;
}

export default function useGetDeviceWidth() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
