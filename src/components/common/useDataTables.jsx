import { useEffect } from "react";
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt/js/dataTables.dataTables";

const useDataTables = () => {
  useEffect(() => {
    const table = $("#my-table").DataTable({
      paging: true,
      ordering: true,
      language: { search: "", searchPlaceholder: "Search..." },
      initComplete: function () {
        const dataTableWrapper = $(".dataTables_wrapper");
        const selectBox = dataTableWrapper.find(".dataTables_length");
        const searchInput = dataTableWrapper.find(".dataTables_filter");

        const newDiv = $("<div class='custom_filters'></div>");
        newDiv.append(selectBox);
        newDiv.append(searchInput);

        dataTableWrapper.prepend(newDiv);
      },
    });
    return function () {
      table.destroy();
    };
  }, []);
};

export default useDataTables;
