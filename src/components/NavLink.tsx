// src/components/NavLink.tsx

import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

export default function NavLink({ children, to, ...props }: LinkProps) {
    return (
        <Link
            className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
}