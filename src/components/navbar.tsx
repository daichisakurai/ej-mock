import * as React from "react";
import type { FC } from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { AppBarProps } from "@mui/material";
import LogoutDialog from "./logout-dialog";
import SystemManagementDialog from "./system-management-dialog";
import ManualDialog from "./manual-dialog";

interface NavbarProps extends AppBarProps {
  onOpenSidebar?: () => void;
}

const NavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const NavbarSecondary = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  boxShadow: theme.shadows[3],
}));

export const Navbar: FC<NavbarProps> = (props) => {
  const { ...other } = props;
  const [logoutOpen, setLogoutOpen] = React.useState<boolean>(false);
  const [SystemManagementOpen, setSystemManagementOpen] =
    React.useState<boolean>(false);
  const [manualOpen, setManualOpen] = React.useState<boolean>(false);

  const handleClickLogoutOpen = () => {
    setLogoutOpen(true);
  };

  const handleLogoutClose = () => {
    setLogoutOpen(false);
  };

  const handleClickSystemManagementOpen = () => {
    setSystemManagementOpen(true);
  };

  const handleSystemManagementClose = () => {
    setSystemManagementOpen(false);
  };

  const handleClickManualOpen = () => {
    setManualOpen(true);
  };

  const handleManualClose = () => {
    setManualOpen(false);
  };

  return (
    <>
      <NavbarRoot {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="inherit"
          >
            遠隔事務手続履歴管理システム
          </Typography>
          <Button color="inherit" onClick={handleClickSystemManagementOpen}>
            システム管理
          </Button>
          <Button color="inherit" onClick={handleClickManualOpen}>
            マニュアル
          </Button>
          <Button color="inherit" onClick={handleClickLogoutOpen}>
            ログアウト
          </Button>
        </Toolbar>
      </NavbarRoot>
      <NavbarSecondary
        sx={{
          minHeight: 6,
          top: 64,
          left: 0,
          px: 2,
        }}
      />
      <LogoutDialog open={logoutOpen} onClose={handleLogoutClose} />
      <SystemManagementDialog
        open={SystemManagementOpen}
        onClose={handleSystemManagementClose}
      />
      <ManualDialog open={manualOpen} onClose={handleManualClose} />
    </>
  );
};
