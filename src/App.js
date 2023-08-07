import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Mannageuser from "./Components/Mannageuser/Mannageuser";
import Viewuser from "./Components/Viewuser/Viewuser";
import Sidebar from "./Components/Sidebar/Sidebar";
import Edituser from "./Components/Edituser/Edituser";
import Receivedgifts from "./Components/Receivedgifts/Receivedgifts";
import Sendgifts from "./Components/Sendgifts/Sendgifts";
import Coinhistory from "./Components/Coinhistory/Coinhistory";
import Liveuserhistory from "./Components/Liveuserhistory/Liveuserhistory";
import Topusers from "./Components/Topusers/Topusers";
import AddAgency from "./Components/Agency/AddAgency";
import ViewAgency from "./Components/Agency/ViewAgency";
import AddAdmin from "./Components/Admin/AddAdmin";
import ViewAdmin from "./Components/Admin/ViewAdmin";
import AddSubAdmin from "./Components/Admin/SubAdmin/AddSubAdmin";
import ViewSubAdmin from "./Components/Admin/SubAdmin/ViewSubAdmin";
import AddAppEntry from "./Components/AppEntry/AddAppEntry";
import ViewAppEntry from "./Components/AppEntry/ViewAppEntry";
import AddRoomWallpaper from "./Components/RoomWallpaper/AddRoomWallpaper";
import ViewRoomWallpaper from "./Components/RoomWallpaper/ViewRoomWallpaper";
import PendingHost from "./Components/Host/PendingHost";
import ApprovedHost from "./Components/Host/ApprovedHost";
import RejectedHost from "./Components/Host/RejectedHost";
import ViewHostInfo from "./Components/Host/ViewHostInfo";
import AddFrames from "./Components/Frames/AddFrames";
import ViewFrames from "./Components/Frames/ViewFrames";
import Liveusers from "./Components/Liveuser/Liveusers";
import Userslist from "./Components/Userlist/Userslist";
import Pushmessage from "./Components/Pushmessage/Pushmessage";
import UserProfile from "./Components/Account/UserProfile";
import ChangePassword from "./Components/Account/ChangePassword";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import SendCoins from "./Components/TransactionHistory/SendCoins";
import OfflineRechargeHistory from "./Components/Recharge/OfflineRechargeHistory";
import ManageLogo from "./Components/Account/Managelogo";
import AdminCoinHistory from "./Components/AdminHistory/AdminCoinHistory";
import AdminRechargeHistory from "./Components/AdminHistory/AdminRechargeHistory";
import ManageMyLevel from "./Components/MyLevel/ManageMyLevel";
import ManageTalentLevel from "./Components/Talent/ManageTalentLevel";
import ManageReport from "./Components/Report/ManageReport";
import UserReport from "./Components/Report/UserReport";
import ManageLength from "./Components/Account/ManageLength";
import ManageSplashImage from "./Components/Account/ManageSplashImage";
import AddVehicle from "./Components/Vehicle/AddVehicle"
import ViewVehicle from "./Components/Vehicle/ViewVehicle"
import ExtraSeat from "./Components/ExtraSeat/ExtraSeat";
import SpecialIdComp from "./Components/SpecialId/SpecialId";
import LockRoom from "./Components/LockRoom/LockRoom";
import RelationShip from "./Components/RelationShip/RelationShip";
import ChatBubble from "./Components/ChatBubble/ChatBubble";
import ManageProblemReport from "./Components/Report/ManageProblemReport";
import UserVideoReport from "./Components/Report/UserVideoReport";
import AddBanner from "./Components/Banner/AddBanner";
import ViewBanner from "./Components/Banner/ViewBanner";
import AddVip from "./Components/Vip/AddVip";
import ViewVip from "./Components/Vip/ViewVip";
import AddSvip from "./Components/Svip/AddSvip";
import ViewSvip from "./Components/Svip/ViewSvip";
import AddLiveGifts from "./Components/Gift/AddLiveGifts";
import ManageGiftcategory from "./Components/Gift/ManageGiftCategory";
import ManageGift from "./Components/Gift/ManageGifts";
import SignIn from "./Components/SignIn/SignIn";
// import SignOutComp from "./Components/SignOut/SignOutComp";



function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Sidebar />
        <div
          className="app_body p-5"
          // contain routes and side navigation
        >
          <Routes>
            <Route path="/signIn" element={<SignIn/>}/>
          {/* <Route path="/signout" element={<SignOutComp/>}/> */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/view-users" element={<Mannageuser />} />
            {/* <Route path="/view-user" element={<>View</>} /> */}

                  {/* //Commented routes starts   */}
            <Route path="/view-user" element={<Viewuser/>}/>
            <Route path="/edit-user" element={<Edituser/>}/>
            <Route path="/recieved-gift-history" element={<Receivedgifts/>}/>
            <Route path="/send-gift-history" element={<Sendgifts/>}/>


             {/* //Commented routes ends  */}




            <Route path="/add-agency" element={<AddAgency/>} />
            <Route path="/view-agency" element={<ViewAgency/>} />
            <Route path="/add-admin" element={<AddAdmin/>} />
            <Route path="/view-admin" element={<ViewAdmin/>} />
            <Route path="/add-subadmin" element={<AddSubAdmin/>} />
            <Route path="/view-subadmin" element={<ViewSubAdmin/>} />
            <Route path="/add-appentry" element={<AddAppEntry/>} />
            <Route path="/view-appentry" element={<ViewAppEntry/>} />
            <Route path="/add-room-wallpaper" element={<AddRoomWallpaper/>} />
            <Route path="/view-room-wallpaper" element={<ViewRoomWallpaper/>}/>
            <Route path="/pending-host-request" element={<PendingHost/>}/>
            <Route path="/approved-host-request" element={<ApprovedHost/>}/>
            <Route path="/rejected-host-request" element={<RejectedHost/>}/>
            <Route path="/view-host-info" element={<ViewHostInfo/>}/>
            <Route path="/add-frames" element={<AddFrames/>}/>
            <Route path="/view-frames" element={<ViewFrames/>}/>
            <Route path="/add-vehicle" element={<AddVehicle/>}/>
            <Route path="/view-vehicle" element={<ViewVehicle/>}/>
            <Route path="/extra-seat" element={<ExtraSeat/>}/>
            <Route path="/specialid" element={<SpecialIdComp/>}/>
            <Route path="/lock-room" element={<LockRoom/>}/>
            <Route path="/add-banner" element={<AddBanner/>}/>
            <Route path="/view-banner" element={<ViewBanner/>}/>
            <Route path="/add-vip" element={<AddVip/>}/>
            <Route path="/view-vip" element={<ViewVip/>}/>
            <Route path="/add-svip" element={<AddSvip/>}/>
            <Route path="/view-svip" element={<ViewSvip/>}/>
            <Route path="/add-live-gifts" element={<AddLiveGifts/>}/>
            <Route path="/manage-gift-category" element={<ManageGiftcategory/>}/>
            <Route path="/manage-gifts" element={<ManageGift/>}/>




            <Route path="/relationship" element={<RelationShip/>}/>
            <Route path="/chat-bubble" element={<ChatBubble/>}/>
            <Route path="/admin-coin-history" element={<AdminCoinHistory/>}/>
            <Route path="/admin-recharge-history" element={<AdminRechargeHistory/>}/>
            <Route path="/manage-mylevel" element={<ManageMyLevel/>}/>
            <Route path="/manage-talent" element={<ManageTalentLevel/>}/>
            <Route path="/mange-report" element={<ManageReport/>}/>
            <Route path="/user-report" element={<UserReport/>}/> 
            <Route path="/manage-problem-report" element={<ManageProblemReport/>}/>
            <Route path="/user-video-report" element={<UserVideoReport/>}/>
            <Route path="/user-profile" element={<UserProfile/>}/>
            <Route path="/change-password" element={<ChangePassword/>}/> 
            <Route path="/manage-logo" element={<ManageLogo/>}/>
            <Route path="/manage-length" element={<ManageLength/>}/>
            <Route path="/manage-splash-image" element={<ManageSplashImage/>}/>
            <Route path="/transaction-history" element={<TransactionHistory/>}/>
            <Route path="/send-coins" element={<SendCoins/>}/>
            <Route path="/offline-recharge-history" element={<OfflineRechargeHistory/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;