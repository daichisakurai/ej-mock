import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// import { jaJP } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const workType = [
  {
    value: "empty",
    label: "　",
  },
  {
    value: "true",
    label: "あり",
  },
  {
    value: "false",
    label: "なし",
  },
];

export const SearchForm: React.FC = (props) => {
  return (
    <Card {...props}>
      <CardHeader
        title="検索項目"
        titleTypographyProps={{ color: "primary" }}
      />
      <Divider />
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack>
            <DateTimePicker
              label="通話開始時刻"
              ampm={false}
              format="YYYY-MM-DD hh:mm"
              slotProps={{
                textField: {
                  InputLabelProps: { shrink: true },
                  size: "small",
                },
              }}
              timeSteps={{ minutes: 1 }}
            />
            <Typography>～</Typography>
            <DateTimePicker
              label="通話開始時刻"
              ampm={false}
              format="YYYY-MM-DD hh:mm"
              slotProps={{
                textField: {
                  InputLabelProps: { shrink: true },
                  size: "small",
                },
              }}
              timeSteps={{ minutes: 1 }}
            />
          </Stack>
          <Stack sx={{mt: 3}}>
            <DateTimePicker
              label="通話終了時刻"
              ampm={false}
              format="YYYY-MM-DD hh:mm"
              slotProps={{
                textField: {
                  InputLabelProps: { shrink: true },
                  size: "small",
                },
              }}
              timeSteps={{ minutes: 1 }}
            />
            <Typography>～</Typography>
            <DateTimePicker
              label="通話終了時刻"
              ampm={false}
              format="YYYY-MM-DD hh:mm"
              slotProps={{
                textField: {
                  InputLabelProps: { shrink: true },
                  size: "small",
                },
              }}
              timeSteps={{ minutes: 1 }}
            />
          </Stack>
        </LocalizationProvider>
        <Stack sx={{mt: 3}}>
          <TextField
            id="serach-form-reception-terminal"
            name="serach-form-reception-terminal"
            label="受付端末名"
            variant="outlined"
            color="primary"
            fullWidth
          />
        </Stack>
        <Stack sx={{mt: 3}}>
          <TextField
            id="serach-form-brtr"
            name="serach-form-brtr"
            label="BRTR"
            variant="outlined"
            color="primary"
            fullWidth
          />
        </Stack>
        <Stack sx={{mt: 3}}>
          <TextField
            id="serach-form-operator-terminal"
            name="serach-form-operator-terminal"
            label="オペレータ端末名称"
            variant="outlined"
            color="primary"
            fullWidth
          />
        </Stack>
        <Stack sx={{mt: 3}}>
          <TextField
            id="serach-form-work-type"
            name="serach-form-work-type"
            label="対応事務種別"
            variant="outlined"
            color="primary"
            fullWidth
          />
        </Stack>
        <Stack sx={{mt: 3}}>
          <TextField
            id="serach-form-memo"
            name="serach-form-memo"
            label="対応メモ記載"
            variant="outlined"
            color="primary"
            fullWidth
            select
          >
            {workType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </CardContent>
      <Divider />
      <CardActions>
        <Button size="small">検索</Button>
      </CardActions>
    </Card>
  );
};
