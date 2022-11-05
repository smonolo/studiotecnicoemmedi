import { ReactNode } from "react";

import { StyledTitle } from "./styles";

export default function Title({ children }: { children: ReactNode }) {
    return (
        <StyledTitle>{children}</StyledTitle>
    );
}