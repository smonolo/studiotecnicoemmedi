import { Fragment } from 'react';
import Link from 'next/link';

import {
    StyledCard,
    StyledContact,
    StyledContent,
    StyledItems,
    StyledTitle
} from './styles';

import data from '../../data/services.json';
import Button from '../Button';

export default function Services() {
    return (
        <Fragment>
            <StyledItems>
                {data.items.map(({ title, content }, index) => (
                    <StyledCard key={index}>
                        <StyledTitle>{title}</StyledTitle>
                        {content && <StyledContent>{content}</StyledContent>}
                    </StyledCard>
                ))}
            </StyledItems>
            <StyledContact>
                <Link href='/contatti' passHref>
                    <a>
                        <Button>
                            Contatta lo studio <i className='bi bi-arrow-right' />
                        </Button>
                    </a>
                </Link>
            </StyledContact>
        </Fragment>
    );
}