import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <img
            src="https://www.jiomart.com/assets/version16548039193/smartweb/images/jiomart_logo_beta.svg"
            alt="icon"
          />
        </div>
        <ul className="header-list">
          <li>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </li>
          <li>
            <div className="logout-icon">
              <LogoutIcon style={{ color: "white" }} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
