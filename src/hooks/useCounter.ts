import { useCallback, useState } from 'react'

interface UseCounterResult {
  isCounter: number
  isBlock: boolean
  handleReset: () => void
  handleIncrement: () => void
  handleDecrement: () => void
  CLICK_LIMIT: number
}

export function useCounter(): UseCounterResult {
  const CLICK_LIMIT = 10
  const [isCounter, setIsCounter] = useState(0)
  const [isBlock, setIsBlock] = useState(false)

  const handleReset = useCallback(() => {
    setIsBlock(false)
    setIsCounter(0)
  }, [])

  const handleIncrement = useCallback(() => {
    if (isCounter < CLICK_LIMIT) {
      const newCounter = isCounter + 1
      setIsCounter(newCounter)

      if (newCounter >= CLICK_LIMIT) {
        setIsBlock(true)
      }
    }
  }, [isCounter])

  const handleDecrement = useCallback(() => {
    if (isCounter > 0) {
      const newCounter = isCounter - 1
      setIsCounter(newCounter)

      if (newCounter === 0) {
        setIsBlock(true)
      }
    }
  }, [isCounter])

  return {
    isCounter,
    isBlock,
    handleReset,
    handleDecrement,
    handleIncrement,
    CLICK_LIMIT,
  }
}
