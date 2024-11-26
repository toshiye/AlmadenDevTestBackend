/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { error } from "console";
import { promises as fsPromises} from 'fs';

@Injectable()
export class PasswordCardsService {
    private readonly dataFilePath = 'data.json';

    async findAll() {
        const data = await this.getDataFromFile();
        return data;
    }

    async findOne(id: string) {
        const data = await this.getDataFromFile();
        const info = data.find(s => s.id === id);
        if (!info) throw new NotFoundException('Record not found!');
        return info;
    }

    async create(SavedInfoData) {
        try {
            const data = await this.getDataFromFile();
            const info = {id: Date.now().toString(), ...SavedInfoData};
            data.push(info);
            await this.writeDataToFile(data);
            return info;
        } catch {
            console.error('Failed to save new card: ', error);
            throw error;
        }
    }

    async remove(id: string) {
        try {
            let data = await this.getDataFromFile();
            data = data.filter(s => s.id !== id);
            await this.writeDataToFile(data);
            return {message: 'Card deleted successfully'};
        } catch (error) {
            return {message: 'Failed to delete card: ', error: error.message};
        }
    }

    async update(id: string, newData) {
        try {
            const data = await this.getDataFromFile();
            const index = data.findIndex(s => s.id === id);
            if (index === -1) throw new NotFoundException('Card not found!');
            data[index] = {...data[index], newData};
            await this.writeDataToFile(data);
            return data[index];
        } catch(error) {
            return {message: 'Failed to save new card', error: error.message};
        }
    }



    private async getDataFromFile() {
        try {
            const rawData = await fsPromises.readFile(this.dataFilePath);
            return JSON.parse(rawData.toString())
        } catch (error) {
            return [];
        }
    }

    private async writeDataToFile(data) {
        await fsPromises.writeFile(this.dataFilePath, JSON.stringify(data, null, 2));
    }


}