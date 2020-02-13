import React, { useState } from 'react';
import {
  EditingState, SummaryState, IntegratedSummary,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table, TableHeaderRow, TableEditRow, TableEditColumn, DragDropProvider,
  TableFixedColumns, TableSummaryRow,
} from '@devexpress/dx-react-grid-material-ui';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TableCell from '@material-ui/core/TableCell';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  lookupEditCell: {
    padding: theme.spacing(1),
  },
  dialog: {
    width: 'calc(100% - 16px)',
  },
  inputRoot: {
    width: '100%',
  },
  selectMenu: {
    position: 'absolute !important',
    zIndex: '1600 !important',
  },
});

const AddButton = ({ onExecute }) => (
  <div style={{ textAlign: 'center' }}>
    <Button
      color="primary"
      onClick={onExecute}
      title="Create new row"
    >
      New
    </Button>
  </div>
);

const EditButton = ({ onExecute }) => (
  <IconButton onClick={onExecute} title="Edit row">
    <EditIcon />
  </IconButton>
);

const DeleteButton = ({ onExecute }) => (
  <IconButton
    onClick={() => {
      // eslint-disable-next-line
      if (window.confirm('Are you sure you want to delete this row?')) {
        onExecute();
      }
    }}
    title="Delete row"
  >
    <DeleteIcon />
  </IconButton>
);

const CommitButton = ({ onExecute }) => (
  <IconButton onClick={onExecute} title="Save changes">
    <SaveIcon />
  </IconButton>
);

const CancelButton = ({ onExecute }) => (
  <IconButton color="secondary" onClick={onExecute} title="Cancel changes">
    <CancelIcon />
  </IconButton>
);

const commandComponents = {
  add: AddButton,
  edit: EditButton,
  delete: DeleteButton,
  commit: CommitButton,
  cancel: CancelButton,
};

const Command = ({ id, onExecute }) => {
  const CommandButton = commandComponents[id];
  return (
    <CommandButton
      onExecute={onExecute}
    />
  );
};

const availableValues = {
  task: [
    {
      id: 1,
      name: 'test',
    },
    {
      id: 2,
      name: 'test2',
    },
  ],
};

const LookupEditCellBase = ({
  availableColumnValues, value, onValueChange, classes,
}) => (
  <TableCell
    className={classes.lookupEditCell}
  >
    <Select
      value={value}
      onChange={event => onValueChange(event.target.value)}
      MenuProps={{
        className: classes.selectMenu,
      }}
      input={(
        <Input
          classes={{ root: classes.inputRoot }}
        />
      )}
    >
      {availableColumnValues.map(item => (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  </TableCell>
);
export const LookupEditCell = withStyles(styles, { name: 'dropdown' })(LookupEditCellBase);

const Cell = (props) => {
  return <Table.Cell {...props} />;
};

const EditCell = (props) => {
  const { column } = props;
  const availableColumnValues = availableValues[column.name];
  if (availableColumnValues) {
    return <LookupEditCell {...props} availableColumnValues={availableColumnValues} />;
  }
  return <TableEditRow.Cell {...props} />;
};

const getRowId = row => row.id;

export default () => {
  const [columns] = useState([
    {
      name: 'task',
      title: 'Наименование',
    },
    {
      name: 'count',
      title: 'Кол-во',
    },
    {
      name: 'price',
      title: 'Цена',
    },
    {
      name: 'discount',
      title: 'Скидка',
    },
    {
      name: 'note',
      title: 'Заметки',
    },
  ]);
  const [rows, setRows] = useState([]);
  const [tableColumnExtensions] = useState([
    {
      columnName: 'task',
      width: 120,
    },
    {
      columnName: 'count',
      width: 80,
    },
    {
      columnName: 'price',
      width: 80,
    },
    {
      columnName: 'discount',
      width: 80,
    },
    {
      columnName: 'note',
      width: 220,
    },
  ]);
  const [editingRowIds, getEditingRowIds] = useState([]);
  const [addedRows, setAddedRows] = useState([]);
  const [rowChanges, setRowChanges] = useState({});
  const [leftFixedColumns] = useState([TableEditColumn.COLUMN_TYPE]);
  const [totalSummaryItems] = useState([
    {
      columnName: 'discount',
      type: 'avg',
    },
    {
      columnName: 'outPrice',
      type: 'sum',
    },
  ]);

  const changeAddedRows = value => setAddedRows(
    value.map(row => (Object.keys(row).length ? row : {
      task: availableValues.task[0].id,
      count: 0,
      price: 0,
      discount: 0,
      note: undefined,
    })),
  );

  const deleteRows = (deletedIds) => {
    const rowsForDelete = rows.slice();
    deletedIds.forEach((rowId) => {
      const index = rowsForDelete.findIndex(row => row.id === rowId);
      if (index > -1) {
        rowsForDelete.splice(index, 1);
      }
    });
    return rowsForDelete;
  };

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
    }
    if (deleted) {
      changedRows = deleteRows(deleted);
    }
    setRows(changedRows);
  };

  return (
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
      >
        <EditingState
          editingRowIds={editingRowIds}
          onEditingRowIdsChange={getEditingRowIds}
          rowChanges={rowChanges}
          onRowChangesChange={setRowChanges}
          addedRows={addedRows}
          onAddedRowsChange={changeAddedRows}
          onCommitChanges={commitChanges}
        />
        <SummaryState
          totalItems={totalSummaryItems}
        />

        <IntegratedSummary />
        <DragDropProvider />

        <Table
          columnExtensions={tableColumnExtensions}
          cellComponent={Cell}
        />
        <TableHeaderRow />
        <TableEditRow
          cellComponent={EditCell}
        />
        <TableEditColumn
          width={120}
          showAddCommand={!addedRows.length}
          showEditCommand
          showDeleteCommand
          commandComponent={Command}
        />
        <TableSummaryRow />
        <TableFixedColumns
          leftColumns={leftFixedColumns}
        />
      </Grid>
    </Paper>
  );
};
