import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { Icon, Text } from "src/components";
import { CustomPalette } from "src/theme";
import Link from "next/link";
import { IconTypes } from "src/components/icon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "2rem",
    marginLeft: "1.5rem",
    marginRight: "5rem",
    maxHeight: "50px",
  },
  link: {
    alignItems: "center",
    color: "black",
    textDecoration: "none",
  },
}));
interface MenuItemProp {
  to: string;
  title: string;
  icon: IconTypes;
}

const MenuItem = ({ to, title, icon }: MenuItemProp) => {
  const classes = useStyles();

  // 스타일링
  return (
    <Link href={to}>
      <a className={classes.link}>
        <div className={classes.root}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <div style={{ marginRight: "0.5rem" }}>
              <Icon icon={icon} />
            </div>
            <Text preset="body_500" color={CustomPalette.grey9}>
              {title}
            </Text>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default MenuItem;
