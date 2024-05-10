import { svg, el, setChildren, mount } from 'redom'
import './scss/main.scss'
import panthouseView1Bg from './assets/imgs/penthouse-view-1-full-black-white.jpg'
import panthouseView1 from './assets/imgs/penthouse-view-1.jpg'
import panthouseView2Bg from './assets/imgs/penthouse-view-2-black-white.jpg'
import panthouseView2 from './assets/imgs/penthouse-view-2.jpg'

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

const mainCentralBlock = el('div', { class: 'picture-block picture-block_view-1 main__central-block main__central-block' })
const mainCentralBlockBgImg = el('img', { class: 'picture-block__bg', src: panthouseView1Bg })
const mainCentralBlockBgFilter = el('div', { class: 'picture-block__bg-filter picture-block__bg-filter_view-1' })
const mainCentralBlockImg = el('img', { class: 'picture-block__img picture-block__img_view-1', src: panthouseView1 })

const mainNav = el('nav', { class: 'nav main__nav' })
const mainNavList = el('ul', { class: 'nav__list' })
const mainNavItem1 = el('li', { class: 'nav__item nav__item_chosen' }, 'Пентхаусы')
const mainNavItem2 = el('li', { class: 'nav__item' }, 'Квартиры')
const mainNavItem3 = el('li', { class: 'nav__item' }, 'Ситихаусы')
const mainNavItem4 = el('li', { class: 'nav__item' }, 'Виллы')

setChildren(mainNavList, [mainNavItem1, mainNavItem2, mainNavItem3, mainNavItem4])
mount(mainNav, mainNavList)

setChildren(mainCentralBlock, [mainCentralBlockBgImg, mainCentralBlockBgFilter, mainCentralBlockImg])
mount(main, mainCentralBlock)
mount(main, mainNav)

setChildren(document.body, [header, main])

document.addEventListener('DOMContentLoaded', () => {
  let chosenNavItem = document.querySelector('.nav__item_chosen')
  let chosenNavItemText = chosenNavItem.innerText

  mainNavItem1.addEventListener('click', () => {
    console.log('mainNavItem1')

    if (chosenNavItemText === 'Виллы') {
      main.classList.remove('main_view-2')
      main.classList.add('main_view-1')

      mainCentralBlockBgImg.src = panthouseView1Bg
      mainCentralBlockImg.classList.remove('picture-block__bg-filter_view-2')
      mainCentralBlockImg.classList.add('picture-block__bg-filter_view-1')

      mainCentralBlock.classList.remove('picture-block_view-2')
      mainCentralBlock.classList.add('picture-block_view-1')
      mainCentralBlockImg.src = panthouseView1
    }

    chosenNavItem.classList.remove('nav__item_chosen')
    mainNavItem1.classList.add('nav__item_chosen')
    chosenNavItem = mainNavItem1
    chosenNavItemText = mainNavItem1.innerText
    headerTitle.innerText = chosenNavItemText
  })

  mainNavItem2.addEventListener('click', () => {
    console.log('mainNavItem2')

    if (chosenNavItemText === 'Виллы') {
      main.classList.remove('main_view-2')
      main.classList.add('main_view-1')

      mainCentralBlockBgImg.src = panthouseView1Bg
      mainCentralBlockImg.classList.remove('picture-block__img_view-2')
      mainCentralBlockImg.classList.add('picture-block__img_view-1')

      mainCentralBlock.classList.remove('picture-block_view-2')
      mainCentralBlock.classList.add('picture-block_view-1')
      mainCentralBlockImg.src = panthouseView1
    }

    chosenNavItem.classList.remove('nav__item_chosen')
    mainNavItem2.classList.add('nav__item_chosen')
    chosenNavItem = mainNavItem2
    chosenNavItemText = mainNavItem2.innerText
    headerTitle.innerText = chosenNavItemText
  })

  mainNavItem3.addEventListener('click', () => {
    console.log('mainNavItem3')

    if (chosenNavItemText === 'Виллы') {
      main.classList.remove('main_view-2')
      main.classList.add('main_view-1')

      mainCentralBlockBgImg.src = panthouseView1Bg
      mainCentralBlockImg.classList.remove('picture-block__img_view-2')
      mainCentralBlockImg.classList.add('picture-block__img_view-1')

      mainCentralBlock.classList.remove('picture-block_view-2')
      mainCentralBlock.classList.add('picture-block_view-1')
      mainCentralBlockImg.src = panthouseView1
    }

    chosenNavItem.classList.remove('nav__item_chosen')
    mainNavItem3.classList.add('nav__item_chosen')
    chosenNavItem = mainNavItem3
    chosenNavItemText = mainNavItem3.innerText
    headerTitle.innerText = chosenNavItemText
  })

  mainNavItem4.addEventListener('click', () => {
    console.log('mainNavItem4')

    if (chosenNavItemText !== 'Виллы') {
      main.classList.remove('main_view-1')
      main.classList.add('main_view-2')

      mainCentralBlockBgImg.src = panthouseView2Bg
      mainCentralBlockImg.classList.remove('picture-block__img_view-1')
      mainCentralBlockImg.classList.add('picture-block__img_view-2')

      mainCentralBlock.classList.remove('picture-block_view-1')
      mainCentralBlock.classList.add('picture-block_view-2')
      mainCentralBlockImg.src = panthouseView2
    }

    chosenNavItem.classList.remove('nav__item_chosen')
    mainNavItem4.classList.add('nav__item_chosen')
    chosenNavItem = mainNavItem4
    chosenNavItemText = mainNavItem4.innerText
    headerTitle.innerText = chosenNavItemText
  })
})
