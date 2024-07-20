'use client'
import { create } from 'zustand'
import { ContactType } from '@/types/user'

type contactStore = {
    contact: ContactType | null,
    addContact: (contact: ContactType) => void
}

export const useContactStore = create<contactStore>()((set) => ({
    contact: null,
    addContact: (contact) => set((state) => ({ contact: contact })),
}))