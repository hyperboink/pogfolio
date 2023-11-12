import DOMPurify from 'isomorphic-dompurify';

export const url = (link: string) => link || '';

export const sanitize = (html: string) => DOMPurify.sanitize(html);

export const html = (data: string) => <span dangerouslySetInnerHTML={{__html: sanitize(data)}}/>