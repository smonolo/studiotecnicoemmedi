import Link from 'next/link';

import {
    StyledButtons, 
    StyledTitle
} from "./styles";

import Button from '../Button';
import Container from '../Container';

export default function Hero() {
    return (
        <Container margin>
            <StyledTitle>
                Sul territorio da più di <span>vent&apos;anni</span>, al servizio dei cittadini
                e delle imprese, composto da un <span>team giovanile ed audace</span>, offre
                prestazioni di qualità grazie alla forte presenza sul territorio ed alla
                continua <span>collaborazione con i migliori professionisti</span> della zona quali notai,
                commercialisti, broker e specialisti del settore edile,
                dalla grande <span>ristrutturazione</span> alla <span>fornitura di pregio</span>.
                <StyledButtons>
                    <Link href='/servizi' passHref>
                        <a>
                            <Button className='white'>
                                I nostri servizi
                            </Button>
                        </a>
                    </Link>
                    <Link href='/contatti' passHref>
                        <a>
                            <Button className='white'>
                                Contatta lo studio
                            </Button>
                        </a>
                    </Link>
                </StyledButtons>
            </StyledTitle>
        </Container>
    );
}