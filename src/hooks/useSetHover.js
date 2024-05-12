export function setHoversPointer (activeElement, allElements) {
  activeElement.classList.remove('not-active-pointer')
  activeElement.classList.add('active-pointer')

  const notActiveElements = allElements.filter((el) => el !== activeElement)

  notActiveElements.forEach((el) => {
    el.classList.remove('active-pointer')
    el.classList.add('not-active-pointer')
  })
}
