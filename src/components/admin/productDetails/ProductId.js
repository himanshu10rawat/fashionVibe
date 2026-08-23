"use client";

import { useParams } from "next/navigation";

export default function ProductId() {
  const { id } = useParams();
  return id;
}
