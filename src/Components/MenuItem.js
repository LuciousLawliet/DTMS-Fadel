import * as React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Grid, Typography, Collapse } from "@mui/material";

const MenuItem = ({
  menuData,
  levelPref,
  isSelected,
  setIsSelected,
  setPathName,
}) => {
  const handleToggle = (level, indeks, path) => {
    setIsSelected(indeks);
    setPathName(path);
  };

  const renderMenuItems = (items, levelPrefix) => {
    return items.map((item, index) => {
      const level = `${levelPrefix}-${index}`;
      //const isClicked = item.children && item.children.map((childMenu) => (childMenu.children && childMenu.children.some(son => son.id === isSelected)))
      const hasClickedChild =
        item.child &&
        item.child.some(
          (childs) =>
            childs.child &&
            childs.child.some((son) => son.menu_id === isSelected)
        );

      const isClicked =
        item.child &&
        item.child.some((childs) => childs.menu_id === isSelected);

      return (
        <Grid key={level} container direction="row" paddingLeft="20px">
          {item.hasChild === "TRUE" && item.path_menu && (
            <Grid item>
              <ArrowRightIcon
                onClick={() =>
                  handleToggle(level, item.menu_id, item.path_menu)
                }
                sx={{
                  transform:
                    isSelected === item.menu_id || hasClickedChild || isClicked
                      ? "rotate(90deg)"
                      : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Grid>
          )}
          <Grid item>
            {item.hasChild && (
              <Typography
                onClick={() =>
                  handleToggle(level, item.menu_id, item.path_menu)
                }
                sx={{
                  fontSize: 15,
                  fontWeight:
                    isSelected === item.menu_id || hasClickedChild || isClicked
                      ? "700"
                      : "400",
                }}
              >
                {item.nama}
              </Typography>
            )}
          </Grid>
          <Grid
            container
            direction="row"
            sx={{
              marginBottom: item.hasChild === "TRUE" ? "0px" : "8px",
              paddingLeft: item.hasChild === "TRUE" ? "7px" : "0px",
              paddingRight: item.hasChild === "FALSE" ? "100px" : "0px",
            }}
          >
            {item.child && item.child.length > 0 && (
              <Collapse
                in={isSelected === item.menu_id || hasClickedChild || isClicked}
                timeout="auto"
                unmountOnExit
              >
                <Typography>{renderMenuItems(item.child, level)}</Typography>
              </Collapse>
            )}
          </Grid>
        </Grid>
      );
    });
  };

  return <>{renderMenuItems(menuData, levelPref)}</>;
};

export default MenuItem;
