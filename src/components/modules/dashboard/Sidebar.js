import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Sidebar({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [attribute, setAttribute] = React.useState(false);
  const [category, setCategory] = React.useState(false);
  const [product, setProduct] = React.useState(false);
  const [section, setSection] = React.useState(false);
  const [banner, setBanner] = React.useState(false);
  const [price, setPrice] = React.useState(false);
  const [headline, setHeadline] = React.useState(false);
  const [news, setNews] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const [offer, setOffer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClickZone = () => {
    setAttribute(!attribute);
  };
  const hanldClickCity = () => {
    setCategory(!category);
  };
  const handleClickService = () => {
    setProduct(!product);
  };
  const handleClickWeight = () => {
    setSection(!section);
  };
  const handleClickPrice = () => {
    setPrice(!price);
  };
  const handleClickHeadline = () => {
    setHeadline(!headline);
  };
  const handleClickNews = () => {
    setNews(!news);
  };
  const handleBanner = () => {
    setBanner(!banner);
  };
  const handleMessage = () => {
    setMessage(!message);
  };
  const handleOffer = () => {
    setOffer(!offer);
  };

  const links = [
    { name: "Dashboard", path: "/", icon: <InboxIcon /> },
    {
      name: "Zone",
      path: "/image",
      icon: <MailIcon />,
      onClick: handleClickZone,
      nested: true,
      open: attribute,
      child: [
        {
          name: "View Zone",
          path: "/dashboard/zone",
          icon: <MailIcon />,
        },
      
      ],
    },
    {
      name: "City",
      path: "/dashboard/city",
      icon: <MailIcon />,
      onClick: hanldClickCity,
      nested: true,
      open: category,
      child: [
        {
          name: "View Cities",
          path: "/dashboard/city",
          icon: <MailIcon />,
        },
    
      ],
    },
    {
      name: "Service",
      path: "/image",
      icon: <MailIcon />,
      onClick: handleClickService,
      nested: true,
      open: product,
      child: [
        {
          name: "Service view",
          path: "/dashboard/service",
          icon: <MailIcon />,
        },
       
      ],
    },
    {
      name: "Weight",
      path: "/image",
      icon: <MailIcon />,
      onClick: handleClickWeight,
      nested: true,
      open: section,
      child: [
        {
          name: "Weight view",
          path: "/dashboard/weight",
          icon: <MailIcon />,
        },
       
      ],
    },
    {
      name: "Pricing",
      path: "/image",
      icon: <MailIcon />,
      onClick: handleClickPrice,
      nested: true,
      open: price,
      child: [
        {
          name: "Price view",
          path: "/dashboard/price",
          icon: <MailIcon />,
        },
       
      ],
    },
    {
      name: "Headline",
      path: "/image",
      icon: <MailIcon />,
      onClick: handleClickHeadline,
      nested: true,
      open: headline,
      child: [
        {
          name: "Headline view",
          path: "/dashboard/headline",
          icon: <MailIcon />,
        },
       
      ],
    },
    {
      name: "News",
      path: "/image",
      icon: <MailIcon />,
      onClick: handleClickNews,
      nested: true,
      open: news,
      child: [
        {
          name: "News view",
          path: "/dashboard/news",
          icon: <MailIcon />,
        },
       
      ],
    },
    {
      name: "Offers",
      path: "/image",
      icon: <MailIcon />,
      onClick: handleOffer,
      nested: true,
      open: offer,
      child: [
        {
          name: "Offer view",
          path: "/dashboard/offer",
          icon: <MailIcon />,
        },
       
      ],
    },
    {
      name: "Home Banner",
      path: "/banner",
      icon: <MailIcon />,
      onClick: handleBanner,
      nested: true,
      open: banner,
      child: [
        {
          name: "Banner View",
          path: "/dashboard/banner",
          icon: <MailIcon />,
        },
       
      ],
    },
    {
      name: "Client Messages",
      path: "/banner",
      icon: <MailIcon />,
      onClick: handleMessage,
      nested: true,
      open: message,
      child: [
        {
          name: "Message View",
          path: "/dashboard/message",
          icon: <MailIcon />,
        },
       
      ],
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {links.map((m, index) =>
            m.nested ? (
              <>
                <ListItem button onClick={m.onClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={m.name} />
                  {m.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={m.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {m.child.length
                      ? m.child.map((child, i) => (
                        <Link to={child.path} key={i} style={{ textDecoration: "none" }}>
                          <ListItem key={i} button className={classes.nested}>
                            <ListItemIcon>
                              <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={child.name} />
                          </ListItem>
                          </Link>
                        ))
                      : null}
                  </List>
                </Collapse>
              </>
            ) : (
              <Link to={m.path} key={index} style={{ textDecoration: "none" }}>
                <ListItem button key={index}>
                  <ListItemIcon>{m.icon}</ListItemIcon>
                  <ListItemText primary={m.name} />
                </ListItem>
              </Link>
            )
          )}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
