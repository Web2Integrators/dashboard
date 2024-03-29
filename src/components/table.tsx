/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import HotTable, { HotColumn } from "@handsontable/react";

import "handsontable/dist/handsontable.full.css";
import {
  CheckboxCellType,
  NumericCellType,
  registerCellType,
} from "handsontable/cellTypes";
import {
  AutoColumnSize,
  Autofill,
  ContextMenu,
  CopyPaste,
  DropdownMenu,
  Filters,
  HiddenRows,
  registerPlugin,
} from "handsontable/plugins";
import { rows } from "~/dashboard_data/table_data";

export const Table = qwikify$(() => {
  registerCellType(CheckboxCellType);
  registerCellType(NumericCellType);

  registerPlugin(AutoColumnSize);
  registerPlugin(Autofill);
  registerPlugin(ContextMenu);
  registerPlugin(CopyPaste);
  registerPlugin(DropdownMenu);
  registerPlugin(Filters);
  registerPlugin(HiddenRows);

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <HotTable
          data={rows}
          colWidths={[140, 126, 192, 100, 100, 90, 90, 110, 97]}
          colHeaders={[
            "Company name",
            "Country",
            "Name",
            "Sell date",
            "Order ID",
            "In stock",
            "Qty",
            "Progress",
            "Rating",
          ]}
          dropdownMenu={true}
          contextMenu={true}
          filters={true}
          rowHeaders={true}
          manualRowMove={true}
          navigableHeaders={true}
          autoWrapRow={true}
          autoWrapCol={true}
          licenseKey="non-commercial-and-evaluation"
        >
          <HotColumn data={1} />
          <HotColumn data={2} />
          <HotColumn data={3} />
          <HotColumn data={5} />
          <HotColumn data={6} type="checkbox" className="htCenter" />
          <HotColumn data={7} type="numeric" />
          <HotColumn data={8} readOnly={true} className="htMiddle" />
          <HotColumn data={9} readOnly={true} className="htCenter" />
        </HotTable>
      </div>
    </>
  );
});
