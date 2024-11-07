class TreasureMap {
    static async getInitialClue() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("在古老的图书馆里找到了第一个线索...");
            }, 1000);
        });
    }

    static async decodeAncientScript(clue) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!clue) {
                    reject("没有线索可以解码!");
                }
                resolve("解码成功!宝藏在一座古老的神庙中...");
            }, 1500);
        });
    }

    static async searchTemple(location) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.5) {
                    reject("糟糕!遇到了神庙守卫!");
                }
                resolve("找到了一个神秘的箱子...");
            }, 2000);
        });
    }

    static async findKey() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("找到了神庙中的一把钥匙...");
            }, 1000);
        });
    }

    static async openTreasureBox() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("恭喜!你找到了传说中的宝藏!");
            }, 1000);
        });
    }

    static async loadClueFromFile(filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error('无法加载文件');
            const text = await response.text();
            return text;
        } catch (error) {
            return `加载资料失败: ${error.message}`;
        }
    }

    static async getLibraryClue() {
        return await TreasureMap.loadClueFromFile('library.txt');
    }
}
