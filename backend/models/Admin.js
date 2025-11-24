import bcrypt from 'bcrypt';
export default class Admin{
    constructor({id = null, username, hash, created_at = null, modified_at = null}){
        if(typeof username !== 'string' || !username.trim()) 
            throw new Error('invalid username');

        this.id = id;
        this.username = username;
        this.hash = hash;
        this.created_at = created_at ?? new Date().toISOString();
        this.modified_at = modified_at ?? new Date().toISOString();
    }

    static async hashPassword(plainText){
        const passwordInvalidPattern = /[^A-Za-z0-9!@#$%^&*()]/;
        if(typeof plainText !== 'string' || !plainText || plainText.length < 1 || passwordInvalidPattern.test(plainText))
            throw new Error('invalid password');

        const hash =  await bcrypt.hash(plainText, 10);
        return hash;
    }

    static async create(username, plainText){
        const hash = await this.hashPassword(plainText);
        return new Admin({username: username, hash: hash});
    }

    async verifyPassword(plain){
        return await bcrypt.compare(plain, this.hash);
    }

    toFirestore(){
        return {
            id: this.id, 
            username: this.username,
            hash: this.hash,
            created_at: this.created_at,
            modified_at: this.modified_at
        }
    }
}

