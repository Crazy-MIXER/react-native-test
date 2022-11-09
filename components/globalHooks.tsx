import { atom } from 'jotai'

export interface usersDataProps {
    email: string
    name: {
        first: string
        last: string
    }
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
    phone: string
    location: {
        city: string
        country: string
    }
    id: number
}

export const usersState = atom<usersDataProps[]>([])
export const loadingState = atom(true)
export const errorState = atom(false)