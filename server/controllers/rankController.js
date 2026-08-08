import KeywordTracking from "../models/KeywordTracking.js";

// add keyword to track
export const addKeyword = async (req, res) => {
    try{
        const {keyword, url} = req.body;
        if(!keyword || !url) return res.status(400).json({success: false, message: "Keyword and URL are required"})
        
        let domain;
        try{
            const urlObj = new URL(url.startsWith("http") ? url : `https://${url}`);
            domain = urlObj.hostname.replace("www.", "");
        } catch (error) {
            return res.status(400).json({success: false, message: "Invalid URL format"});
        }

        const existing = await KeywordTracking.findOne({userId: req.userId, keyword: keyword.toLowerCase().trim(), domain});
        if(existing) return res.status(400).json({success: false, message: "Keyword already exists for this domain"})
    
        const tracking = await KeywordTracking.create({userId: req.userId, keyword: keyword.toLowerCase().trim(), url: url.startsWith("http") ? url : `https://${url}`, domain, status: "checking"});
        
        res.status(201).json({success: true, message:"Keyword tracking started",tracking});
    } catch (error) {
        console.error("Add keyword error", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

// get all keywords for user
export const getKeywords = async (req, res) => {
    
}

// get single keyword
export const getKeyword = async (req, res) => {
    
}

// refresh keyword data
export const refreshKeyword = async (req, res) => {
    
}

// delete keyword
export const deleteKeyword = async (req, res) => {
    
}

//toggle
export const toggleKeyword = async (req, res) => {
    
}
