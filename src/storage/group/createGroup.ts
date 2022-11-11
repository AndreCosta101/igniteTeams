import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";
import { GROUP_COLLECTION } from "../storageConfig";
import { getAllGroups } from "./getAllGroups";

export async function createGroup(newGroup: string) {
    try {
        const storedGroups  = await getAllGroups();

        const groupAlreadyExists = storedGroups.includes(newGroup);

        if (groupAlreadyExists) throw new AppError("Já existe um grupo com esse nome");

        const storage = JSON.stringify([...storedGroups, newGroup]);

        await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    } catch (error) {
        throw error;
    }
}