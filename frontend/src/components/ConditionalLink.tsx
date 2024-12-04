import React from "react";

import Link, { LinkProps } from "@mui/material/Link";

interface ConditionalLinkProps {
	condition: boolean;
}

export const ConditionalLink = ({
	condition,
	children,
	...linkProps
}: ConditionalLinkProps & LinkProps) => {
	if (condition === true) {
		return <Link {...linkProps}>{children}</Link>;
	}

	return children;
};
