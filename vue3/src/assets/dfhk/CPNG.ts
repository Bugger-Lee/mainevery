/*
 * @Author: lijian
 * @since: 2022-09-16 10:13:45
 * @lastTime: 2022-09-16 14:56:30
 * @LastAuthor: lijian
 * @message:
 */
const BPNG =
  'data:image/png;base64,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'
const noSelect =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAT0lEQVRIS+3TsQ0AIAwDQTJU9h/AQ4HSIXqb5hkgL51MSdrrw6sJd3cl29MkHBGHOsI8EaihtgkwLhvtexhqqG0CjMtGyz9mXPlxxYpX6ABbBdVfE8p5fwAAAABJRU5ErkJggg=='
const selected =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACMElEQVRIS+3Ue0hTUQDH8e/cdpfT6VyiLHPITGdFLwIJhKIXFPRP9FdPiKgoNKSo6MGgCJGyPzJLJSgokRxRiH9EDzAQkpCiKKql9kSCTOfm2lq7uze8fwjh5l5qUJ5/z7m/zzk/7jmqLkupzF8Yqml4qlqfrnqqmubfq1rIn8XMjevob7qNODg0pslJObHOkofN0YBgzqHvfCNfa69OPizMNmNz1KPLMxMccPF2024CH75MLqw151DiaGDkxKLLjXPzfvxvesL+sBNWtTY3W6l3RkE+otuDc0s5/lfOiLdkQmBNtkmpN7WwgNCwF+fWCnwvXo97NZOGNSYjtpZ6UouthLw+3m0/wI9nL6O+B2Fh/aJ5WE4d4tu1FgZb70cMURszsN28jH5uESGfn+4dlXi7nkdFRxaEhXP3biP/eAWyJPHxaBUDjrYxYeoMA8XNdaQtKEHy/6R750GGO5/GhEaEVTqBOVfOkblimYJ/OnGW7813RkPVhjSKmi6Svng+UiBAz67DeDqexIxGhJUJQaCwsRrjqjJkWeazvYb+67dISdNTfOMC6UsXIv0K0rPnCJ72x3Gh48LKpFaLtb6KrLXLFbyv+hKZq8swlC5BCgbp3XcM94OOuNGosLJAo8Fad4as9StHAVkU6S0/ydDd9oTQmGAlWa3GWnsa04Y1yGKI95V2XG0PE0ZjhxU8hYIaO55HnQy23ksKjQ9OmvozIOmXK9H9TMOJNhf3d/9f1b8BRhPko1ftFNUAAAAASUVORK5CYII='
const iconPage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABhlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+X02G5AAAAgXRSTlMAAQIDBAUGCQoMDg8QEhMUFRgZHR4fIiUmJy0uMDQ1Nzk/QENERUlKS01UVlxeYGFiZmprbG1vcHFydHV2eXp8foGGh4iKjZGTlJWXmZ2goaKjrK2usbO3uLm6u7/BwsPGx8rLzM7S09Ta2+Hi5efo6e3u7/Hy8/X29/j5+vv8/f7dda0IAAABhUlEQVQ4y92U6TcCURjGFUKIENmyZwllyRZZMijKvu9ClpRQItU8/7mpmUamO5MvznE8X+Z93vu7Z+be9zmTk/OH1Hn25nOosnNmGoxuK7JxJjpuLWm4wk2ZNGeI0WbmUXqNS6UU1xWBNVmob3FaKM61hjHPlVX32FeIcU1BOHhT48NWHpmrD2BV9mXrAliXkTitH5u56Q3dC5YJnMaLXcFHtYRBZXDqO5xkHFMfwbSgpfLATbi4nhhGvjWUF/AQx9sfp01ptuAYdyLDHaZjBt4oduHViF3uFD66UrUNfq34uGwI1XLlI5qlAuDir/MZLqfTmUuCupmFI6xxbi4RVRAjMJNYCTXyIzAaoxwo149PMhrQpMBtY29l+tYIC8q2wSrczoGzgndwYBsCC/OMduCWBge5ExYjKA0OYSlpixDKBtr/Afj+U9CPahK4gjEBuIFFAljxBJ0A1EWxR1HUIQ9GGGd/wEFGoPpe2TSkQFbn5ZnRUxsnLIzY1OQnSstoh/wXf+2flayCnRGasfwAAAAASUVORK5CYII='
export { BPNG, noSelect, selected, iconPage }
