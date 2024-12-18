'use client';
import { useFormik } from 'formik';
import React from 'react';

const AddProduct = () => {

    const productForm = useFormik({
        initialValues: {
            productName: '',
            companyName: '',
            productID: '',
            price: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <div>
            {/* component */}
            <link
                href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                rel="stylesheet"
            />
            <div
                className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1532423622396-10a3f979251a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80)"
                }}
            >

                {/* form */}

                <form onSubmit={productForm.handleSubmit}>
                    {/* <div className="absolute bg-black opacity-60 inset-0 z-0" /> */}
                    <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                        <div className="grid  gap-8 grid-cols-1">
                            <div className="flex flex-col ">
                                <div className="flex flex-col sm:flex-row items-center">
                                    <h2 className="font-semibold text-lg mr-auto">Product Info</h2>
                                    <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
                                </div>
                                <div className="mt-5">
                                    <div className="form">

                                        <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                                            <div className="mb-3 space-y-2 w-full text-xs">
                                                <label className="font-semibold text-gray-600 py-2">
                                                    Product Name*
                                                </label>
                                                <input
                                                    placeholder="Product Name"
                                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                                    required="required"
                                                    type="text"
                                                    id="productName"
                                                    onChange={productForm.handleChange}
                                                    value={productForm.values.productName}
                                                />
                                                <p className="text-red text-xs hidden">
                                                    Please fill out this field.
                                                </p>
                                            </div>
                                            <div className="mb-3 space-y-2 w-full text-xs">
                                                <label className="font-semibold text-gray-600 py-2">
                                                    Company Name*
                                                </label>
                                                <input
                                                    placeholder="Company Name"
                                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                                    required="required"
                                                    type="text"
                                                    id="companyName"
                                                    onChange={productForm.handleChange}
                                                    value={productForm.values.companyName}
                                                />
                                                <p className="text-red text-xs hidden">
                                                    Please fill out this field.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-3 space-y-2 w-full text-xs">
                                            <label className=" font-semibold text-gray-600 py-2">
                                                Product ID*
                                            </label>
                                            <div className="flex flex-wrap items-stretch w-full mb-4 relative">

                                                <input
                                                    type="text"
                                                    id="productID"
                                                    onChange={productForm.handleChange}
                                                    value={productForm.values.productID}
                                                    required="required"
                                                    className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded-lg px-3 relative focus:border-blue focus:shadow" placeholder='Product ID'
                                                />
                                                <p className="text-red text-xs hidden">
                                                    Please fill out this field.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                            <div className="w-full flex flex-col mb-3">
                                                <label className="font-semibold text-gray-600 py-2">
                                                    Price
                                                </label>
                                                <input
                                                    placeholder="Price"
                                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                                    type="text"
                                                    id="price"
                                                    onChange={productForm.handleChange}
                                                    value={productForm.values.price}
                                                />
                                            </div>
                                            <div className="w-full flex flex-col mb-3">
                                                <label className="font-semibold text-gray-600 py-2">
                                                    Offer
                                                </label>
                                                <select
                                                    className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                                                    name="integration[city_id]"
                                                    id="integration_city_id"
                                                >
                                                    <option value="">No Offer</option>
                                                    <option value="">30%</option>
                                                    <option value="">50%</option>
                                                    <option value="">80%</option>
                                                </select>
                                                <p className="text-sm text-red-500 hidden mt-3" id="error">
                                                    Please fill out this field.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex-auto w-full mb-1 text-xs space-y-2">
                                            <label className="font-semibold text-gray-600 py-2">
                                                Description
                                            </label>
                                            <textarea
                                                required=""
                                                name="message"
                                                id=""
                                                className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                                                placeholder="Product Description"
                                                spellCheck="false"
                                                defaultValue={""}
                                            />
                                            <p className="text-xs text-gray-400 text-left my-3">
                                                You inserted 0 characters
                                            </p>
                                        </div>
                                        <p className="text-xs text-red-500 text-right my-3">
                                            Required fields are marked with an asterisk*
                                        </p>
                                        <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                                            <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                                                {" "}
                                                Cancel{" "}
                                            </button>
                                            <button
                                                type='submit'
                                                className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
