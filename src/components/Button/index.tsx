import { ReactNode } from "react";

import { StyledButton } from "./styles";

export default function Button({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <StyledButton className={className}>{children}</StyledButton>
    );
}