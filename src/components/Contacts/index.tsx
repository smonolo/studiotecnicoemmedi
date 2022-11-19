import Link from 'next/link';

import {
    StyledColumn,
    StyledFlex,
    StyledMap,
    StyledText
} from "./styles";

export default function Contacts() {
    return (
        <StyledFlex>
            <StyledMap
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.2751872166345!2d8.92638201581876!3d45.5649044347387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868d5a6e77b4e9%3A0x2717c2167ffcae84!2sVia%20Morbegno%2C%207%2C%2020010%20Canegrate%20MI!5e0!3m2!1sen!2sit!4v1667658062603!5m2!1sen!2sit"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <StyledColumn>
                <Link href='tel:+39 339 567 8971' passHref>
                    <a>
                        <StyledText>
                            <i className='bi bi-phone' /> +39 339 567 8971
                        </StyledText>
                    </a>
                </Link>
                <Link href='mailto:studiotecnicoemmedi@gmail.com' passHref>
                    <a>
                        <StyledText>
                            <i className='bi bi-envelope' /> studiotecnicoemmedi@gmail.com
                        </StyledText>
                    </a>
                </Link>
                <Link href='https://www.instagram.com/studiotecnico_emmedi/' passHref>
                    <a target='_blank'>
                        <StyledText>
                            <i className='bi bi-instagram' /> @studiotecnico_emmedi
                        </StyledText>
                    </a>
                </Link>
            </StyledColumn>
        </StyledFlex>
    );
}