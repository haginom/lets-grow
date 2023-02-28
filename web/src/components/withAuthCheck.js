import { isLoggedIn } from "../services/auth";

const WithAuthCheck = ({ children }) => {
  if (isLoggedIn()) {
    return children;
  } else {
    if (typeof window === undefined) {
      return null;
    } else {
      return "Access denied";
    }
  }
};

export default WithAuthCheck;