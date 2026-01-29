import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('utils', () => {
  it('cn merges classes correctly', () => {
    expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white')
  })
})
