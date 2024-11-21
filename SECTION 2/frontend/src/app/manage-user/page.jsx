'use client';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ManageUser = () => {


    const [userList, setuserList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        const res = await axios.get('http://localhost:5000/user/getall');
        console.log(res.data);
        setuserList(res.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const deleteUser = async (id) => {

        if(!confirm('Are you sure you want to delete this user?')) return;

        const res = await axios.delete(`http://localhost:5000/user/delete/${id}`);
        if (res.status === 200) {
            fetchUsers();
            toast.success('User removed Successfully');
        } else {
            toast.error('Failed to remove the User')
        }
    }

    return (
        <div className='h-screen bg-gray-200'>

            <h1 className='text-center font-bold text-3xl'>
                Manage Users
            </h1>

            <div className='container mx-auto'>
                {
                    loading ? <p className='text-center text-gray-500 text-2xl font-bold'>Loading... Please Wait</p> : (
                        <table className='w-full my-10'>
                            <thead className='border border-slate-800 text-white bg-slate-800'>
                                <tr>
                                    <th className='p-2'>ID</th>
                                    <th className='p-2'>Name</th>
                                    <th className='p-2'>Email</th>
                                    <th className='p-2'>City</th>
                                    <th className='p-2'>Registered At</th>
                                    <th className='p-2 border border-slate-800' colSpan={2}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userList.map((user) => {
                                        return (
                                            <tr key={user._id}>
                                                <td className='text-center'>{user._id}</td>
                                                <td className='text-center'>{user.name}</td>
                                                <td className='text-center'>{user.email}</td>
                                                <td className='text-center'>{user.city}</td>
                                                <td className='text-center'>{user.createdAt}</td>
                                                <td className='p-2 border border-gray-300 text-center'>
                                                    <button
                                                        onClick={() => { deleteUser(user._id) }}
                                                        className='bg-red-500 text-white px-2 py-1 rounded-full'>
                                                        <IconTrash />
                                                    </button>
                                                </td>
                                                <td className='p-2 border border-gray-300 text-center'>
                                                    <Link href={'/updateuser/' + user._id}
                                                        className='bg-slate-500 text-white px-2 py-1 rounded-full block w-fit'>
                                                        <IconPencil />
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }

            </div>


        </div>
    )
}

export default ManageUser;
