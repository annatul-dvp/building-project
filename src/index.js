import { svg, el, setChildren, mount } from 'redom' // setAttr,
import './scss/main.scss'
import panthouseView1Bg from './assets/imgs/penthouse-view-1-full-black-white.jpg'
import panthouseView1 from './assets/imgs/penthouse-view-1.jpg'
import panthouseView2Bg from './assets/imgs/penthouse-view-2-black-white.jpg'
import panthouseView2 from './assets/imgs/penthouse-view-2.jpg'

import signView1 from './assets/imgs/view-1.svg'
import signView2 from './assets/imgs/view-2.svg'
import signCompass from './assets/imgs/compass.svg'
import signLocation from './assets/imgs/location-img.png'

import { setHoversPointer } from './hooks/useSetHover.js'

/* Header */
const header = el('header', { class: 'container header' })

const headerNavButton = el('button', { class: 'button header__nav-button' })
const headerTitle = el('div', { class: 'txt-block header__title' }, [
  el('div', { class: 'txt-block__txt' }, 'Пентхаусы')
])

const sortSvgImg = svg('svg', { width: '24', height: '18', viewBox: '0 0 24 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  [svg('circle', { cx: '18.5', cy: '3.5', r: '3', stroke: '#AD8361' }),
    svg('circle', { cx: '5.5', cy: '14.5', r: '3', transform: 'rotate(-180 5.5 14.5)', stroke: '#AD8361' }),
    svg('line', { x1: '0.5', y1: '3.5', x2: '15.5', y2: '3.5', stroke: '#AD8361', strokeLinecap: 'round' }),
    svg('line', { x1: '23.5', y1: '14.5', x2: '8.5', y2: '14.5', stroke: '#AD8361', strokeLinecap: 'round' }),
    svg('line', { x1: '21.5', y1: '3.5', x2: '23.5', y2: '3.5', stroke: '#AD8361', strokeLinecap: 'round' }),
    svg('line', { x1: '2.5', y1: '14.5', x2: '0.5', y2: '14.5', stroke: '#AD8361', strokeLinecap: 'round' })
  ])
sortSvgImg.classList.add('sort-button__img')
const sortSvgTxt = el('div', { class: 'sort-button__txt' }, 'По параметрам')
const headerSortButton = el('button', { class: 'button sort-button header__sort-button' })

setChildren(headerSortButton, [sortSvgImg, sortSvgTxt])

const headerContacts = el('div', { class: 'header__contacts' })
const headerLogoLinkImg = svg('svg', { width: '24', height: '22', viewBox: '0 0 24 22', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  svg('path', { d: 'M23.7652 5.13361C23.0937 2.32965 21.0088 0.360697 18.3839 0.056591C15.7825 -0.247515 13.8337 0.963754 12.364 3.24197C12.2419 3.43268 12.1339 3.62854 11.9977 3.86049C11.9414 3.77286 11.8991 3.7007 11.8568 3.62339C11.0069 2.13379 9.9081 0.963754 8.3726 0.37616C4.95411 -0.922732 0.774902 1.20085 0.0893253 5.83975C-0.244072 8.11797 0.375765 10.1024 1.61544 11.8961C2.51702 13.2001 3.57826 14.3392 4.72871 15.3753C6.97327 17.3958 9.24601 19.3853 11.5047 21.3852C11.6643 21.5244 11.8193 21.6636 11.993 21.8182C12.0541 21.7666 12.1151 21.7203 12.1761 21.6687C14.3972 19.7101 16.6324 17.7669 18.8394 15.7876C20.1354 14.6279 21.361 13.3805 22.38 11.9064C23.1689 10.7621 23.7464 9.51479 23.9343 8.07673C23.953 7.92726 23.9812 7.77263 24 7.62315C24 7.23142 24 6.83454 24 6.44281C23.9202 6.00469 23.8685 5.56142 23.7652 5.13361Z', fill: '#AD8361' })
)
headerLogoLinkImg.classList.add('link-with-img__img')
const headerLogoLinkTxt = el('span', { class: 'link-with-img__txt' }, '5')

const headerLogoLink = el('a', { class: 'link link_light-style link-with-img header__logo-link', href: '#' })
setChildren(headerLogoLink, [headerLogoLinkImg, headerLogoLinkTxt])

const headerTelLink = el('a', { class: 'link link_dark-style header__tel-link', href: 'tel:+74950000000' }, '+7 495 000 00 00')

setChildren(headerContacts, [headerLogoLink, headerTelLink])
setChildren(header, [headerNavButton, headerTitle, headerSortButton, headerContacts])

/* Main */
const main = el('main', { class: 'container main main_view-1' })

const showImgView1 = el('div', { class: 'show-block main__show-block main__show-block_view-1 visible clickable' })
const showImgView2 = el('div', { class: 'show-block main__show-block main__show-block_view-2 invisible unclickable' })

/* Block with view 1 */
const mainCentralBlock = el('div', { class: 'picture-block picture-block_view-1 show-block__central-block' })
const mainCentralBlockBgImg = el('img', { class: 'picture-block__bg', src: panthouseView1Bg })
const mainCentralBlockBgFilter = el('div', { class: 'picture-block__bg-filter picture-block__bg-filter_view-1' })
const mainCentralBlockImg = el('img', { class: 'picture-block__img picture-block__img_view-1', src: panthouseView1 })

/* Main central image appartment hovers */
const penthouseSVG = svg('svg', { width: '695', height: '325', viewBox: '0 0 695 325', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  svg('path', { opacity: '0.8', d: 'M0.5 137L306.73 0L657.467 91.2493L645.594 106.059L642 150L684.5 161.5V173L694.5 177.5L580 246L569.5 241L474.5 304L436.5 291L379 324.5L21.293 201.608L17.5 151L6.5 145L0.5 137Z', fill: '#AD8361' })
)
penthouseSVG.classList.add('hover-penthouse')
penthouseSVG.classList.add('hover-penthouse_view-1')

const appartmentSVG = svg('svg', { width: '716', height: '320', viewBox: '0 0 716 320', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  svg('path', { opacity: '0.8', d: 'M357 152L0 24.5L6 32L18 175.5L395 319.5L442.5 284L480.5 297L574 226.5L594 233.5L697.5 157.5L704 63L715.5 52.5L673 6V0L563.5 71.5L550 68L455 130L412.5 116L357 152Z', fill: '#AD8361' })
)
appartmentSVG.classList.add('hover-appartment')
appartmentSVG.classList.add('hover-appartment_view-1')

const cityhouseSVG = svg('svg', { width: '560', height: '262', viewBox: '0 0 560 262', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  [svg('path', { opacity: '0.8', d: 'M552 86.0002L560 0.500183L486 55.5002L482 149L552 86.0002Z', fill: '#AD8361' }),
    svg('path', { opacity: '0.8', d: 'M4 156.5L0.5 76L257.5 173.5L303 139.5L343 151L439.5 78.5L434.5 170.5L341 247L300 228L254.5 262L4 156.5Z', fill: '#AD8361' })
  ]
)
cityhouseSVG.classList.add('hover-cityhouse')
cityhouseSVG.classList.add('hover-cityhouse_view-1')

const villaSVG = svg('svg', { width: '141', height: '217', viewBox: '0 0 141 217', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  svg('path', { opacity: '0.8', d: 'M133.5 107.5L125 0L0 64L8.5 75.5L16.5 165L141 217L133.5 107.5Z', fill: '#AD8361' })
)
villaSVG.classList.add('hover-villa')
villaSVG.classList.add('hover-villa_view-1')

setChildren(mainCentralBlock, [
  mainCentralBlockBgImg,
  mainCentralBlockBgFilter,
  mainCentralBlockImg,
  penthouseSVG,
  appartmentSVG,
  cityhouseSVG,
  villaSVG
])

const hoverView1 = [penthouseSVG, appartmentSVG, cityhouseSVG, villaSVG]
setHoversPointer(penthouseSVG, hoverView1)

mount(showImgView1, mainCentralBlock)

/* Block with view 2 */
const mainCentralBlock2 = el('div', { class: 'picture-block picture-block_view-2 show-block__central-block' })
const mainCentralBlock2BgImg = el('img', { class: 'picture-block__bg', src: panthouseView2Bg })
const mainCentralBlock2BgFilter = el('div', { class: 'picture-block__bg-filter picture-block__bg-filter_view-2' })
const mainCentralBlock2Img = el('img', { class: 'picture-block__img picture-block__img_view-2', src: panthouseView2 })

/* Main central image appartment hovers */
const penthouseSvgView2 = svg('svg', { width: '681', height: '281', viewBox: '0 0 681 281', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  svg('path', { opacity: '0.8', d: 'M352 31L313 24L260 33L39 92V98L0.5 109L7 119L21.5 125L25 185.5L380 280.5L658.5 173.5V119L672.5 114.5L680.5 104.5L647 92V87.5L596.5 78V45.5H587.5H582L577.5 74.5L371 31V0.5H360.5L352 6.5V31Z', fill: '#AD8361' })
)
penthouseSvgView2.classList.add('hover-penthouse')
penthouseSvgView2.classList.add('hover-penthouse_view-2')

const appartmentSvgView2 = svg('svg', { width: '657', height: '281', viewBox: '0 0 657 281', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  svg('path', { opacity: '0.8', d: 'M641 158L363.5 281H354.5V234.5L5 124L0 9.5L354.5 106L633 0.5V38L656.5 45.5L652 106L641 113V158Z', fill: '#AD8361' })
)
appartmentSvgView2.classList.add('hover-appartment')
appartmentSvgView2.classList.add('hover-appartment_view-2')

const cityhouseSvgView2 = svg('svg', { width: '175', height: '173', viewBox: '0 0 175 173', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  svg('path', { opacity: '0.8', d: 'M0 172.5L2 88.5V80.5L174.5 0.5L169 84.5L0 172.5Z', fill: '#AD8361' })
)
cityhouseSvgView2.classList.add('hover-cityhouse')
cityhouseSvgView2.classList.add('hover-cityhouse_view-2')

const villaSvgView2 = svg('svg', { width: '537', height: '356', viewBox: '0 0 537 356', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  svg('path', { opacity: '0.8', d: 'M246 32L159 0.5L25 46V52L0 60.5L6 74L14.5 192L35 198L42 192L403.5 355.5L536.5 284.5V117.5L322 48.5L307 43.5L310 41L262.5 26L246 32Z', fill: '#AD8361' })
)
villaSvgView2.classList.add('hover-villa')
villaSvgView2.classList.add('hover-villa_view-2')

setChildren(mainCentralBlock2, [
  mainCentralBlock2BgImg,
  mainCentralBlock2BgFilter,
  mainCentralBlock2Img,
  penthouseSvgView2,
  appartmentSvgView2,
  cityhouseSvgView2,
  villaSvgView2
])

const hoverView2 = [penthouseSvgView2, appartmentSvgView2, cityhouseSvgView2, villaSvgView2]
setHoversPointer(penthouseSvgView2, hoverView2)

mount(showImgView2, mainCentralBlock2)

// setChildren(main, [showImgView1, showImgView2])
// mount(main, mainCentralBlock)
// mount(main, mainCentralBlock2)

/* Navigation in main Block */
const mainNav = el('nav', { class: 'nav signs__nav main__nav' })
const mainNavList = el('ul', { class: 'nav__list' })
const mainNavItem1 = el('li', { class: 'nav__item nav__item_chosen' }, 'Пентхаусы')
const mainNavItem2 = el('li', { class: 'nav__item' }, 'Квартиры')
const mainNavItem3 = el('li', { class: 'nav__item' }, 'Ситихаусы')
const mainNavItem4 = el('li', { class: 'nav__item' }, 'Виллы')

setChildren(mainNavList, [mainNavItem1, mainNavItem2, mainNavItem3, mainNavItem4])
mount(mainNav, mainNavList)
// mount(main, mainNav)

/* Signs in main block */
const mainSigns = el('div', { class: 'signs main__signs' })
const mainChangeViewButton = el('button', { class: 'change-view-button signs__change-view-button' },
  el('img', { class: 'change-view-button__img', src: signView1, alt: 'Вид 1' })
)
const mainSignCompass = el('img', { class: 'signs__compass-img', src: signCompass })
const mainSignLocation = el('img', { class: 'signs__location-img', src: signLocation })

setChildren(mainSigns, [mainChangeViewButton, mainNav, mainSignCompass, mainSignLocation])
// mount(main, mainSigns)
setChildren(main, [showImgView1, showImgView2, mainSigns])
setChildren(document.body, [header, main])

const hoversOfBuilging = {
  Пентхаусы: {
    1: penthouseSVG,
    2: penthouseSvgView2
  },
  Квартиры: {
    1: appartmentSVG,
    2: appartmentSvgView2
  },
  Ситихаусы: {
    1: cityhouseSVG,
    2: cityhouseSvgView2
  },
  Виллы: {
    1: villaSVG,
    2: villaSvgView2
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let chosenNavItem = document.querySelector('.nav__item_chosen')
  let chosenNavItemText = chosenNavItem.innerText

  let view = 1

  function switchView (chosenView) {
    if (chosenView === 1) {
      main.classList.remove('main_view-2')
      main.classList.add('main_view-1')
      showImgView1.classList.remove('invisible')
      showImgView2.classList.add('invisible')
      showImgView2.classList.remove('visible')
      showImgView1.classList.add('visible')

      /* Делаем активную область доступной для кликов, а неактивную - доступной */
      showImgView1.classList.remove('unclickable')
      showImgView1.classList.add('clickable')
      showImgView2.classList.remove('clickable')
      showImgView2.classList.add('unclickable')
    } else {
      main.classList.remove('main_view-1')
      main.classList.add('main_view-2')
      showImgView2.classList.remove('invisible')
      showImgView1.classList.add('invisible')
      showImgView1.classList.remove('visible')
      showImgView2.classList.add('visible')

      /* Делаем активную область доступной для кликов, а неактивную - доступной */
      showImgView2.classList.remove('unclickable')
      showImgView2.classList.add('clickable')
      showImgView1.classList.remove('clickable')
      showImgView1.classList.add('unclickable')
    }
  }

  mainNavItem1.addEventListener('click', () => {
    console.log('mainNavItem1')

    if (chosenNavItemText === 'Виллы') {
      switchView(view)
    }

    chosenNavItem.classList.remove('nav__item_chosen')
    mainNavItem1.classList.add('nav__item_chosen')
    chosenNavItem = mainNavItem1
    chosenNavItemText = mainNavItem1.innerText
    headerTitle.innerText = chosenNavItemText

    if (view === 1) {
      penthouseSVG.classList.add('hover-penthouse_visible')
      setTimeout(() => {
        penthouseSVG.classList.remove('hover-penthouse_visible')
      }, 2000)
      setHoversPointer(hoversOfBuilging[chosenNavItemText]['1'], hoverView1)
    } else {
      penthouseSvgView2.classList.add('hover-penthouse_visible')
      setTimeout(() => {
        penthouseSvgView2.classList.remove('hover-penthouse_visible')
      }, 2000)
      setHoversPointer(hoversOfBuilging[chosenNavItemText]['2'], hoverView2)
    }
  })

  mainNavItem2.addEventListener('click', () => {
    console.log('mainNavItem2')

    if (chosenNavItemText === 'Виллы') {
      switchView(view)
    }

    chosenNavItem.classList.remove('nav__item_chosen')
    mainNavItem2.classList.add('nav__item_chosen')
    chosenNavItem = mainNavItem2
    chosenNavItemText = mainNavItem2.innerText
    headerTitle.innerText = chosenNavItemText

    if (view === 1) {
      appartmentSVG.classList.add('hover-appartment_visible')
      setTimeout(() => {
        appartmentSVG.classList.remove('hover-appartment_visible')
      }, 2000)
      setHoversPointer(hoversOfBuilging[chosenNavItemText]['1'], hoverView1)
    } else {
      appartmentSvgView2.classList.add('hover-appartment_visible')
      setTimeout(() => {
        appartmentSvgView2.classList.remove('hover-appartment_visible')
      }, 2000)
      setHoversPointer(hoversOfBuilging[chosenNavItemText]['2'], hoverView2)
    }
  })

  mainNavItem3.addEventListener('click', () => {
    console.log('mainNavItem3')

    if (chosenNavItemText === 'Виллы') {
      switchView(view)
    }

    chosenNavItem.classList.remove('nav__item_chosen')
    mainNavItem3.classList.add('nav__item_chosen')
    chosenNavItem = mainNavItem3
    chosenNavItemText = mainNavItem3.innerText
    headerTitle.innerText = chosenNavItemText

    if (view === 1) {
      cityhouseSVG.classList.add('hover-cityhouse_visible')
      setTimeout(() => {
        cityhouseSVG.classList.remove('hover-cityhouse_visible')
      }, 2000)
      setHoversPointer(hoversOfBuilging[chosenNavItemText]['1'], hoverView1)
    } else {
      cityhouseSvgView2.classList.add('hover-cityhouse_visible')
      setTimeout(() => {
        cityhouseSvgView2.classList.remove('hover-cityhouse_visible')
      }, 2000)
      setHoversPointer(hoversOfBuilging[chosenNavItemText]['2'], hoverView2)
    }
  })

  mainNavItem4.addEventListener('click', () => {
    console.log('mainNavItem4')

    if (chosenNavItemText !== 'Виллы') {
      if (view === 1) {
        switchView(2)
      } else {
        switchView(1)
      }
    }

    chosenNavItem.classList.remove('nav__item_chosen')
    mainNavItem4.classList.add('nav__item_chosen')
    chosenNavItem = mainNavItem4
    chosenNavItemText = mainNavItem4.innerText
    headerTitle.innerText = chosenNavItemText

    if (view === 2) {
      villaSVG.classList.add('hover-villa_visible')
      setTimeout(() => {
        villaSVG.classList.remove('hover-villa_visible')
      }, 2000)
      setHoversPointer(hoversOfBuilging[chosenNavItemText]['1'], hoverView1)
    } else {
      villaSvgView2.classList.add('hover-villa_visible')
      setTimeout(() => {
        villaSvgView2.classList.remove('hover-villa_visible')
      }, 2000)
      setHoversPointer(hoversOfBuilging[chosenNavItemText]['2'], hoverView2)
    }
  })

  const changeViewButtonImgs = mainChangeViewButton.children
  mainChangeViewButton.addEventListener('click', () => {
    if (view === 1) {
      view = 2
      if (chosenNavItemText !== 'Виллы') {
        switchView(2)
        setHoversPointer(hoversOfBuilging[chosenNavItemText]['2'], hoverView2)
      } else {
        switchView(1)
        setHoversPointer(hoversOfBuilging[chosenNavItemText]['1'], hoverView1)
      }
      changeViewButtonImgs[0].src = signView2
    } else if (view === 2) {
      view = 1
      if (chosenNavItemText !== 'Виллы') {
        switchView(1)
        setHoversPointer(hoversOfBuilging[chosenNavItemText]['1'], hoverView1)
      } else {
        switchView(2)
        setHoversPointer(hoversOfBuilging[chosenNavItemText]['2'], hoverView2)
      }
      changeViewButtonImgs[0].src = signView1
    }
  })

  // eslint-disable-next-line no-unused-vars
  let currentHoveredElement = null
  const penthouse1Path = document.querySelector('.hover-penthouse_view-1 path')
  // const appartment1Path = document.querySelector('.hover-appartment_view-1 path')

  penthouse1Path.addEventListener('mouseenter', (e) => {
    console.log('penthouse', e.clientX)
    currentHoveredElement = e.target
    penthouseSVG.classList.add('hover-penthouse_visible')
  })

  penthouseSvgView2.addEventListener('mouseenter', (e) => {
    console.log('penthouse', e.clientX)
    currentHoveredElement = e.target
    penthouseSvgView2.classList.add('hover-penthouse_visible')
  })

  penthouse1Path.addEventListener('mouseleave', (e) => {
    currentHoveredElement = null
    penthouseSVG.classList.remove('hover-penthouse_visible')
  })

  penthouseSvgView2.addEventListener('mouseleave', (e) => {
    currentHoveredElement = null
    penthouseSvgView2.classList.remove('hover-penthouse_visible')
  })

  appartmentSVG.addEventListener('mouseenter', (e) => {
    console.log('appartment', e.clientX)
    currentHoveredElement = e.target
    appartmentSVG.classList.add('hover-appartment_visible')
  })

  appartmentSvgView2.addEventListener('mouseenter', (e) => {
    console.log('appartment', e.clientX)
    currentHoveredElement = e.target
    appartmentSvgView2.classList.add('hover-appartment_visible')
  })

  appartmentSVG.addEventListener('mouseleave', (e) => {
    currentHoveredElement = null
    appartmentSVG.classList.remove('hover-appartment_visible')
  })

  appartmentSvgView2.addEventListener('mouseleave', (e) => {
    currentHoveredElement = null
    appartmentSvgView2.classList.remove('hover-appartment_visible')
  })

  cityhouseSVG.addEventListener('mouseenter', (e) => {
    console.log('cityhouse', e.clientX)
    currentHoveredElement = e.target
    cityhouseSVG.classList.add('hover-cityhouse_visible')
  })

  cityhouseSvgView2.addEventListener('mouseenter', (e) => {
    console.log('cityhouse', e.clientX)
    currentHoveredElement = e.target
    cityhouseSvgView2.classList.add('hover-cityhouse_visible')
  })

  cityhouseSVG.addEventListener('mouseleave', (e) => {
    currentHoveredElement = null
    cityhouseSVG.classList.remove('hover-cityhouse_visible')
  })

  cityhouseSvgView2.addEventListener('mouseleave', (e) => {
    currentHoveredElement = null
    cityhouseSvgView2.classList.remove('hover-cityhouse_visible')
  })

  villaSVG.addEventListener('mouseenter', (e) => {
    console.log('villa', e.clientX)
    currentHoveredElement = e.target
    villaSVG.classList.add('hover-villa_visible')
  })

  villaSvgView2.addEventListener('mouseenter', (e) => {
    console.log('villa', e.clientX)
    currentHoveredElement = e.target
    villaSvgView2.classList.add('hover-villa_visible')
  })

  villaSVG.addEventListener('mouseleave', (e) => {
    currentHoveredElement = null
    villaSVG.classList.remove('hover-villa_visible')
  })

  villaSvgView2.addEventListener('mouseleave', (e) => {
    currentHoveredElement = null
    villaSvgView2.classList.remove('hover-villa_visible')
  })
})
