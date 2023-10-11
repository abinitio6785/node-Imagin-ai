import {surpriseMePrompts} from './constant'
import FileSaver from 'file-saver'
export const getRandomPrompt =(prompt)=>{
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex];
    if (randomPrompt === prompt){
        getRandomPrompt(prompt);
    }
    return randomPrompt;
}

export const downloadImage = async(_id,image)=>{
FileSaver.saveAs(image, `download-${_id}.jpg`);
}
