import { SetStateAction} from "react";

import { usersDataProps } from "./globalHooks";


export async function getUsers(setUsers:(update: SetStateAction<usersDataProps[]>) => void, setError:(update: SetStateAction<boolean>) => void, setUpdate:(update: SetStateAction<boolean>) => void) {
    try {
        const usersData = await fetch('https://randomuser.me/api/?results=20')
            .then((response) => response.json())
        for (let i = 0; usersData.results.length > i; i++) {
            usersData.results[i].id = i
        }
        setUsers(usersData.results)
    }
    catch (err) {
        setError(true)
    }
    finally {
        setUpdate(false)
    }
}