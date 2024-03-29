import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Email from "@mui/icons-material/Email"; // Additional icon
import Notifications from "@mui/icons-material/Notifications"; // Additional icon
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { HIWORLD_COOKIE_NAME } from "../base/CookieName";

export default function AccountMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip
          title="Menu"

          // sx={{
          //   backgroundColor: "var(--Prcl)",
          //   fontSize: "1rem",
          //   padding: "10px",
          // }}
        >
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {props?.user?.profile ? (
              <Avatar
                sx={{
                  width: 45,
                  height: 45,
                  backgroundImage: `url(${props.user?.profile})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  overflow: "visible",
                }}
                className="profile-img"
              ></Avatar>
            ) : (
              <Avatar
                sx={{
                  width: 45,
                  height: 45,
                  fontSize: "1.5rem",
                  backgroundColor: "var(--Prcl)",
                  overflow: "visible",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="profile-img"
              >
                {props?.user?.name && props?.user.name[0]}
              </Avatar>
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "300px",
            overflow: "visible",
            color: "var(--Prcl)",
            borderRadius: "15px",
            padding: "0.5rem 1rem",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",

            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to={"profile/myPost"} className="Link">
          <div className="menu-item">
            {/* <div className="img-nav-profile"></div> Profile */}
            {props?.user?.profile ? (
              <Avatar
                sx={{
                  width: 35,
                  height: 35,
                  backgroundImage: `url(${props.user?.profile})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  overflow: "visible",
                }}
                className="profile-img"
              ></Avatar>
            ) : (
              <Avatar
                sx={{
                  width: 35,
                  height: 35,
                  fontSize: "1.5rem",
                  backgroundColor: "var(--Prcl)",
                  overflow: "visible",
                }}
                className="profile-img"
              >
                {props?.user?.name && props?.user.name[0]}
              </Avatar>
            )}
            Profile
          </div>
        </Link>

        <Divider style={{ margin: "10px" }} />

        {/* Additional Menu Items */}

        <div className="menu-container">
          <div className="sm-screen">
            <Link className="Link" to={"/home"}>
              <div className="menu-item">
                <i className="fas fa-home"></i>
                Home
              </div>
            </Link>
            <Link className="Link" to={"/chat"}>
              <div className="menu-item">
                <i className="fas fa-comments"></i>
                Chate
              </div>
            </Link>
          </div>
          <Link className="Link" to={"/create-post"}>
            <div className="menu-item">
              <i className="fas fa-plus"></i>
              Create Post
            </div>
          </Link>
          <Link className="Link" to={"/profile/saved"}>
            <div className="menu-item">
              <i className="fas fa-bookmark"></i>
              Saved
            </div>
          </Link>
          <Link className="Link" to={"/about"}>
            <div className="menu-item">
              <i className="fas fa-info-circle"></i>
              About us
            </div>
          </Link>
          <div
            className="menu-item"
            onClick={() => {
              new Cookies().remove(HIWORLD_COOKIE_NAME);
              setTimeout(() => {
                window.location.pathname = "/home";
              }, 2);
            }}
          >
            <i className="fas fa-sign-out"></i>
            Logout
          </div>
        </div>
      </Menu>
    </React.Fragment>
  );
}
