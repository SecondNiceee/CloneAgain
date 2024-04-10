import { useMemo } from "react";

export const useFilteredArr = (ordersInformation , filterBy ) => {
    const filteredArr = useMemo(() => {
        return ordersInformation.filter((e) =>
          e.title.toLowerCase().includes(filterBy.toLowerCase())
        );
      }, [filterBy, ordersInformation]);
    return filteredArr
}