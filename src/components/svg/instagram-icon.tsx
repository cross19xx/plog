import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const InstagramIcon: React.FC<Props> = ({ size }) => (
  <Svg viewBox="0 0 48 48" width={size} height={size}>
    <Path
      fill="#304ffe"
      d="M41.67 13.48c-.4.26-.97.5-1.21.77-.09.09-.14.19-.12.29v1.03l-.3 1.01-.3 1-.33 1.1-.68 2.25-.66 2.22-.5 1.67c0 .26-.01.52-.03.77-.07.96-.27 1.88-.59 2.74-.19.53-.42 1.04-.7 1.52-.1.19-.22.38-.34.56-.4.63-.88 1.21-1.41 1.72-.41.41-.86.79-1.35 1.11h-.01c-.08.07-.17.13-.27.18-.31.21-.64.39-.98.55-.23.12-.46.22-.7.31-.05.03-.11.05-.16.07-.57.27-1.23.45-1.89.54-.04.01-.07.01-.11.02-.4.07-.79.13-1.19.16-.18.02-.37.03-.55.03l-.71-.04-3.42-.18c0-.01-.01 0-.01 0l-1.72-.09c-.13 0-.27 0-.4-.01-.54-.02-1.06-.08-1.58-.19h-.01c-.95-.18-1.86-.5-2.71-.93-.47-.24-.93-.51-1.36-.82-.18-.13-.35-.27-.52-.42-.48-.4-.91-.83-1.31-1.27-.06-.06-.11-.12-.16-.18-.06-.06-.12-.13-.17-.19-.38-.48-.7-.97-.96-1.49-.24-.46-.43-.95-.58-1.49-.06-.19-.11-.37-.15-.57a.076.076 0 0 1-.02-.05c-.1-.41-.19-.84-.24-1.27-.06-.33-.09-.66-.09-1-.02-.13-.02-.27-.02-.4l1.91-2.95 1.87-2.88.85-1.31.77-1.18.26-.41v-1.03c.02-.23.03-.47.02-.69-.01-.7-.15-1.38-.38-2.03-.22-.69-.53-1.34-.85-1.94-.38-.69-.78-1.31-1.11-1.87-.49-.82-.83-1.49-.74-1.96C14.47 6.09 15.23 6 16 6h16c4.18 0 7.78 2.6 9.27 6.26.16.39.3.8.4 1.22z"
    />
    <Path
      fill="#4928f4"
      d="M42 16v.27l-1.38.8-.88.51-.97.56-1.94 1.13-1.9 1.1-1.94 1.12-.77.45c0 .48-.12.92-.34 1.32-.31.58-.83 1.06-1.49 1.47-.67.41-1.49.74-2.41.98 0 0 0-.01-.01 0-3.56.92-8.42.5-10.78-1.26-.66-.49-1.12-1.09-1.32-1.78a2.92 2.92 0 0 1-.09-.73v-7.19c.01-.15-.09-.3-.27-.45-.54-.43-1.81-.84-3.23-1.25-1.11-.31-2.3-.62-3.3-.92-.79-.24-1.46-.48-1.86-.71.18-.35.39-.7.61-1.03 1.4-2.05 3.54-3.56 6.02-4.13C14.47 6.09 15.23 6 16 6h10.8a33.68 33.68 0 0 1 14.47 6.26c.16.39.3.8.4 1.22.18.66.29 1.34.32 2.05.01.15.01.31.01.47z"
    />
    <Path
      fill="#6200ea"
      d="M42 16v4.41l-.22.68-.75 2.33-.78 2.4-.41 1.28-.38 1.19-.37 1.13-.36 1.12-.19.59-.25.78c0 .76-.02 1.43-.07 2-.01.06-.02.12-.02.18-.06.53-.14.98-.27 1.36-.01.06-.03.12-.05.17-.26.72-.65 1.18-1.23 1.48-.14.08-.3.14-.47.2-.53.18-1.2.27-2.02.32-.6.04-1.29.05-2.07.05h-.69l-1.19-.05-.21-.01-2.17-.09-2.2-.09-7.25-.3-1.88-.08h-.26c-.78-.01-1.45-.06-2.03-.14-.84-.13-1.49-.35-1.98-.68-.7-.45-1.11-1.11-1.35-2.03-.06-.22-.11-.45-.14-.7-.1-.58-.15-1.25-.18-2 0-.15 0-.3-.01-.46-.01-.01 0-.01 0-.01v-.58c-.01-.29-.01-.59-.01-.9l.05-1.61.03-1.15.04-1.34v-.19l.07-2.46.07-2.46.07-2.31.06-2.27.02-.6c0-.31-1.05-.49-2.22-.64-.93-.12-1.95-.23-2.56-.37.05-.23.1-.46.16-.68.18-.72.45-1.4.79-2.05.18-.35.39-.7.61-1.03 2.16-.95 4.41-1.69 6.76-2.17 2.06-.43 4.21-.66 6.43-.66 7.36 0 14.16 2.49 19.54 6.69.52.4 1.03.83 1.53 1.28.01.15.01.31.01.47z"
    />
    <Path
      fill="#673ab7"
      d="M42 18.37v4.54l-.55 1.06-1.05 2.05-.56 1.08-.51.99-.22.43c0 .31 0 .61-.02.9 0 .43-.02.84-.05 1.22-.04.45-.1.86-.16 1.24-.15.79-.36 1.47-.66 2.03-.04.07-.08.14-.12.2-.11.18-.24.35-.38.51-.18.22-.38.41-.61.57-.34.26-.74.47-1.2.63-.57.21-1.23.35-2.01.43-.51.05-1.07.08-1.68.08l-.42.02-2.08.12h-.01l-2.21.13-2.25.13-3.1.18-3.77.22-.55.03c-.51 0-.99-.03-1.45-.09-.05-.01-.09-.02-.14-.02-.68-.11-1.3-.29-1.86-.54-.68-.3-1.27-.7-1.77-1.18-.44-.43-.82-.92-1.13-1.47-.07-.13-.14-.25-.2-.39-.3-.59-.54-1.25-.72-1.97-.03-.12-.06-.25-.08-.38-.06-.23-.11-.47-.14-.72-.11-.64-.17-1.32-.2-2.03v-.01c-.01-.29-.02-.57-.02-.87l-.49-1.17-.07-.18-.06-.15-.75-1.79-.12-.29-.72-1.73-.8-1.93H7.1l-.81-1.95-.29-.71V16c0-.63.06-1.25.17-1.85.05-.23.1-.46.16-.68.85-.49 1.74-.94 2.65-1.34 2.08-.93 4.31-1.62 6.62-2.04 1.72-.31 3.51-.48 5.32-.48 7.31 0 13.94 2.65 19.12 6.97.2.16.39.32.58.49.47.41.93.84 1.38 1.3z"
    />
    <Path
      fill="#8e24aa"
      d="M42 21.35v5.14l-.57 1.19-1.08 2.25-.01.03c0 .43-.02.82-.05 1.17-.1 1.15-.38 1.88-.84 2.33-.33.34-.74.53-1.25.63-.03.01-.07.01-.1.02-.16.03-.33.05-.51.05-.62.06-1.35.02-2.19-.04-.09 0-.19-.01-.29-.02-.61-.04-1.26-.08-1.98-.11-.39-.01-.8-.02-1.22-.02h-.02l-1.01.08h-.01l-2.27.16-2.59.2-.38.03-3.03.22-1.57.12-1.55.11c-.27 0-.53 0-.79-.01 0 0-.01-.01-.01 0-1.13-.02-2.14-.09-3.04-.26-.83-.14-1.56-.36-2.18-.69-.64-.31-1.17-.75-1.6-1.31-.41-.55-.71-1.24-.9-2.07v-.01c-.14-.67-.22-1.45-.22-2.33l-.15-.27-.89-1.59-.13-.22-.07-.14-.93-1.65-.46-.83-.58-1.03-1-1.79-.53-.94v-3.68c.88-.58 1.79-1.09 2.73-1.55 1.14-.58 2.32-1.07 3.55-1.47 1.34-.44 2.74-.79 4.17-1.02 1.45-.24 2.94-.36 4.47-.36 6.8 0 13.04 2.43 17.85 6.47.22.17.43.36.64.54.84.75 1.64 1.56 2.37 2.41.08.09.16.17.22.26z"
    />
    <Path
      fill="#c2185b"
      d="M42 24.71v7.23c-.24-.14-.57-.31-.98-.49-.22-.11-.47-.22-.73-.32-.38-.17-.79-.33-1.25-.49-.1-.04-.2-.07-.31-.1-.18-.07-.37-.13-.56-.19-.59-.18-1.24-.35-1.92-.5-.26-.05-.53-.1-.8-.14-.87-.15-1.8-.24-2.77-.25-.08-.01-.17-.01-.25-.01l-2.57.02-3.5.02h-.01l-7.49.06c-2.38 0-3.84.57-4.72.8 0 0-.01 0-.01.01-.93.24-1.22.09-1.3-1.54-.02-.45-.03-1.03-.03-1.74l-.56-.43-.98-.74-.6-.46-.12-.09-1.66-1.26-.25-.19-.52-.4-.96-.72L6 21.91v-3.4c.1-.08.19-.15.29-.21 1.45-1 3-1.85 4.64-2.54 1.46-.62 3-1.11 4.58-1.46.43-.09.87-.18 1.32-.24 1.33-.23 2.7-.34 4.09-.34 6.01 0 11.53 2.09 15.91 5.55.66.52 1.3 1.07 1.9 1.66.82.78 1.59 1.61 2.3 2.49.14.18.28.36.42.55.19.24.37.49.55.74z"
    />
    <Path
      fill="#d81b60"
      d="M42 28.72V32c0 .65-.06 1.29-.18 1.91-.18.92-.49 1.8-.91 2.62-.22.05-.47.05-.75.01-.63-.11-1.37-.44-2.17-.87a.37.37 0 0 1-.11-.05c-.25-.13-.51-.27-.77-.43-.53-.29-1.09-.61-1.65-.91-.12-.06-.24-.12-.35-.18-.64-.33-1.3-.63-1.96-.86h-.01c-.14-.05-.29-.1-.44-.14-.57-.16-1.15-.26-1.71-.26l-1.1-.32-4.87-1.41h-.01l-2.99-.87h-.01l-1.3-.38c-3.76 0-6.07 1.6-7.19.99-.44-.23-.7-.81-.79-1.95-.03-.32-.04-.68-.04-1.1l-1.17-.57-.05-.02h-.01l-.84-.42-.92-.44-.07-.03-.17-.09-1.96-.95-1.5-.73v-3.43c.17-.15.35-.29.53-.43.19-.15.38-.29.57-.44h.01c1.18-.85 2.43-1.6 3.76-2.22 1.55-.74 3.2-1.31 4.91-1.68.25-.06.51-.12.77-.16 1.42-.27 2.88-.41 4.37-.41 5.27 0 10.11 1.71 14.01 4.59 1.13.84 2.18 1.77 3.14 2.78.79.83 1.52 1.73 2.18 2.67.05.07.1.14.15.2.37.54.71 1.09 1.03 1.66.21.34.39.69.57 1.04z"
    />
    <Path
      fill="#f50057"
      d="M41.82 33.91a9.929 9.929 0 0 1-1.54 3.68c-.14.21-.29.41-.44.6-.36-.14-.89-.34-1.54-.56v-.01c-.49-.17-1.05-.35-1.65-.52a18.217 18.217 0 0 0-2.69-.61c-.6-.1-1.19-.16-1.74-.16l-.46-.13h-.01l-2.42-.7-1.49-.43-1.66-.48h-.01l-.54-.15-6.53-1.88-1.88-.54-1.4-.33-2.28-.54-.28-.07h-.01l-2.29-.53v-.01l-.41-.09-.21-.05-1.67-.39-.19-.05-1.42-1.17L6 27.9v-4.08c.37-.36.75-.7 1.15-1.03.12-.11.25-.21.38-.31.12-.1.25-.2.38-.3a20.2 20.2 0 0 1 2.89-1.84c1.3-.7 2.68-1.26 4.13-1.66.28-.09.56-.17.85-.23 1.64-.41 3.36-.62 5.14-.62a21.594 21.594 0 0 1 16.62 7.76c.66.79 1.26 1.62 1.79 2.5.05.07.09.13.13.2.32.53.62 1.08.89 1.64.25.5.47 1 .67 1.52.32.8.58 1.62.8 2.46z"
    />
    <Path
      fill="#ff1744"
      d="M40.28 37.59a9.802 9.802 0 0 1-1.9 2.09c-.47.39-.97.74-1.5 1.04-.2-.05-.4-.11-.61-.19-.66-.23-1.35-.61-1.99-1.01-.96-.61-1.79-1.27-2.16-1.57l-.21-.18-1.7-.15-.21-.02-2.2-.19-2.28-.2-3.37-.3-5.34-.47-.02-.01-1.88-.91-1.9-.92-1.53-.74-.33-.16-.41-.2-1.42-.69-1.89-.91-.59-.29-.84-.26v-4.47c.47-.56.97-1.09 1.5-1.6.34-.32.7-.64 1.07-.94.06-.05.12-.1.18-.14.04-.05.09-.08.13-.1.59-.48 1.21-.91 1.85-1.3.74-.47 1.52-.89 2.33-1.24.87-.39 1.78-.72 2.72-.97 1.63-.46 3.36-.7 5.14-.7 4.08 0 7.85 1.24 10.96 3.37 1.99 1.36 3.71 3.08 5.07 5.07.45.64.85 1.32 1.22 2.02.13.26.26.52.37.78.12.25.23.5.34.75.21.52.4 1.04.57 1.58a18.624 18.624 0 0 1 .83 4.13z"
    />
    <Path
      fill="#ff5722"
      d="M38.39 39.42c0 .08 0 .17-.01.26-.47.39-.97.74-1.5 1.04-.22.12-.44.24-.67.34-.23.11-.46.21-.7.3-.34-.18-.8-.4-1.29-.61-.69-.31-1.44-.59-2.02-.68-.14-.03-.27-.04-.39-.04l-1.64-.21h-.02l-2.04-.27-2.06-.27-.96-.12-7.56-.98c-.49 0-1.01-.03-1.55-.1-.66-.06-1.35-.16-2.04-.3-.68-.12-1.37-.28-2.03-.45-.69-.16-1.37-.35-2-.53a74.552 74.552 0 0 1-3.16-1.02c-.18-.43-.33-.88-.44-1.34A9.38 9.38 0 0 1 6 32v-1.67c.32-.53.67-1.05 1.06-1.54.71-.94 1.52-1.8 2.4-2.56.03-.04.07-.07.1-.09l.01-.01c.31-.28.63-.53.97-.77.04-.04.08-.07.12-.1.16-.12.33-.24.51-.35a17.24 17.24 0 0 1 4.7-2.24c1.6-.48 3.29-.73 5.05-.73 3.49 0 6.75 1.03 9.47 2.79 2.01 1.29 3.74 2.99 5.06 4.98.16.23.31.46.46.7.69 1.17 1.26 2.43 1.68 3.75.05.15.09.3.13.46.08.27.15.55.21.83.02.07.04.14.06.22.14.63.24 1.29.31 1.95v.01c.06.59.09 1.19.09 1.79z"
    />
    <Path
      fill="#ff6f00"
      d="M36.33 39.42c0 .35-.02.73-.06 1.11l-.06.53a9.503 9.503 0 0 1-2.08.71c-.32.07-.65.13-.98.16h-.01c-.31-.19-.67-.42-1.04-.68-.67-.47-1.37-1-1.93-1.43l-.02-.02c-.59-.45-1.01-.79-1.01-.79l-1.06.04-2.04.07-.95.04-3.82.14-3.23.12c-.21.01-.46.01-.77 0h-.01c-.42-.01-.92-.04-1.47-.09-.64-.05-1.34-.11-2.05-.18-.69-.08-1.39-.16-2.06-.24-.74-.08-1.44-.17-2.04-.25-.47-.06-.88-.11-1.21-.15-.28-.32-.53-.65-.77-1.01a9.12 9.12 0 0 1-.91-1.72c-.18-.43-.33-.88-.44-1.34.29-.89.67-1.73 1.12-2.54.36-.66.78-1.29 1.24-1.89.45-.59.94-1.14 1.47-1.64v-.01c.15-.15.3-.29.45-.42.28-.26.57-.5.87-.73h.01c.01-.02.02-.02.03-.03.24-.19.49-.36.74-.53a15.15 15.15 0 0 1 4.95-2.2c1.19-.29 2.44-.45 3.73-.45 2.54 0 4.94.61 7.05 1.71h.01c1.81.93 3.41 2.21 4.7 3.75.71.82 1.32 1.72 1.82 2.67.35.64.65 1.31.9 1.99.02.06.04.11.06.16.17.5.32 1.02.45 1.54.09.37.16.75.22 1.13.02.12.04.23.05.35.1.69.15 1.4.15 2.12z"
    />
    <Path
      fill="#ff9800"
      d="M34.28 39.42v.1c0 .34-.03.77-.06 1.23l-.09 1.02c-.32.07-.65.13-.98.16h-.01c-.38.05-.75.07-1.14.07h-1.75l-.38-.11-1.97-.6-2-.6-4.63-1.39-2-.6s-.83.33-2 .72h-.01c-.45.15-.94.31-1.46.47-.65.19-1.34.38-2.02.53-.7.16-1.39.28-2.01.33-.19.02-.38.03-.55.03a10.282 10.282 0 0 1-3.56-3.28c.07-.45.15-.89.27-1.32.3-1.19.77-2.33 1.39-3.37.34-.59.72-1.16 1.16-1.69.01-.03.04-.06.07-.08-.01-.01 0-.01 0-.01.13-.17.27-.33.41-.48v-.01c.41-.44.83-.86 1.29-1.25.16-.13.31-.26.48-.39.03-.03.06-.05.1-.08 2.25-1.72 5.06-2.76 8.09-2.76 3.44 0 6.57 1.29 8.94 3.41a13.4 13.4 0 0 1 2.84 3.63c.06.1.12.21.17.32.09.18.18.37.26.57.33.72.59 1.48.77 2.26l.06.24a13.382 13.382 0 0 1 .32 2.93z"
    />
    <Path
      fill="#ffc107"
      d="M32.22 39.42c0 .2-.01.42-.02.65-.02.37-.05.77-.1 1.18-.02.25-.06.5-.1.75h-5.48l-1.06-.17-4.14-.66-.59-.09-1.35-.22c-.59 0-1.87.26-3.22.51-.71.13-1.43.27-2.08.36l-.23.03h-.01c-.7-.15-1.38-.38-2.02-.68-.2-.09-.4-.19-.6-.3-.56-.31-1.1-.68-1.59-1.09-.01-.12-.02-.22-.02-.27 0-.26.01-.51.03-.76.04-.64.13-1.26.27-1.86.22-.91.54-1.79.97-2.6.08-.17.17-.34.27-.5.04-.08.09-.15.13-.23.18-.29.38-.57.58-.85.42-.55.89-1.07 1.39-1.54h.01c.04-.04.08-.08.12-.11.05-.04.09-.09.14-.12.2-.18.4-.34.61-.49 0-.01.01-.01.01-.01a11.28 11.28 0 0 1 6.78-2.24c1.98 0 3.82.5 5.43 1.38h.01c1.38.76 2.58 1.79 3.53 3.03.37.48.7.99.98 1.53h.01l.15.3c.3.59.54 1.21.72 1.85h.01c.01.05.03.1.04.15.12.43.22.87.29 1.32l.03.28c.07.48.1.97.1 1.47z"
    />
    <Path
      fill="#ffd54f"
      d="M30.17 39.31c0 .16 0 .33-.02.49v.02c-.02.72-.12 1.43-.28 2.07 0 .04-.01.07-.03.11h-4.67l-3.85-.83-.51-.11-.08.02-4.27.88-.19.04H16c-.64 0-1.27-.06-1.88-.18l-.27-.06h-.01c-.7-.15-1.38-.38-2.02-.68-.02-.11-.04-.22-.05-.33-.07-.43-.1-.88-.1-1.33 0-.17 0-.34.01-.51.03-.54.11-1.07.23-1.58.08-.38.19-.75.32-1.1.11-.31.24-.61.38-.9.12-.25.26-.49.4-.73.14-.23.29-.45.45-.67a9.029 9.029 0 0 1 2.36-2.24 9.245 9.245 0 0 1 5.1-1.52c.37 0 .73.02 1.08.07h.02c1.07.12 2.07.42 2.99.87h.01c1.45.71 2.68 1.78 3.58 3.1.15.22.3.46.43.7.11.19.21.39.3.59.14.31.27.64.38.97h.01c.11.37.21.74.28 1.13v.01c.11.55.17 1.12.17 1.7z"
    />
    <Path
      fill="#ffe082"
      d="M28.11 39.52v.03c0 .59-.07 1.17-.21 1.74-.05.24-.12.48-.21.71h-4.48l-2.29-.63-2.29.63H16c-.64 0-1.27-.06-1.88-.18-.02-.03-.03-.06-.04-.09-.14-.43-.25-.86-.3-1.31-.04-.29-.06-.59-.06-.9 0-.12 0-.25.02-.37.01-.47.08-.93.2-1.37.06-.3.15-.59.27-.87.04-.14.1-.27.17-.4.15-.34.33-.67.53-.99.22-.32.46-.62.73-.9.32-.36.68-.69 1.09-.96.7-.51 1.5-.89 2.37-1.1.58-.16 1.19-.24 1.82-.24 2 0 3.79.8 5.09 2.09.05.05.11.11.16.18h.01c.14.15.27.3.4.47.37.47.68.98.92 1.54.12.26.22.53.3.81l.03.11c.14.49.23 1 .25 1.53.02.15.03.31.03.47z"
    />
    <Path
      fill="#ffecb3"
      d="M26.06 39.52c0 .41-.05.8-.16 1.17-.1.4-.25.78-.44 1.14-.03.06-.1.17-.1.17h-8.88a.076.076 0 0 1-.02-.04c-.12-.19-.22-.38-.3-.59-.2-.46-.32-.96-.36-1.48-.02-.12-.02-.25-.02-.37 0-.06 0-.13.01-.19.01-.44.07-.86.19-1.25.1-.36.23-.69.4-1.01 0 0 .01-.01.01-.02.12-.21.25-.42.4-.62.49-.66 1.14-1.2 1.89-1.55h.01c.24-.12.49-.22.75-.29h.01c.46-.14.96-.21 1.47-.21.59 0 1.16.09 1.68.28.19.05.37.13.55.22h.01c.86.41 1.59 1.05 2.09 1.85.1.15.19.31.27.48.04.07.08.15.11.22.23.52.37 1.09.41 1.69.01.05.01.1.01.16.01.08.01.16.01.24z"
    />
    <Path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M30 11H18c-3.9 0-7 3.1-7 7v12c0 3.9 3.1 7 7 7h12c3.9 0 7-3.1 7-7V18c0-3.9-3.1-7-7-7z"
    />
    <Circle cx={31} cy={16} r={1} fill="#fff" />
    <Circle
      cx={24}
      cy={24}
      r={6}
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
  </Svg>
);

InstagramIcon.defaultProps = {
  size: 24,
  color: 'currentColor',
};

export default InstagramIcon;
