import {
    StyledGrid,
    StyledImage,
    StyledPicture
} from "./styles";

export default function Pictures() {
    return (
        <StyledGrid>
            {[...Array(9)].map((element, index) => (
                <StyledPicture key={index}>
                    <StyledImage
                        src={`/images/renders/render${index + 1}.jpeg`}
                        alt={`Render ${index + 1}`}
                        draggable={false}
                    />
                </StyledPicture>
            ))}
        </StyledGrid>
    );
}