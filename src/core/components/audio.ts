import Component from './component';

interface AudioSourceProps {
    source: string;
}

class AudioSource extends Component {
    sound: HTMLAudioElement;

    constructor(props: AudioSourceProps) {
        const {source} = props;
        super();

        this.sound = new Audio(source) || null;
    }
    
    setSource(source: string){
        this.sound.src = source;
    }

    play() {
        this.sound.play();
    }

    volume(value: number) {
        this.sound.volume = value;
    }

    loop(isLoop: boolean) {
        this.sound.loop = isLoop;
    }

    stop() {
        this.sound.pause();
    }
   
}

export default AudioSource;
