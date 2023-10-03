import type { FC } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

/********** TODO: 削除（MOCK用のための固定データをimport） ************/
import manualData from "../mock-data/manual.json";
/*******************************************************************/

export interface ManualDialogProps {
  open: boolean;
  onClose: () => void;
}

const ManualDialog: FC<ManualDialogProps> = (props) => {
  const manuals = manualData;
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="manual-dialog-title"
      aria-describedby="manual-dialog-description"
    >
      <DialogTitle id="manual-dialog-title">マニュアル一覧</DialogTitle>
      <DialogContent>
        <List>
          {manuals.map((manual) => (
            <ListItem disableGutters key={manual.id}>
              <ListItemButton target="_blank" href={manual.url}>
                <ListItemText primary={manual.manual_name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          閉じる
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ManualDialog;
