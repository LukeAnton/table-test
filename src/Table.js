import React from "react";
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from "react-table";

const Table = () => {
  const instance = useTable(
    {
      data: ["hello", "olla", "hiii", "onallooloo", "doing", "wasap"],
      columns: ["meow", "meew", "woof", "weef", "wooow", "wpaaaos"],
    },
    useGroupBy,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
  );
  return <instance />;
};

export default Table;
