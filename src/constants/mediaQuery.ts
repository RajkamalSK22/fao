import { generateMedia } from 'styled-media-query';

const media = generateMedia({
    xxs: "210px",
    xs: "375px",
    sm: "450px",
    md: "768px",
    lg: "1200px"
});

export default media;