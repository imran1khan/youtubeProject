import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
          
cloudinary.config({ 
  cloud_name: 'dmvavlnf6', 
  api_key: '679715247146956', 
  api_secret: 'whC85UCJ5cCp9ZWy8YZ47Tom_hQ' 
});

export const uploadOnCloudinery = async (localFilePath:string)=>{
    try {
        if (!localFilePath)return null;
        const result = await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto',
        });
        fs.unlinkSync(localFilePath);
        return result;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
}