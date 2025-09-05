import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>({
    container : {
        backgroundColor :theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    }
}));

export default function App() {
    const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AddPhotoAlternateIcon />
          <Typography variant="h6">prueba</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className="classes.container">
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Aguante argentina
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Esta es una web de prueba para aprender Material UI y asi poder
              expandir mis conocimientos en la programción :)
            </Typography>
            <div>
              <Grid container spacing={2} jutify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    hola
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlained" color="primary">
                    otro
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
