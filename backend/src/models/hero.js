import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true }, // Just in case multiple heroes of same name exist
    powerstats: {
        "intelligence": { type: Number, default: 0 },
        "strength": { type: Number, default: 0 },
        "speed": { type: Number, default: 0 },
        "durability": { type: Number, default: 0 },
        "power": { type: Number, default: 0 },
        "combat": { type: Number, default: 0 },
    },
    biography: {
        "fullName": { type: String, required: true },
        "alterEgos": { type: String, default: '' },
        "aliases": { type: [String], default: [] }, // [String] tells mongoose this field will be array with strings inside
        "placeOfBirth": { type: String, default: '' },
        "firstAppearance": { type: String, default: '' },
        "publisher": { type: String, default: '' },
        "alignment": { type: String, default: '' },
    },
    images: {
        "xs": { type: String, default: '' },
        "sm": { type: String, default: '' },
        "md": { type: String, default: '' },
        "lg": { type: String, default: '' },
    },
});

const Hero = mongoose.model('Hero', heroSchema);

export { Hero };