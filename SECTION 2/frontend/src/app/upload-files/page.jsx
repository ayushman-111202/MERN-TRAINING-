'use client'
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';


const UploadFiles = () => {

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();

        formData.append('file', file);
        formData.append('upload_preset', 'mernpreset');
        formData.append('cloud_name', 'dqhmkuc7f');

        const res = await axios.post('https://api.cloudinary.com/v1_1/dqhmkuc7f/image/upload', formData);

        if (res.status === 200) {
            console.log(res.data);
            toast.success('Image uploaded successfully');
        }
    }

    return (
        <div>
            <label htmlFor="image-input" className='w-1/2 block m-auto bg-gray-200 text-center border border-2 border-dashed border-gray-700 p-5'>Upload Image</label>
            <input id='image-input' className='hidden' type="file" onChange={uploadImage} />
        </div>
    )
}

export default UploadFiles
