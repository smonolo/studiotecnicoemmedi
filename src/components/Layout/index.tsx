import { ReactNode } from "react";

import { StyledContainer, StyledFlex } from "./styles";

import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <StyledFlex>
            <StyledContainer>
                <Header />
                {children}
            </StyledContainer>
            <Footer />
        </StyledFlex>
    );
}