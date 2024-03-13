import type { RowId, RowElement } from "./interface";

declare function insertRow(row: RowElement): RowId;
declare function deleteRow(rowID: RowId): void;
declare function updateRow(rowID: RowId, row: Partial<RowElement>): void;
