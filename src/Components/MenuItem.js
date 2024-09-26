import * as React from "react";
import Collapse from "@mui/material/Collapse";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {
  Grid,
  Typography,
  ListItemButton,
  ListItemText,
  List,
} from "@mui/material";

const MenuItem = ({
  menuData,
  levelPref,
  isSelected,
  setIsSelected,
  setPathName,
}) => {
  const [open, setOpen] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState({});
  const [openMenuItem, setOpenMenuItem] = React.useState({});

  // const levelPref = "level";
  // const menuData = [
  //   {
  //     nama: "MASTER",
  //     children: [
  //       {
  //         nama: "Master Struktur",
  //         children: [
  //           {
  //             nama: "Struktur Organisasi",
  //             children: [],
  //           },
  //         ],
  //       },
  //       {
  //         nama: "Master Hak Akses",
  //         children: [
  //           {
  //             nama: "Akses Web",
  //             children: [],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     nama: "CHILD",
  //     children: [
  //       {
  //         nama: "Lol",
  //         children: [],
  //       },
  //     ],
  //   },
  // ];

  const handleToggle = (level, indeks, path) => {
    setOpenMenu((prev) => ({
      ...prev,
      [level]: !prev[level],
    }));
    setIsSelected(indeks);
    setPathName(path);
  };

  // const renderMenuItems = (items, levelPrefix) => {
  //   return items.map((item, love) => {
  //     const level = `${levelPrefix}-${love}`;
  //     return (
  //       <div key={level}>
  //         <ListItemButton onClick={() => handleToggle(level)}>
  //           <ListItemText primary={item.name} />
  //         </ListItemButton>
  //         {item.children && item.children.length > 0 && (
  //           <Collapse in={openMenu[level]} timeout="auto" unmountOnExit>
  //             <List component="div" disablePadding>
  //               {renderMenuItems(item.children, level)}
  //             </List>
  //           </Collapse>
  //         )}
  //       </div>
  //     );
  //   });
  // };

  const renderMenuItems = (items, levelPrefix) => {
    return items.map((item, index) => {
      const level = `${levelPrefix}-${index}`;
      //const isClicked = item.children && item.children.map((childMenu) => (childMenu.children && childMenu.children.some(son => son.id === isSelected)))
      const hasClickedChild =
        item.children &&
        item.children.some(
          (child) =>
            child.children &&
            child.children.some((son) => son.id === isSelected)
        );
      const isClicked =
        item.children && item.children.some((child) => child.id === isSelected);

      return (
        <Grid key={level} container direction="row" paddingLeft="20px">
          {/* <ListItemButton onClick={() => handleToggle(level)}>
            <ListItemText primary={item.name} />
          </ListItemButton> */}
          {item.hasChildren === "TRUE" && item.path_menu && (
            <Grid item>
              <ArrowRightIcon
                onClick={() => handleToggle(level, item.id, item.path_menu)}
                sx={{
                  transform:
                    isSelected === item.id || hasClickedChild || isClicked
                      ? "rotate(90deg)"
                      : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Grid>
          )}
          <Grid item>
            {item.hasChildren && (
              <Typography
                onClick={() => handleToggle(level, item.id, item.path_menu)}
                sx={{
                  fontSize: 15,
                  fontWeight:
                    isSelected === item.id || hasClickedChild || isClicked
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
              marginBottom: item.hasChildren === "TRUE" ? "0px" : "8px",
              paddingLeft: item.hasChildren === "TRUE" ? "7px" : "0px",
              paddingRight: item.hasChildren === "FALSE" ? "100px" : "0px"
            }}
          >
            {item.children && item.children.length > 0 && (
              <Collapse
                in={isSelected === item.id || hasClickedChild || isClicked}
                timeout="auto"
                unmountOnExit
              >
                <Typography>{renderMenuItems(item.children, level)}</Typography>
              </Collapse>
            )}
          </Grid>
        </Grid>
      );
    });
  };

  // const renderMenuItems = (items, levelPrefix) => {
  //   return items.map((item, index) => {
  //     const level = `${levelPrefix}-${index}`;
  //     return (
  //         <Grid
  //           key={level}
  //           container
  //           direction="row"
  //           paddingLeft="25px"
  //           onClick={() => handleToggle(level)}
  //         >
  //           <Grid item xs={1}>
  //             <ArrowRightIcon
  //               sx={{
  //                 transform: openMenu[level] ? "rotate(90deg)" : "rotate(0deg)",
  //                 transition: "transform 0.3s ease",
  //               }}
  //             />
  //           </Grid>
  //           <Grid item xs={11}>
  //             <Typography fontWeight={700}>{item.nama}</Typography>
  //           </Grid>
  //           {item.children && item.children.length > 0 && (
  //             <Collapse in={openMenu[level]} timeout="auto" unmountOnExit>
  //               <Grid container direction="row" paddingLeft="25px">
  //                 <Grid xs={1}>
  //                   <ArrowRightIcon
  //                     sx={{
  //                       transform: openMenu[level] ? "rotate(90deg)" : "rotate(0deg)",
  //                       transition: "transform 0.3s ease",
  //                     }}
  //                   />
  //                 </Grid>
  //                 <Grid xs={11} paddingLeft="15px">
  //                   <Typography>
  //                     {renderMenuItems(item.children, level)}
  //                   </Typography>
  //                 </Grid>
  //               </Grid>
  //             </Collapse>
  //           )}
  //         </Grid>
  //     );
  //   });
  // };

  // items.map((item, index) => {
  //   const level = `${levelPrefix} - ${index}`;
  //   return (
  //     <Grid
  //       key={level}
  //       container
  //       direction="row"
  //       paddingLeft="25px"
  //       onClick={() => handleToggle(level)}
  //     >
  //       <Grid item xs={1}>
  //         <ArrowRightIcon
  //           sx={{
  //             transform: openMenu ? "rotate(90deg)" : "rotate(0deg)",
  //             transition: "transform 0.3s ease",
  //           }}
  //         />
  //       </Grid>
  //       <Grid item xs={11}>
  //         <Typography fontWeight={700}>{item.nama}</Typography>
  //       </Grid>
  //       {item.children.nama && item.children.nama.length > 0 && (
  //         <Collapse in={openMenu[level]} timeout="auto" unmountOnExit>
  //           <Grid container direction="row" paddingLeft="25px">
  //             <Grid xs={1}>
  //               <ArrowRightIcon
  //                 sx={{
  //                   transform: openMenu ? "rotate(90deg)" : "rotate(0deg)",
  //                   transition: "transform 0.3s ease",
  //                 }}
  //               />
  //             </Grid>
  //             <Grid xs={11} paddingLeft="15px">
  //               <Typography>{MenuItem(item.children.nama, level)}</Typography>
  //             </Grid>
  //           </Grid>
  //         </Collapse>
  //       )}
  //     </Grid>
  //   );
  // });

  return (
    <>{renderMenuItems(menuData, levelPref)}</>

    // items.map((item, index) => {
    // const level = `${levelPrefix} - ${index}`;
    // return (
    //   <Grid key={level} container direction="row" paddingLeft="25px" onClick={() => handleToggle(level)}>
    //     <Grid item xs={1}>
    //       <ArrowRightIcon
    //         sx={{
    //           transform: openMenu ? "rotate(90deg)" : "rotate(0deg)",
    //           transition: "transform 0.3s ease",
    //         }}
    //       />
    //     </Grid>
    //     <Grid item xs={11}>
    //       <Typography fontWeight={700}>{item.nama}</Typography>
    //     </Grid>
    //     {item.children.nama && item.children.nama.length > 0 && (
    //       <Collapse in={openMenu[level]} timeout="auto" unmountOnExit>
    //         <Grid container direction="row" paddingLeft="25px">
    //           <Grid xs={1}>
    //             <ArrowRightIcon
    //               sx={{
    //                 transform: openMenu ? "rotate(90deg)" : "rotate(0deg)",
    //                 transition: "transform 0.3s ease",
    //               }}
    //             />
    //           </Grid>
    //           <Grid xs={11} paddingLeft="15px">
    //             <Typography>{MenuItem(item.children.nama, level)}</Typography>
    //           </Grid>
    //         </Grid>
    //       </Collapse>
    //     )}
    //   </Grid>
    // );
    // }
    //)
    // <Grid
    //   container
    //   direction="row"
    //   paddingLeft="25px"
    // >
    //   <Grid item xs={1} onClick={() => setOpen(!open)}>
    //     <ArrowRightIcon
    //       sx={{
    //         transform: open ? "rotate(90deg)" : "rotate(0deg)",
    //         transition: "transform 0.3s ease"
    //       }}
    //     />
    //   </Grid>
    //   <Grid item xs={11} onClick={() => setOpen(!open)}>
    //     <Typography fontWeight={700}>MASTER</Typography>
    //   </Grid>
    //   <Collapse in={open}>
    //     {rows.map((row) => {
    //       return (
    //         <>
    //           <Grid container direction="row" paddingLeft="25px" key={row.kode}>
    //             <Grid xs={1} onClick={() => setIsOpen(!isOpen)}>
    //               <ArrowRightIcon
    //                 sx={{
    //                   transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
    //                   transition: "transform 0.3s ease",
    //                 }}
    //               />
    //             </Grid>
    //             <Grid xs={11} paddingLeft="15px">
    //               <Typography>{row.nama}</Typography>
    //             </Grid>
    //           </Grid>
    //         </>
    //       );
    //     })}
    //   </Collapse>
    // </Grid>
  );
};

export default MenuItem;
