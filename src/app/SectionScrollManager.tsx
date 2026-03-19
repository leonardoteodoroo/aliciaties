import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getHomeSectionState, scrollToHomeSection } from "../lib/homeSections";

export function SectionScrollManager() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const state = getHomeSectionState(location.state);

    if (!state?.homeSectionId) {
      return;
    }

    if (!scrollToHomeSection(state.homeSectionId)) {
      return;
    }

    navigate(location.pathname, { replace: true, state: null });
  }, [location.pathname, location.state, navigate]);

  return null;
}
