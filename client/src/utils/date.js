import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const generateDatePost = () => new Date();

export const generateDatePostFormatted = date =>
  format(date, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
    addSuffix: true,
  });

export const publishedDateRelativeToNow = date =>
  formatDistanceToNow(date, {
    locale: ptBR,
  });
