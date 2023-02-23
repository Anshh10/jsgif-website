import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const SecurePageSection = (accessableUsers) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.authentication.user);
  if (typeof user !== "undefined" && typeof user.username !== "undefined") {
    let accessableUserList = accessableUsers["accessableUsers"].split(",");
    if (typeof user.accessGroup !== "undefined") {
      if (accessableUserList.indexOf(user.accessGroup) === -1) {
        window.location.href = "/not-allowed";
      }
    } else {
      window.location.href = "/not-allowed";
    }
  } else {
    window.location.href = "/not-allowed";
  }

  return <></>;
};

export default SecurePageSection;
