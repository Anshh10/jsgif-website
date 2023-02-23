import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

import Forms from "./forms/Forms";

import Layout from "./screens/Layout";

import About from "./components/About";
import Login from "./screens/Login";
import RegionScreen from "./screens/RegionScreen";
import GroupScreen from "./screens/GroupScreen";
import NoAccess from "./screens/NoAccess";
import ContactUs from "./forms/federation/ContactUs";
import FedEvents from "./events/FedEvents";
import RegEvents from "./events/RegEvents";

// Federation AGM
import FedAGM from "./forms/federation/FedAGM";
import FedAGMForm from "./forms/federation/FedAGMForm";
import FedAGMResponse from "./forms/federation/FedAGMResponse";

// Federation CCM
import FedCCM from "./forms/federation/FedCCM";
import FedCCMForm from "./forms/federation/FedCCMForm";
import FedCCMEditForm from "./forms/federation/FedCCMEditForm";
import FedCCMResponse from "./forms/federation/FedCCMResponse";

// Federation ID Meet
import FedIDMeet from "./forms/federation/FedIDMeet";
import FedIDMeetForm from "./forms/federation/FedIDMeetForm";
import FedIDMeetEditForm from "./forms/federation/FedIDMeetEditForm";
import FedIDMeetResponse from "./forms/federation/FedIDMeetResponse";

// Federation OB Meet
import FedOBMeet from "./forms/federation/FedOBMeet";
import FedOBMeetForm from "./forms/federation/FedOBMeetForm";
import FedOBMeetEditForm from "./forms/federation/FedOBMeetEditForm";
import FedOBMeetResponse from "./forms/federation/FedOBMeetResponse";

// Region AGM
import RegionAGM from "./forms/region/RegionAGM";
import RegionAGMForm from "./forms/region/RegionAGMForm";
import RegionAGMEditForm from "./forms/region/RegionAGMEditForm";
import RegionAGMResponse from "./forms/region/RegionAGMResponse";

// Region Commitee Meet
import RegionCommitteeMeet from "./forms/region/RegionCommiteeMeet";
import RegionCommiteeMeetForm from "./forms/region/RegionCommiteeMeetForm";
import RegionCommiteeMeetEditForm from "./forms/region/RegionCommiteeMeetEditForm";
import RegionCommiteeMeetResponse from "./forms/region/RegionCommiteeMeetResponse";

// Region OB Meet
import RegionOBMeet from "./forms/region/RegionOBMeet";
import RegionOBMeetForm from "./forms/region/RegionOBMeetForm";
import RegionOBMeetResponse from "./forms/region/RegionOBMeetResponse";
import RegionOBMeetEditForm from "./forms/region/RegionOBMeetEditForm";

// Group AGM
import GroupAGM from "./forms/group/GroupAGM";
import GroupAGMForm from "./forms/group/GroupAGMForm";
import GroupAGMResponse from "./forms/group/GroupAGMResponse";

// Group Commitee Meet
import GroupCommitteeMeet from "./forms/group/GroupCommitteeMeet";
import GroupCommitteeMeetForm from "./forms/group/GroupCommitteeMeetForm";
import GroupCommitteeMeetResponse from "./forms/group/GroupCommitteeMeetResponse";

// Group EGM
import GroupEGM from "./forms/group/GroupEGM";
import GroupEGMForm from "./forms/group/GroupEGMForm";
import GroupEGMResponse from "./forms/group/GroupEGMResponse";

// Group Forum Registraion
import GroupForumRegistration from "./forms/group/GroupForumRegistration";
import GroupForumRegistrationForm from "./forms/group/GroupForumRegistrationForm";
import GroupForumRegistrationResponse from "./forms/group/GroupForumRegistrationResponse";

// Group Membership
import GroupMembership from "./forms/group/GroupMembership";
import GroupMembershipForm from "./forms/group/GroupMembershipForm";

// Group FORM A
import GroupFormAForm from "./forms/group/GroupFormAForm";

// Sangini Committee Meet
import SanginiCommitteeMeetForm from "./forms/sangini/SanginiCommitteeMeetForm";
import SanginiCommitteeMeetResponse from "./forms/sangini/SanginiCommitteeMeetResponse";

// Sangini Forum Registraion
import SanginiForumRegistrationForm from "./forms/sangini/SanginiForumRegistrationForm";

// Sangini Membership
import SanginiMembershipForm from "./forms/sangini/SanginiMembershipForm";

// MBS
import MbsNomination from "./forms/mbs/MbsNomination";
import MbsNominationResponse from "./forms/mbs/MbsNominationResponse";

import SanginiCommitteeMeet from "./forms/sangini/SanginiCommitteeMeet";
import SanginiForumRegistration from "./forms/sangini/SanginiForumRegistration";
import SanginiMembership from "./forms/sangini/SanginiMembership";

import GroupAGMEditForm from "./forms/group/GroupAGMEditForm";
import GroupCommitteeMeetEditForm from "./forms/group/GroupCommitteeMeetEditForm";
import GroupEGMEditForm from "./forms/group/GroupEGMEditForm";
import GroupForumRegistrationEdit from "./forms/group/GroupForumRegistrationEditForm";

import MangalyatraScreen from "./mangalyatra/MangalyatraScreen";

import GroupFormA from "./forms/group/GroupFormA";
import GroupFormAResponse from "./forms/group/GroupFormAResponse";
import GroupFormBResponse from "./forms/group/GroupFormBResponse";

import FormBApp from "./forms/group/FormB/FormBApp";

import RegionList from "./components/ChatBot/RegionList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} exact>
            <Route path="" element={<HomeScreen />} />
            <Route path="not-allowed" element={<NoAccess />} />
            <Route path="aboutus" element={<About />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="regions" element={<RegionList />} />
            <Route path="region/:regName" element={<RegionScreen />} />
            <Route path="group/:grpName" element={<GroupScreen />} />

            {/* Events */}
            <Route path="reg/events" element={<RegEvents />} />
            <Route path="fed/events" element={<FedEvents />} />
            <Route path="forms" element={<Forms />} />
            <Route path="login" element={<Login />} />

            {/* Manglayatra */}

            <Route path="/mangalyatra/" element={<MangalyatraScreen />} />
            {/* Federation Forms */}
            <Route path="fed-idmeet" element={<FedIDMeet />} />
            <Route path="form/fed-idmeet" element={<FedIDMeetForm />} />
            <Route
              path="/form/fed-idmeet/:id/edit"
              element={<FedIDMeetEditForm />}
            />
            <Route path="fed-obmeet" element={<FedOBMeet />} />
            <Route path="form/fed-obmeet" element={<FedOBMeetForm />} />
            <Route
              path="form/fed-obmeet/:id/edit"
              element={<FedOBMeetEditForm />}
            />
            <Route path="fed-agm" element={<FedAGM />} />
            <Route path="form/fed-agm" element={<FedAGMForm />} />
            <Route path="fed-ccm" element={<FedCCM />} />
            <Route path="form/fed-ccm" element={<FedCCMForm />} />
            <Route path="form/fed-ccm/:id/edit" element={<FedCCMEditForm />} />

            {/* Region Forms */}
            <Route path="reg-agm" element={<RegionAGM />} />
            <Route path="form/ragm" element={<RegionAGMForm />} />
            <Route path="form/ragm/:id/edit" element={<RegionAGMEditForm />} />
            <Route
              path="reg-committee-meet"
              element={<RegionCommitteeMeet />}
            />
            <Route
              path="form/rcommitteemeet"
              element={<RegionCommiteeMeetForm />}
            />
            <Route
              path="form/rcommitteemeet/:id/edit"
              element={<RegionCommiteeMeetEditForm />}
            />
            <Route path="reg-obmeet" element={<RegionOBMeet />} />
            <Route path="form/robmeet" element={<RegionOBMeetForm />} />
            <Route
              path="form/robmeet/:id/edit"
              element={<RegionOBMeetEditForm />}
            />
            {/* Group Forms */}
            <Route path="grp-form-a" element={<GroupFormA />} />
            <Route path="form/grp-form-a" element={<GroupFormAForm />} />
            <Route path="form/grp-form-b" element={<FormBApp />} />
            <Route path="grpagm" element={<GroupAGM />} />
            <Route path="form/grpagm" element={<GroupAGMForm />} />
            <Route path="form/grpagm/:id/edit" element={<GroupAGMEditForm />} />

            <Route path="grpcommitteemeet" element={<GroupCommitteeMeet />} />
            <Route
              path="form/grpcommitteemeet"
              element={<GroupCommitteeMeetForm />}
            />
            <Route
              path="form/grpcommitteemeet/:id/edit"
              element={<GroupCommitteeMeetEditForm />}
            />

            <Route path="grpegm" element={<GroupEGM />} />
            <Route path="form/grpegm" element={<GroupEGMForm />} />
            <Route path="form/grpegm/:id/edit" element={<GroupEGMEditForm />} />

            <Route
              path="grp-forum-registraion"
              element={<GroupForumRegistration />}
            />
            <Route
              path="form/grp-forum-registraion"
              element={<GroupForumRegistrationForm />}
            />
            <Route
              path="form/grp-forum-registraion/:id/edit"
              element={<GroupForumRegistrationEdit />}
            />
            <Route path="grp-membership-form" element={<GroupMembership />} />
            <Route
              path="form/grp-membership-form"
              element={<GroupMembershipForm />}
            />
            {/* Sangini Forms */}
            <Route
              path="sgn-committee-meet"
              element={<SanginiCommitteeMeet />}
            />
            <Route
              path="form/sgn-committeemeet"
              element={<SanginiCommitteeMeetForm />}
            />
            <Route
              path="sgn-forum-registraion"
              element={<SanginiForumRegistration />}
            />
            <Route
              path="form/sgn-forum-registraion"
              element={<SanginiForumRegistrationForm />}
            />
            <Route path="sgn-membership-form" element={<SanginiMembership />} />
            <Route
              path="form/sgn-membership-form"
              element={<SanginiMembershipForm />}
            />
            {/* MBS Forms */}
            <Route path="form/mbs-nomination" element={<MbsNomination />} />
            {/* Federation Responses */}
            <Route
              path="fed-idmeet-response/:id"
              element={<FedIDMeetResponse />}
            />
            <Route
              path="fed-obmeet-response/:id"
              element={<FedOBMeetResponse />}
            />
            <Route path="fed-agm-response/:id" element={<FedAGMResponse />} />
            <Route path="fed-ccm-response/:id" element={<FedCCMResponse />} />
            {/* Region Responses */}
            <Route path="ragm-response/:id" element={<RegionAGMResponse />} />
            <Route
              path="rcommitteemeet-response/:id"
              element={<RegionCommiteeMeetResponse />}
            />
            <Route
              path="robmeet-response/:id"
              element={<RegionOBMeetResponse />}
            />
            {/* Sangini Responses */}
            <Route
              path="sgncommitteemeet-response/:id"
              element={<SanginiCommitteeMeetResponse />}
            />
            <Route
              path="sgn-forum-registraion-response/:id"
              element={<GroupForumRegistrationResponse />}
            />
            {/* Group Responses */}
            <Route path="grpagm-response/:id" element={<GroupAGMResponse />} />
            <Route path="grpegm-response/:id" element={<GroupEGMResponse />} />
            <Route
              path="grpcommitteemeet-response/:id"
              element={<GroupCommitteeMeetResponse />}
            />
            <Route
              path="grp-form-a-response/:id"
              element={<GroupFormAResponse />}
            />
            <Route
              path="grp-form-b-response/:id"
              element={<GroupFormBResponse />}
            />

            <Route
              path="grp-forum-registraion-response/:id"
              element={<GroupForumRegistrationResponse />}
            />
            {/* MBS Responses */}
            <Route
              path="mbs-nomination-response/:id"
              element={<MbsNominationResponse />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
