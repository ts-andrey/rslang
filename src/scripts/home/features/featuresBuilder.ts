import { createElement, createSVG } from '../../util/Util';

export function setAboutBox(aboutBox: HTMLElement) {
  const aboutHeader = createElement('h2', ['section-features__header', 'about-box__header'], [], 'Возможности');
  const aboutInfo = createElement(
    'p',
    ['about-box__info'],
    [],
    'RS Lang - приложение, которое позволяет не только учить слова, но и при этом играть в игры. Можно настраивать под себя и вести статистику',
  );
  aboutBox.append(aboutHeader, aboutInfo);
}

export function setProgressBox(progressBox: HTMLElement) {
  const progressHeader = createElement('h3', ['section-features__header', 'progress-box__header'], [], 'Статистика');

  const progressInfo = createElement(
    'p',
    ['progress-box__info'],
    [],
    `Для каждого пользователя ведется статистика во время обучения, что позволяет:
    - отслеживать трудные слова;
    - корректировать программу изучения под возможности каждого пользователя;
    - регулировать частоту появления слов;
    - следить за своим прогрессом.`,
  );
  progressBox.append(progressHeader, progressInfo);
}

export function setSettingsBox(settingsBox: HTMLElement) {
  const settingsHeader = createElement('h3', ['section-features__header', 'settings-box__header'], [], 'Настройки');

  const settingsInfo = createElement(
    'p',
    ['settings-box__info'],
    [],
    `В меню настроек вы можете выбрать:
    - цветовую схему;
    - дневную норму изучаемых слов;
    - вид анимации;
    - язык интерфейса;`,
  );

  settingsBox.append(settingsHeader, settingsInfo);
}

export function setCrossBox(crossplatformBox: HTMLElement) {
  const crossHeader = createElement('h3', ['section-features__header', 'cross-box__header'], [], 'Всегда рядом');

  const crossInfo = createElement(
    'p',
    ['cross-box__info'],
    [],
    'Занимайтесь в любое время, в любом месте и с любого устройства. Можно заниматься дома за компьютером, лежа дома на диване с планшетом или на телефоне во время обеденного перерыва на работе.',
  );

  crossplatformBox.append(crossHeader, crossInfo);
}

export function getFeaturesImage() {
  const svg = createSVG('svg', ['section-features__container_image']);
  const use = createSVG('use', [], [['href', '#features_sitting-icon']]);

  svg.append(use);
  return svg;
}

export function setHiddenFeaturesSVG() {
  const svgHidden = createSVG('svg', [], [['display', 'none']]);
  const symbol = createSVG(
    'symbol',
    [],
    [
      ['viewBox', '0 0 302 413'],
      ['id', 'features_sitting-icon'],
      ['fill', 'none'],
    ],
  );
  const path1 = createSVG(
    'path',
    [],
    [
      [
        'd',
        'M199.542 61.6053C204.715 55.134 208.217 47.2034 207.631 38.3169C205.946 12.7125 172.501 18.3452 165.995 31.2681C159.49 44.191 160.263 76.971 168.671 79.2807C172.024 80.2018 179.167 77.9454 186.437 73.2756L181.874 107.68H208.818L199.542 61.6053Z',
      ],
      ['fill-rule', 'evenodd'],
      ['clip-rule', 'evenodd'],
      ['fill', '#B28B67'],
    ],
  );
  const path2 = createSVG(
    'path',
    [],
    [
      ['d', 'M154.059 13.3532C154.616 11.2631 156.117 9.47353 158.14 8.94261C158.63 8.81383 159.137 8.76182 159.641 8.7835C159.822 8.7912 159.873 8.84683 159.958 8.71192C160.021 8.6119 160.022 8.36754 160.048 8.25C160.128 7.88448 160.229 7.52351 160.353 7.1719C160.776 5.97265 161.487 4.91129 162.344 4.01721C163.948 2.34456 166.115 1.19017 168.366 0.981323C169.598 0.867078 170.821 1.0804 171.986 1.50752C172.589 1.72863 173.173 2.00395 173.743 2.30834C173.914 2.39995 174.471 2.84868 174.643 2.81961C174.833 2.78755 175.215 2.28421 175.369 2.15787C177.28 0.596082 179.638 -0.017963 182.017 0.000398893C184.703 0.0219518 187.289 0.164954 189.528 1.90958C190.003 2.27895 190.454 2.68336 190.884 3.10915C191.11 3.33331 191.33 3.56589 191.539 3.80813C191.665 3.95427 191.788 4.10372 191.906 4.25717C192.107 4.51764 192.075 4.60321 192.356 4.42147C193.434 3.72359 194.683 3.39719 195.941 3.56196C196.688 3.65986 197.415 3.89888 198.105 4.21349C198.34 4.32058 198.884 4.74778 199.134 4.75194C199.383 4.75603 199.919 4.36002 200.175 4.25937C201.557 3.71557 203.047 3.58153 204.5 3.8328C205.998 4.09209 207.471 4.72932 208.74 5.60988C209.351 6.03346 209.884 6.50278 210.312 7.13261C210.497 7.40455 210.664 7.69221 210.873 7.94435C210.996 8.09199 211.239 8.24347 211.305 8.43032C211.265 8.31843 212.944 7.62888 213.102 7.5848C213.946 7.34995 214.805 7.39756 215.631 7.68734C217.185 8.23224 218.521 9.4542 219.619 10.707C220.183 11.3505 220.677 12.0619 221.096 12.8197C221.297 13.1827 221.48 13.5561 221.648 13.9374C221.73 14.1221 221.784 14.3532 221.891 14.5196C222.029 14.734 222.122 14.7381 222.372 14.8316C223.644 15.3064 224.803 16.1099 225.686 17.1957C226.579 18.2942 227.158 19.647 227.401 21.0716C227.415 21.1555 227.424 21.5033 227.47 21.5487C227.533 21.6113 227.789 21.5836 227.885 21.5957C228.22 21.6376 228.553 21.6999 228.881 21.7827C229.486 21.9353 230.075 22.1599 230.632 22.4536C232.803 23.5984 234.356 25.7448 235.116 28.16C235.913 30.6946 235.899 33.5984 234.946 36.0857C234.792 36.4874 234.609 36.8774 234.394 37.2463C234.262 37.4727 234.219 37.4733 234.305 37.7109C234.4 37.9752 234.575 38.232 234.689 38.4903C235.059 39.3332 235.318 40.2271 235.482 41.1401C235.75 42.6378 235.883 44.2116 235.618 45.7207C235.495 46.4214 235.281 47.1064 234.954 47.7305C234.788 48.0487 234.593 48.3505 234.373 48.6297C234.258 48.7747 234.137 48.9131 234.01 49.0457C233.938 49.1215 233.842 49.1878 233.781 49.2724C233.63 49.4788 233.598 49.3091 233.676 49.6121C233.785 50.0357 234.031 50.4536 234.182 50.8658C234.337 51.2906 234.478 51.7211 234.606 52.156C234.866 53.0364 235.086 53.9329 235.224 54.8447C235.488 56.5954 235.442 58.4608 234.665 60.0675C234.332 60.7548 233.856 61.3577 233.278 61.8267C232.995 62.0561 232.688 62.2539 232.367 62.4163C232.202 62.4999 231.991 62.5357 231.915 62.706C231.834 62.8891 231.955 63.2526 231.982 63.4573C232.221 65.2379 232.341 67.1075 231.844 68.8524C231.387 70.4596 230.38 71.8786 229.072 72.8181C226.535 74.6406 223.116 74.5378 220.45 73.0788C219.755 72.6985 219.105 72.2262 218.525 71.6692C217.049 73.7876 214.01 73.7205 211.852 73.1169C209.164 72.365 207.006 70.3726 205.763 67.7549C204.064 69.9599 200.497 69.2445 199.318 66.8524C199.029 66.267 198.858 65.6217 198.774 64.9688C198.73 64.6254 198.758 64.2791 198.725 63.9385C198.682 63.5044 198.41 63.0827 198.254 62.6628C197.949 61.8456 197.76 61.0015 197.752 60.1201C197.748 59.6599 197.803 59.2114 197.844 58.7549C197.881 58.344 197.774 57.9611 197.713 57.5555C198.402 57.6765 199.242 57.4783 199.892 57.2652C200.53 57.0561 201.127 56.5054 201.577 56.0025C202.622 54.8346 203.26 53.3036 203.696 51.7798C204.655 48.4355 204.262 44.423 201.105 42.5876C199.635 41.7325 195.23 41.7353 193.478 42.1579C191.637 42.6022 189.549 46.9325 189.447 47.3395C189.383 47.5914 189.415 47.9031 189.198 48.071C188.721 48.44 187.934 47.7996 187.582 47.4835C186.974 46.938 186.541 46.2121 186.166 45.4764C185.348 43.8735 184.689 42.1545 184.223 40.3998C183.864 39.0469 183.635 37.6519 183.166 36.3335C182.699 35.0216 181.963 33.8491 180.819 33.106C179.574 32.2975 178.147 31.8717 176.781 31.3637C175.426 30.8602 174.095 30.2448 173.045 29.1765C172.814 28.9415 172.59 28.6919 172.404 28.4153C172.257 28.197 172.112 27.779 171.889 27.6405C171.541 27.4252 171.034 27.9852 170.734 28.1886C169.251 29.1919 168.015 30.5913 167.017 32.12C166.025 33.6404 165.211 35.1034 164.55 36.8011C164.059 38.0602 163.753 39.6727 162.89 40.7046C162.505 41.1654 159.641 41.4441 158.714 41.0419C157.786 40.6396 156.747 39.5951 156.436 38.9405C156.117 38.2705 156.041 37.5345 156.177 36.8011C156.257 36.3696 156.421 35.9665 156.51 35.5427C156.585 35.1866 156.654 34.8501 156.816 34.524C157.125 33.9059 157.651 33.4617 158.286 33.2759C157.625 32.6267 157.078 31.85 156.699 30.9818C156.305 30.0797 155.972 28.9828 155.877 27.9928C155.8 27.1887 155.919 26.3556 156.332 25.6645C156.765 24.9396 157.533 24.4667 158.197 24.0145C157.182 23.1686 156.314 22.1398 155.6 21.0008C154.212 18.7859 153.353 15.9939 154.059 13.3532Z'],
      ['fill-rule', 'evenodd'],
      ['clip-rule', 'evenodd'],
      ['fill', '#191847'],
    ],
  );
  const path3 = createSVG(
    'path',
    [],
    [
      ['d', 'M284.037 257.235H154.929C145.009 257.235 136.967 265.806 136.967 276.378V386.451C136.967 397.023 145.009 405.594 154.929 405.594H284.037C293.958 405.594 302 397.023 302 386.451V276.378C302 265.806 293.958 257.235 284.037 257.235ZM266.074 290.736C268.555 290.736 270.565 292.878 270.565 295.521V367.308C270.565 369.951 268.555 372.094 266.074 372.094H172.892C170.412 372.094 168.402 369.951 168.402 367.308V295.521C168.402 292.878 170.412 290.736 172.892 290.736H266.074Z'],
      ['fill-rule', 'evenodd'],
      ['clip-rule', 'evenodd'],
      ['fill', '#C5CFD6'],
    ],
  );
  const path4 = createSVG(
    'path',
    [],
    [
      ['d', 'M56.6848 401.598C71.0694 367.669 81.4722 338.125 85.6478 322.537C92.7975 295.847 98.2366 272.362 99.6113 263.592C102.89 242.677 74.3938 241.459 70.6273 251.853C64.9265 267.585 54.9742 319.274 43.0158 397.347L56.6848 401.598ZM223.538 295.119C210.34 289.559 164.122 272.161 141.831 267.239C135.425 265.825 129.217 264.511 123.38 263.323C106.03 259.793 97.0413 293.149 113.751 295.712C155.365 302.095 214.361 308.686 219.409 309.426C226.485 310.462 231.832 298.613 223.538 295.119Z'],
      ['fill-rule', 'evenodd'],
      ['clip-rule', 'evenodd'],
      ['fill', '#B28B67'],
    ],
  );
  const path5 = createSVG(
    'path',
    [],
    [
      ['d', 'M112.731 254.144L184.119 215.416V206.985H175.629C106.565 225.74 71.2727 237.759 69.7533 243.043C69.737 243.1 69.722 243.157 69.7084 243.214C69.6736 243.262 69.6395 243.311 69.6059 243.36C55.9188 263.421 47.7216 361.358 45.0312 368.691L71.2588 372.861C81.2915 333.213 113.39 305.593 112.538 258.107C112.768 256.715 112.826 255.394 112.731 254.144Z'],
      ['fill-rule', 'evenodd'],
      ['clip-rule', 'evenodd'],
      ['fill', '#1F28CF'],
    ],
  );
  const path6 = createSVG(
    'path',
    [],
    [
      ['d', 'M178.188 277.145C184.719 275.751 190.735 274.508 195.882 273.545C229.128 267.331 238.823 248.365 233.091 206.985H171.835C161.829 210.048 109.827 233.288 82.8461 245.649C64.9888 253.831 70.618 283.323 80.7306 290.998C80.7855 291.469 80.9675 291.789 81.2916 291.932C135.69 315.96 178.725 303.353 193.1 307.381L199.75 285.027L178.188 277.145Z'],
      ['fill-rule', 'evenodd'],
      ['clip-rule', 'evenodd'],
      ['fill', '#2B44FF'],
    ],
  );
  const path7 = createSVG(
    'path',
    [],
    [
      ['d', 'M219.026 291.566C222.59 291.929 225.12 292.499 226.616 293.277C228.435 294.223 230.943 295.926 234.138 298.387C233.109 300.636 223.856 320.854 206.38 359.039C200.769 358.073 198.546 355.791 199.71 352.193C200.875 348.595 201.814 345.591 202.527 343.181L203.637 308.861C203.658 308.201 204.178 307.684 204.797 307.707C204.808 307.707 204.818 307.708 204.829 307.708L209.783 308.04C212.598 305.612 214.455 303.415 215.355 301.45C216.085 299.853 216.49 297.333 216.567 293.89L216.567 293.89C216.597 292.569 217.626 291.524 218.866 291.555C218.919 291.557 218.972 291.56 219.026 291.566Z'],
      ['fill-rule', 'evenodd'],
      ['clip-rule', 'evenodd'],
      ['fill', '#E4E4E4'],
    ],
  );
  const path8 = createSVG(
    'path',
    [],
    [
      ['d', 'M63.2312 395.307C64.4872 398.88 65.1152 401.554 65.1152 403.328C65.1152 405.485 64.778 408.633 64.1034 412.773C61.7549 412.773 40.6479 412.773 0.782433 412.773C-0.863052 406.975 0.0868149 403.845 3.63205 403.383C7.17728 402.921 10.1224 402.504 12.4673 402.131L41.8983 388.149C42.4646 387.879 43.1283 388.151 43.3808 388.754C43.3851 388.764 43.3893 388.775 43.3934 388.785L45.2852 393.676C48.5671 395.308 51.234 396.124 53.2859 396.124C54.9531 396.124 57.2554 395.406 60.1929 393.971L60.1929 393.971C61.3202 393.42 62.6529 393.948 63.1697 395.149C63.192 395.201 63.2125 395.254 63.2312 395.307Z'],
      ['fill-rule', 'evenodd'],
      ['clip-rule', 'evenodd'],
      ['fill', '#E4E4E4'],
    ],
  );
  const path9 = createSVG(
    'path',
    [],
    [
      ['d', 'M118.954 187.988L87.1507 221.052C77.8972 225.258 70.3153 229.903 64.4049 234.986C63.0758 236.695 61.6288 239.969 67.8824 238.504C74.136 237.039 80.7756 235.798 81.951 237.965C83.1263 240.132 79.6631 243.453 81.8353 246.29C83.2834 248.181 88.1536 242.166 96.4458 228.245L129.517 207.466L118.954 187.988ZM260.115 192.651L236.654 192.75C251.14 242.586 258.961 269.029 260.115 272.078C262.713 278.939 257.216 289.388 254.865 295.003C262.522 298.655 261.706 285.133 271.364 289.921C280.181 294.292 286.887 302.212 297.073 295.515C298.325 294.691 299.697 291.591 296.381 289.168C288.121 283.132 276.217 272.567 274.609 269.09C272.416 264.348 267.584 238.868 260.115 192.651Z'],
      ['fill-rule', 'evenodd'],
      ['clip-rule', 'evenodd'],
      ['fill', '#B28B67'],
    ],
  );
  const path10 = createSVG(
    'path',
    [],
    [
      ['d', 'M193.443 87.7378L183.735 85.9633C167.021 130.459 137.84 170.889 96.1928 207.254L127.664 248C169.306 196.222 194.975 142.801 193.443 87.7378Z'],
      ['fill-rule', 'evenodd'],
      ['clip-rule', 'evenodd'],
      ['fill', '#191847'],
    ],
  );
  const path11 = createSVG(
    'path',
    [],
    [
      ['d', 'M235.762 217.753H149.316C169.344 165.857 179.357 121.773 179.357 85.499L205.434 81.3584C225.928 116.484 231.715 159.731 235.762 217.753Z'],
      ['fill-rule', 'evenodd'],
      ['clip-rule', 'evenodd'],
      ['fill', '#DDE3E9'],
    ],
  );
  const path12 = createSVG(
    'path',
    [],
    [
      ['d', 'M205.986 81.378C205.983 81.3715 205.979 81.3649 205.976 81.3584H204.274C202.237 81.4331 199.134 81.5678 194.967 81.7624L188.666 100.952C187.999 124.349 184.107 171.501 176.989 242.407H233.656C233.507 247.304 233.262 252.247 232.921 257.235H275.056C268.753 181.457 245.737 122.832 206.007 81.3584L205.986 81.378V81.378Z'],
      ['fill-rule', 'evenodd'],
      ['clip-rule', 'evenodd'],
      ['fill', '#2F3676'],
    ],
  );
 
  const path13 = createSVG(
    'path',
    [],
    [
      ['d', 'M229.913 179.745C228.3 210.272 224.262 231.317 217.799 242.878H233.641C234.335 220.915 233.092 199.871 229.913 179.745V179.745Z'],
      ['fill-rule', 'evenodd'],
      ['clip-rule', 'evenodd'],
      ['fill-opacity', '0.1'],
      ['fill', 'black'],
    ],
  );
  const path14 = createSVG(
    'path',
    [],
    [
      ['d', 'M221.043 205.788L193.1 191.945V205.788H221.043Z'],
      ['fill-rule', 'evenodd'],
      ['clip-rule', 'evenodd'],
      ['fill-opacity', '0.2'],
      ['fill', 'white'],
    ],
  );

  symbol.append(path1, path2, path3, path4, path5, path6, path7, path8, path9, path10, path11, path12, path13, path14);
  svgHidden.append(symbol);
  return svgHidden;
}
