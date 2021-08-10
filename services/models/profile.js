import { auth, db, googleAuth } from "../firefolder/setup.js";
import user from './user'

class Profile {

    constructor(metaid = "", email = "") {
        try {
            this.metaid = metaid;
            this.email = email;
            this.emailVerified = false
            this.email = null
            this.profileCollection = "CrazyProfile"
        } catch (err) {
            return err
        }
    }

    async init(metaid) {
        if (!metaid) throw new Error('Invalid Call')
        this.metaid = metaid
        try {
            let mid = this.metaid.toString()
            const document = db.collection(this.profileCollection).doc(mid);
            const product = await document.get()
            let data
            if (!product.exists) {
                data = await this.create_user(mid);
            } else{
                data = product.data()
            }
            this.emailVerified = data.emailVerified
            this.email = data.email
            return data;
        } catch (err) {
            return err;
        }

    }

    async create_user(mid) {
        let newUser = user(mid, this.email)

        try {
            await db.collection(this.profileCollection)
                .doc(mid)
                .set(newUser)
            return newUser;
        } catch (err) {
            return err;
        }
    }

    async isProfileVerified() {
        if (this.emailVerified && this.email) {
            return this.email
        } else return false
    }

    async verifyUser() {
        try {
            let mid = this.metaid.toString()
            const doc = db.collection(this.profileCollection).doc(mid);
            await doc.update({emailVerified: this.emailVerified, email: this.email})
            return "User Verified";
        } catch (err) {
            return err;
        }
    }

    async gmail_login() {

        if (this.emailVerified && this.email) {
            return new Error('Profile Already Verified!!')
        }

        return auth.signInWithPopup(googleAuth)
            .then(async(result) => {
                let user = result.user;
                this.email = user.email
                this.emailVerified = user.emailVerified
                let res = await this.verifyUser()
                if(res === "User Verified"){
                    return res
                } else throw new Error('User Not Verified')
            }).catch((error) => {
                return error
            })
    }

    async facebook_login() {

        if (this.emailVerified && this.email) {
            return new Error('Profile Already Verified!!')
        }

        return 0;
    }

}

module.exports = Profile;