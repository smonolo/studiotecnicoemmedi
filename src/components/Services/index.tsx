import {
    StyledCard,
    StyledContent,
    StyledItems,
    StyledTitle
} from './styles';

import data from '../../data/services.json';

export default function Services() {
    return (
        <StyledItems>
            {data.items.map(({ title, content }, index) => (
                <StyledCard key={index}>
                    <StyledTitle>{title}</StyledTitle>
                    {content && <StyledContent>{content}</StyledContent>}
                </StyledCard>
            ))}
        </StyledItems>
    );
}