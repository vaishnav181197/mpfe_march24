import React, { useState, useEffect } from 'react'
import { getCategories, deleteCategory, getSpecificCategory, updateCategory } from '../Services/allApis'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'

function CategoryList({ addres }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getData()
    }, [addres])

    const getData = async () => {
        const cat = await getCategories()
        setCategories(cat.data)
    }

    const deleteCat = async (id) => {
        const res = await deleteCategory(id)
        console.log(res)
        if (res.status == 200) {
            toast.success("Category Removed!!")
            getData()
        }
        else {
            toast.error("Something went wrong!!")
        }
    }

    const DragOver = (ev) => {
        ev.preventDefault()
        console.log("dragging over")
    }

    const handleDrop = async (ev, val) => {
        ev.preventDefault()
        console.log("dropping..")
        const catId = val
        const data = JSON.parse(ev.dataTransfer.getData("video"))
        console.log(data)
        const res = await getSpecificCategory(catId)
        const category = res.data
        category.catVideos.push(data)
        console.log(category)
        const resp = await updateCategory(catId, category)
        console.log(resp)
        if (resp.status == 200) {
            toast.success("Video Added to Category")
            getData()
        }
        else {
            toast.warning("Video Adding to Category Failed!!!!")
        }

    }

    return (
        <>
            <div className='w-100 border p-2 shadow bg-secondary'>
                {
                    categories.length > 0 ?
                        <div>
                            {categories.map(item => (
                                <div className='border bg-light border-3 shadow p-3  mb-5' onDragOver={(e) => { DragOver(e) }} onDrop={(e) => { handleDrop(e, item.id) }}>
                                    <div className='d-flex justify-content-between'>
                                        <h4>{item.catName}</h4>
                                        <button className='btn' onClick={() => { deleteCat(item.id) }}>
                                            <i className="fa-solid fa-trash" style={{ color: "#ef0b0b", }} />
                                        </button>
                                    </div>
                                    {
                                        item.catVideos.length > 0 &&
                                        <div className='mt-3 p-2 border shadow'>
                                            {
                                                item.catVideos.map((vid)=>(
                                                    <VideoCard video={vid} cat={true}/>
                                                ))
                                            }
                                        </div>
                                    }

                                </div>
                            ))}

                        </div>
                        :
                        <div>
                            <h5>No Categories Available!!</h5>
                        </div>

                }

            </div>
        </>
    )
}

export default CategoryList