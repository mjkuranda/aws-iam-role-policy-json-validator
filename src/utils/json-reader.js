import fs from 'fs';

const DATA_PATH = 'data';

export function readJson(fileName) {
    const filePath = `${DATA_PATH}/${fileName}.json`;

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(data);

        return jsonData;
    } catch (error) {
        throw new Error('Error occurred while reading JSON file: ' + error.message);
    }
}