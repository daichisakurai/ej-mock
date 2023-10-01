import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
// import { jaJP } from '@mui/x-date-pickers';
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export const SearchForm: React.FC = (props) => {
  return (
    <Card {...props}>
      <CardHeader title="検索項目" />
      <Divider />
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimePicker"]}>
            <DateTimePicker
              label="通話開始時刻"
              ampm={false}
              format="YYYY-MM-DD hh:mm"
              slotProps={{
                textField: {
                  InputLabelProps: { shrink: true },
                  size: "small",
                  sx: {
                    "& .MuiInputBase-input": {
                      width: 185,
                      minWidth: 185
                    }
                  },
                },
              }}
              sx={{ width: 185 }}
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
          </DemoContainer>
        </LocalizationProvider>
      </CardContent>
      <CardActions>
        <Button size="small">検索</Button>
      </CardActions>
    </Card>
  );
};
