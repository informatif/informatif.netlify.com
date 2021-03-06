import React from "react";
import { FEED_ID_TO_TITLE } from "../preferences/constants";
import Feed from "./Feed";
import { useApi } from "./hooks";

export default function MediumFeed() {
  const { status, items } = useApi("medium");

  return <Feed title={FEED_ID_TO_TITLE.medium} status={status} items={items} />;
}
