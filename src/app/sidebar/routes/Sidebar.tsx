import '../styles/Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import TwitterIcon from '@mui/icons-material/Twitter';
import NotificationsNoneIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarOption from '../components/SidebarOption';
import { Button } from '@mui/material';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar-twitterIcon" />
      <SidebarOption Icon={HomeIcon} text="Home" active />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="sidebar-tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
