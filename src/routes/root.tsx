import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { HomeLayout } from "../components/home-layout";
import { SearchForm } from "../components/call-history/search-form";

const Root: React.FC = () => {
  return (
    <>
      <HomeLayout>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item md={3} xs={12}>
              <SearchForm />
            </Grid>
          </Grid>
        </Container>
      </HomeLayout>
    </>
  );
};

export default Root;
