
import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "../../Config/config";
import fs from "fs/promises";
import axios from "axios";

const genAI = new GoogleGenerativeAI(config.ai.gemini.apiKey);



export async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "Write 20 facts about hypertension."

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}




// // Converts local file information to a GoogleGenerativeAI.Part object.
// function fileToGenerativePart(path: any, mimeType: any) {
//   return {
//     inlineData: {
//       data: Buffer.from(fs.readFileSync(path)).toString("base64"),
//       mimeType
//     },
//   };
// }

// export async function run2() {
//   // For text-and-image input (multimodal), use the gemini-pro-vision model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

//   const prompt = "What is in this image?";

//   const imageParts = [
//     // fileToGenerativePart("https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/002/797/813/datas/full_width.png", "image/png"),
//     // fileToGenerativePart("image2.jpeg", "image/jpeg"),
//     fileToGenerativePart("./testimageai.png", "image/png"),
//   ];

//   const result = await model.generateContent([prompt, ...imageParts]);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run2();


// Convert local file information to a GoogleGenerativeAI.Part object
// async function fileToGenerativePart(path: string, mimeType: string): Promise<any> {
//     try {
//         const data = await fs.readFile(path);
//         return {
//             inlineData: {
//                 data: data.toString("base64"),
//                 mimeType
//             },
//         };
//     } catch (error) {
//         console.error("Error reading file:", error);
//         throw error; // Propagate the error
//     }
// }

async function urlToGenerativePart(url: string, mimeType: string): Promise<any> {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const data = Buffer.from(response.data, 'binary').toString('base64');
        return {
            inlineData: {
                data,
                mimeType
            },
        };
    } catch (error) {
        console.error('Error reading file from URL:', error);
        throw error;
    }
}


export async function analyzeImagesWithGeminiProVision(imageUrls: string[], prompt: string) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

        const imageParts = await Promise.all(imageUrls.map(async (url) => {
            const mimeType = url.endsWith(".png") ? "image/png" : "image/jpeg";
            return urlToGenerativePart(url, mimeType);
        }));

        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response;
        const text = await response.text();
        
        console.log("Generated text:", text);
        return text;
    } catch (error) {
        console.error("Error analyzing images:", error);
    }
}

// const imageUrls = ["../Assets/testimageai.png", "../Assets/testimageai.png"]; // Replace with actual image URLs
// const imageUrls = ["https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/002/797/813/datas/full_width.png", "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/002/797/813/datas/full_width.png"]
const imageUrls = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rawpixel.com%2Fsearch%2Fwild%2520animal&psig=AOvVaw0n4S6mgI3mn4N85wzwqSUf&ust=1714250684453000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCND31PLf4IUDFQAAAAAdAAAAABAE", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fanimal%2F&psig=AOvVaw0n4S6mgI3mn4N85wzwqSUf&ust=1714250684453000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCND31PLf4IUDFQAAAAAdAAAAABAJ"]
const prompt = "What's different between these pictures?";



export class GenerativeAIModule {
    public async acceptPromptAndGenerateContent(prompt: string) {
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            return text;
        } catch (error) {
            return error;
        }
    }

    public async acceptPromptAndImagesAndGenerateContent(prompt: string, images: string[]) {
        try {
            const solution = await analyzeImagesWithGeminiProVision(images, prompt);
            return solution;
        } catch (error) {
            return error;
        }
    }
}