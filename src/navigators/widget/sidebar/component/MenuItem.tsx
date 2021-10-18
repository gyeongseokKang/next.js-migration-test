import React from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { CustomColor } from "src/theme";

const StyledButton = styled(Button)({
  fontSize: "1rem",
  fontFamily: "inherit",
  color: CustomColor.menuItem.text,
  // "&:hover": {
  //   color: CustomColor.text,
  //   background: CustomPalette.grey6,
  // },
  "& .MuiSvgIcon-root": {
    fontSize: "2rem !important",
    color: CustomColor.menuItem.icon,
  },
});

const useStyles = makeStyles((theme) => ({
  menuItem: {
    flexGrow: 1,
    margin: "0.5rem 1rem 0.5rem 1rem",
    padding: "1rem 1rem 0rem 1rem",
    maxHeight: "50px",
  },
}));
interface MenuItemProp {
  icon?: any;
  to: string;
  title: string;
}

const MenuItem = ({ icon, to, title }: MenuItemProp) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.menuItem}>
      <StyledButton
        startIcon={icon}
        onClick={() => {
          router.push(`${to}`);
        }}
      >
        {title}
      </StyledButton>
    </div>
  );
};

export default MenuItem;
