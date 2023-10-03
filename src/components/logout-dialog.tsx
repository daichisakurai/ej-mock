import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export interface LogoutDialogProps {
  open: boolean;
  onClose: () => void;
}

const LogoutDialog: FC<LogoutDialogProps> = (props) => {
  const navigate = useNavigate();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      aria-labelledby="logout-dialog-title"
      aria-describedby="logout-dialog-description"
    >
      <DialogTitle id="logout-dialog-title">ログアウト</DialogTitle>
      <DialogContent>
        <DialogContentText id="logout-dialog-description">
          ログアウトしてもよろしいですか？
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          いいえ
        </Button>
        <Button onClick={handleLogout}>はい</Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
