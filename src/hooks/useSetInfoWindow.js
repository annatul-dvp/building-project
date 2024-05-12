import { el, setChildren } from 'redom'

export function setInfoWindow (element, info) {
  const infoKeys = Object.keys(info)
  // const amountOfKeys = infoKeys.length()
  const infos = []
  console.log(info)

  if (infoKeys.includes('floor')) {
    infos.push(el(
      'div',
      { class: 'info-window__floor' },
      info.floor
    ))
  }

  if (infoKeys.includes('insale')) {
    infos.push(el(
      'div',
      { class: 'info-window__in-sale' },
      [
        el('div', { class: 'info-window__main-info' }, info.insale),
        el('div', { class: 'info-window__additional-info' }, 'в продаже')
      ]
    ))
  }

  if (infoKeys.includes('square')) {
    infos.push(el(
      'div',
      { class: 'info-window__square' },
      [
        el('div', { class: 'info-window__main-info' }, info.square),
        el('div', { class: 'info-window__additional-info' }, 'площадь')
      ]
    ))
  }

  if (infoKeys.includes('price')) {
    infos.push(el(
      'div',
      { class: 'info-window__price' },
      [
        el('div', { class: 'info-window__main-info' }, info.price),
        el('div', { class: 'info-window__additional-info' }, 'стоимость')
      ]
    ))
  }

  setChildren(element, infos)
}
