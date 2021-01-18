import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function AppBarComponent() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="title">
            Exercise Database
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
