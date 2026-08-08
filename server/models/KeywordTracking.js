import mongoose from "mongoose";

const rankEntrySchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    position: { type: Number, required: true },
    page: { type: Number, required: true },
    title: { type: String, default: ""},
    snippet: { type: String, default: "" },   
}, { _id: false });

const competitorsSchema = new mongoose.Schema({
    position: { type: Number, required: true },
    url:{ type: String, required: true, trim: true },
    domain: { type: String, required: true },
    title: { type: String, default: ""},
    snippet: { type: String, default: "" }, 
})

const keywordTrackingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    keyword: { type: String, required: true, trim: true, lowercase: true },
    url: { type: String, required: true, trim: true },
    domain: { type: String, required: true },
    currentPosition: { type: Number, default: null },
    currentPage: { type: Number, default: null },
    bestPosition: { type: Number, default: null },
    positionChange: { type: Number, default: 0 },
    rankHistory: [rankEntrySchema],
    competitors: [competitorsSchema],
    active: { type: Boolean, default: true },
    lastChecked: { type: Date, default: null },
    status: { type: String, enum: ["pending", "checking", "completed", "failed"], default: "pending" },
}, {timestamps: true});

