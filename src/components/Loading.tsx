import { metronome } from 'ldrs';
metronome.register()
export function Metronome() {
    return (
        <div
        className='w-screen h-screen grid place-items-center'
        >
            <l-metronome
                size="60"
                speed="1.6"
                color="gray"
            ></l-metronome>
        </div>
    );
}





