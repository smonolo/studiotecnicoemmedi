import Link from 'next/link';
import { useRouter } from 'next/router';

import {
    StyledHeader,
    StyledItem,
    StyledItems,
    StyledLogo
} from './styles';

import data from '../../data/header.json';

export default function Header() {
    const router = useRouter();

    return (
        <StyledHeader>
            <Link href='/' passHref>
                <a>
                    <StyledLogo
                        src='/images/logo.svg'
                        alt='Studio Tecnico Immobiliare EmmeDì'
                        draggable={false}
                    />
                </a>
            </Link>
            <StyledItems>
                {data.items.map(({ text, url }, index) => (
                    <Link key={index} href={url} passHref>
                        <a>
                            <StyledItem className={router.asPath === url ? 'active' : ''}>{text}</StyledItem>
                        </a>
                    </Link>
                ))}
            </StyledItems>
        </StyledHeader>
    );
}