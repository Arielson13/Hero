import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://arielsonsousa37:bJ96VcjeNx3YO6ZI@cluster0.pwp2bkm.mongodb.net/hero-tickets'
        );
        console.log('Connect database success')
    } catch (error) {
        console.log(error)
    }
}

