import Dashboard from 'views/Dashboard/Dashboard.jsx';

import Maps from 'views/Maps/Maps.jsx';
import UIVectorMap from 'views/Maps/VectorMap.jsx';

import Calendar from 'views/Calendar/Calendar.jsx';

import Mailinbox from 'views/Mail/Inbox.jsx';
import Mailcompose from 'views/Mail/Compose.jsx';
import Mailview from 'views/Mail/View.jsx';

import Widgetsmisc from 'views/Widgets/Misc.jsx'; 
import Widgetscountertiles from 'views/Widgets/CounterTiles.jsx';
import Widgetsprogresstiles from 'views/Widgets/ProgressTiles.jsx';
import Widgetssocialmedia from 'views/Widgets/SocialMedia.jsx';

import Chartjsline from 'views/Chartjs/Line.jsx'; 
import Chartjsbar from 'views/Chartjs/Bar.jsx'; 
import Chartjspolar from 'views/Chartjs/Polar.jsx'; 
import Chartjspie from 'views/Chartjs/Pie.jsx'; 
import Chartjsradar from 'views/Chartjs/Radar.jsx'; 
import Chartjsdoughnut from 'views/Chartjs/Doughnut.jsx'; 
import Chartjsscatter from 'views/Chartjs/Scatter.jsx'; 
import Chartjsbubble from 'views/Chartjs/Bubble.jsx'; 
import Chartjshorizontalbar from 'views/Chartjs/Horizontalbar.jsx'; 

import FormElements from 'views/Forms/Elements.jsx'; 
import FormGrid from 'views/Forms/Grid.jsx'; 
import FormPremade from 'views/Forms/Premade.jsx'; 
import FormDatePicker from 'views/Forms/DatePicker.jsx'; 
import FormTimePicker from 'views/Forms/TimePicker.jsx'; 
import FormDateTimePicker from 'views/Forms/DateTimePicker.jsx'; 
import FormDateRangePicker from 'views/Forms/DateRangePicker.jsx'; 
import FormColorPicker from 'views/Forms/ColorPicker.jsx'; 
import FormSlider from 'views/Forms/Slider.jsx'; 
import FormTagsinput from 'views/Forms/Tagsinput.jsx'; 
import FormAutosuggest from 'views/Forms/Autosuggest.jsx'; 
import FormValidation from 'views/Forms/Validation.jsx'; 
import FormWysiwygEditor from 'views/Forms/WysiwygEditor.jsx'; 
import FormCKEditor from 'views/Forms/CKEditor.jsx'; 
import FormInputMask from 'views/Forms/InputMask.jsx'; 
import FormNumericInput from 'views/Forms/NumericInput.jsx'; 

import UITabs from 'views/UI/Tabs.jsx'; 
import UICollapse from 'views/UI/Collapse.jsx'; 
import UIProgress from 'views/UI/Progress.jsx'; 
import UIButtons from 'views/UI/Buttons.jsx'; 
import UIModals from 'views/UI/Modals.jsx'; 
import UIBadges from 'views/UI/Badges.jsx'; 
import UIAlerts from 'views/UI/Alerts.jsx'; 
import UINotifications from 'views/UI/Notifications.jsx'; 
import UIBreadcrumbs from 'views/UI/Breadcrumbs.jsx'; 
import UIButtonDropdowns from 'views/UI/ButtonDropdowns.jsx'; 
import UIButtonGroup from 'views/UI/ButtonGroup.jsx'; 
import UICards from 'views/UI/Cards.jsx'; 
import UICarousel from 'views/UI/Carousel.jsx'; 
import UIDropdowns from 'views/UI/Dropdowns.jsx'; 
import UIFade from 'views/UI/Fade.jsx'; 
import UIJumbotron from 'views/UI/Jumbotron.jsx'; 
import UIGrid from 'views/UI/Grid.jsx'; 
import UIListGroup from 'views/UI/ListGroup.jsx'; 
//import UINavbar from 'views/UI/Navbar.jsx'; 
//import UINav from 'views/UI/Nav.jsx'; 
import UIPagination from 'views/UI/Pagination.jsx'; 
import UIPopovers from 'views/UI/Popovers.jsx'; 
import UITooltips from 'views/UI/Tooltips.jsx'; 

import UITypography from 'views/UI/Typography.jsx'; 
import UIVideoEmbeds from 'views/UI/VideoEmbeds.jsx';
import UICode from 'views/UI/Code.jsx';
import UIResponsiveImages from 'views/UI/ResponsiveImages.jsx';

import FontAwesome from 'views/Icons/FontAwesome.jsx';

import UITables from 'views/Tables/Tables.jsx';
/*import UIDatatables from 'views/Tables/Datatables.jsx';*/

import Login from 'views/Pages/Login.jsx';
import Register from 'views/Pages/Register.jsx';
import LockScreen from 'views/Pages/LockScreen.jsx';

import Page403 from 'views/Pages/403.jsx';
import Page404 from 'views/Pages/404.jsx';
import Page405 from 'views/Pages/405.jsx';
import Page408 from 'views/Pages/408.jsx';
import Page500 from 'views/Pages/500.jsx';
import Page503 from 'views/Pages/503.jsx';
import Offline from 'views/Pages/Offline.jsx'; 

import Blogs from 'views/Blogs/Blogs.jsx';
import BlogSearch from 'views/Blogs/Search.jsx';
import SingleBlog from 'views/Blogs/SingleBlog.jsx';

import UserProfile from 'views/SocialMedia/UserProfile.jsx';
import Members from 'views/SocialMedia/Members.jsx';

import CenteredTimeline from 'views/Timeline/Centered.jsx';
import LeftTimeline from 'views/Timeline/Leftalign.jsx';

import PricingExpanded from 'views/Pricing/Expanded.jsx';
import PricingNarrow from 'views/Pricing/Narrow.jsx';

import Invoice from 'views/Invoice/Invoice.jsx';
import MasonryGallery from 'views/Gallery/Masonry.jsx';

import FileDropzone from 'views/FileUploader/Dropzone.jsx';

import Setup from 'views/Setup/Setup.jsx';

var dashRoutes = [

    { path: "#", name: "Main", type: "navgroup"},
    { path: "/home", name: "Home", icon: "th-large", component: Dashboard },
    { path: "/#", name: "Sub-Contractors", icon: "users", component: Dashboard },
    { path: "/#", name: "RFC", icon: "dashboard", component: Dashboard },
    { path: "/#", name: "Trades", icon: "exchange", component: Dashboard },
    { path: "/login", name: "Reporting", icon: "sliders", component: Login },
    { path: "/#", name: "Project Info", icon: "info-circle", component: Dashboard },
    { path: "/#", name: "Admin", icon: "user", component: Dashboard },
    { path: "/setup", name: "Setup", icon: "cog", component: Setup },
    { path: "/#", name: "Logout", icon: "sign-out", component: Dashboard },


    { redirect: true, path: "/", pathTo: "/login", name: "Dashboard" }

];
export default dashRoutes;
