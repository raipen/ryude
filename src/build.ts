import { renderToString } from 'react-dom/server';
import Post from './Post.js';

export default async function build(){
    const html = renderToString(Post());
    console.log(html);
}