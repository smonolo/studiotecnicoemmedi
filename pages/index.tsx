export default function Home() {
    return (
        <div className='w-full h-screen flex justify-center items-center font-sans'>
            <img
                className='block w-72 lg:w-96'
                src='/images/logo.svg'
                alt='Studio Tecnico Immobiliare EmmeDì'
                draggable={false}
            />
        </div>
    );
}