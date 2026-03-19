import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  buildHomeSectionState,
  scrollToHomeSection,
} from "../../lib/homeSections";
import type { NavItem } from "../../types/site";

interface NavActionProps {
  item: NavItem;
  className: string | ((options: { isActive: boolean }) => string);
  onNavigate?: () => void;
}

export function NavAction({ item, className, onNavigate }: NavActionProps) {
  const location = useLocation();
  const navigate = useNavigate();

  if (item.kind === "route") {
    return (
      <NavLink
        className={({ isActive }) =>
          typeof className === "function" ? className({ isActive }) : className
        }
        onClick={onNavigate}
        to={item.to}
      >
        {item.label}
      </NavLink>
    );
  }

  const resolvedClassName =
    typeof className === "function"
      ? className({ isActive: false })
      : className;

  return (
    <button
      className={resolvedClassName}
      onClick={() => {
        onNavigate?.();

        if (location.pathname === "/") {
          scrollToHomeSection(item.sectionId);

          return;
        }

        navigate(item.to, {
          state: buildHomeSectionState(item.sectionId),
        });
      }}
      type="button"
    >
      {item.label}
    </button>
  );
}
