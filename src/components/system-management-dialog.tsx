import type { FC } from "react";
// import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";

export interface SystemManagementDialogProps {
  open: boolean;
  onClose: () => void;
}

const SystemManagementDialog: FC<SystemManagementDialogProps> = (props) => {
  // const navigate = useNavigate();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="system-management-dialog-title"
      aria-describedby="system-management-dialog-description"
    >
      <DialogTitle id="system-management-dialog-title">
        システム管理画面
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: 250 }}
          >
            利用者CSVインポート
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ width: 250 }}
          >
            利用者CSVエクスポート
          </Button>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: 250 }}
          >
            利用状況CSVエクスポート
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ width: 250 }}
          >
            お知らせ情報登録
          </Button>
        </Stack>
        <Stack spacing={2} direction="row-reverse" sx={{ mt: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ width: 250 }}
          >
            マニュアル更新
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          閉じる
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SystemManagementDialog;
