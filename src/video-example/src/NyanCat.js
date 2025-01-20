import ReactPlayer from 'react-player';

function NyanCat() {
    const vidURL = "https://www.youtube.com/watch?v=2yJgwwDcgV8&ab_channel=NyanCat";

    return <ReactPlayer url={vidURL} playing={false} volume={1.0} controls/>
}

export default NyanCat;