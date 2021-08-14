import { db } from "../firefolder/setup.js";


class Nft {

    constructor() {
        try {
            this.nftCollection = "CrazyNFT"
        } catch (err) {
            return err
        }
    }

    async createNFT(nftObject) {
        if (typeof(nftObject) != "object") throw new Error('Invalid Call')
        try {
            await db.collection(this.nftCollection)
                .doc()
                .set(nftObject)
            return nftObject;
        } catch (err) {
            return err;
        }

    }

}

module.exports = Nft