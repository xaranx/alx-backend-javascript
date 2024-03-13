/// <reference path="./crud.d.ts" />
import { RowId, RowElement } from "./interface.js";
import * as CRUD from "./crud.js"

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
}

const newRowId: RowId = CRUD.insertRow(row)
const updatedRow: Partial<RowElement> = { age: 23 }

CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId)
