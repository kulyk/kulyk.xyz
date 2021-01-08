import React from 'react';
import {useTheme} from '../theming';

type IconProps = {
  size?: number;
};

function Dark({size = 18}: IconProps): React.ReactElement {
  return (
    <svg
      className="icon"
      height={size}
      viewBox="-12 0 448 448.04455"
      width={size}
      xmlns="http://www.w3.org/2000/svg">
      <path d="m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0" />
    </svg>
  );
}

function Light({size = 18}: IconProps): React.ReactElement {
  return (
    <svg
      className="icon"
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle cx="256" cy="256" r="144" />
        <path d="m256 80c-8.837 0-16-7.164-16-16v-48c0-8.836 7.163-16 16-16s16 7.164 16 16v48c0 8.836-7.163 16-16 16z" />
        <path d="m256 512c-8.837 0-16-7.164-16-16v-48c0-8.836 7.163-16 16-16s16 7.164 16 16v48c0 8.836-7.163 16-16 16z" />
        <path d="m496 272h-48c-8.837 0-16-7.164-16-16s7.163-16 16-16h48c8.837 0 16 7.164 16 16s-7.163 16-16 16z" />
        <path d="m64 272h-48c-8.837 0-16-7.164-16-16s7.163-16 16-16h48c8.837 0 16 7.164 16 16s-7.163 16-16 16z" />
        <path d="m391.765 136.235c-14.126 0-21.422-17.206-11.313-27.314l33.941-33.941c6.249-6.248 16.38-6.249 22.627 0 6.249 6.248 6.249 16.379 0 22.627l-33.941 33.941c-3.125 3.125-7.22 4.687-11.314 4.687z" />
        <path d="m86.294 441.706c-14.126 0-21.422-17.206-11.313-27.314l33.941-33.941c6.25-6.248 16.381-6.248 22.627 0 6.249 6.248 6.249 16.379 0 22.627l-33.942 33.942c-3.124 3.123-7.218 4.686-11.313 4.686z" />
        <path d="m425.706 441.706c-4.095 0-8.189-1.562-11.313-4.686l-33.941-33.941c-6.249-6.249-6.249-16.379 0-22.627 6.248-6.249 16.379-6.249 22.627 0l33.941 33.941c10.108 10.106 2.812 27.313-11.314 27.313z" />
        <path d="m120.235 136.235c-4.095 0-8.189-1.562-11.313-4.686l-33.942-33.941c-6.249-6.249-6.249-16.379 0-22.627 6.248-6.249 16.379-6.249 22.627 0l33.941 33.941c10.109 10.107 2.813 27.313-11.313 27.313z" />
      </g>
    </svg>
  );
}

export function ThemeSwitch(): React.ReactElement {
  const {theme, isLight, toggle} = useTheme();
  return (
    <>
      <button id="theme-toggle" onClick={toggle}>
        {isLight ? <Dark size={20} /> : <Light size={20} />}
      </button>
      <style jsx global>{`
        #theme-toggle {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 18px;
          height: 32px;
          width: 32px;
          background-color: ${theme.icon.background};
        }
        #theme-toggle:hover {
          opacity: 0.6;
        }
        #theme-toggle > .icon {
          fill: ${theme.text.main};
        }
      `}</style>
    </>
  );
}
