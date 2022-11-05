import Container from "../components/Container";
import Pictures from "../components/Pictures";
import Title from "../components/Title";

export default function Foto() {
    return (
        <Container margin>
            <Title>Le foto dei progetti a cui abbiamo lavorato</Title>
            <Pictures />
        </Container>
    );
}