import React, { useState, useContext } from 'react'
import { createContainer } from 'unstated-next'

export default createContainer(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen(currentValue => !currentValue)
  return { isOpen, open, close, toggle }
})
