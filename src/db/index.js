import SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase('perfil.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS perfil (id INTEGER PRIMARY KEY NOT NULL, nombre TEXT NOT NULL, apellido TEXT NOT NULL, edad TEXT NOT NULL, image TEXT NOT NULL)', [], () => {
                resolve();
            }, (_, err) => {
                reject(err);
            });
        });
    });
    
    return promise;
}

export const insertPerfil = (nombre, apellido, edad, image) => {
    const promise = new Promise((resolve, reject) => {
        db.
        transaction(tx => {
            tx.executeSql(
                'INSERT INTO perfil (nombre, apellido, edad, image) VALUES (?, ?, ?, ?)',
                [nombre, apellido, edad, image],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
}

export const fetchPerfil = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM perfil', [], (_, result) => {
                let data = []
                var len = result.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = result.rows.item(i);
                    data.push(row);
                }
                resolve(data);
            }, (_, err) => {
                reject(err);
            });
        });
    });

    return promise;
}