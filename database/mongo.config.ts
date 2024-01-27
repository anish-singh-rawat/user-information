import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DBNAME}:${process.env.PASS}@cluster0.5wh3n75.mongodb.net/`, {
            tls: true,
        });
        console.log('Successfully connected');
    } catch (err) {
        console.error('Internal error occurred', err);
    }
}
