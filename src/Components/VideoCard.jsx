import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, addhistory } from '../Services/allApis';
import { toast } from 'react-toastify';

function VideoCard({ video, setdel, cat }) {

    const [show, setShow] = useState(false);


    const removeVideo = async (id) => {
        const result = await deleteVideo(id)
        console.log(result)
        if (result.status == 200) {
            toast.success("Video Deleted!!")
            setdel(result)

        }
        else {
            toast.error("Something went wrong!!")
        }
    }


    const handleClose = () => {
        setShow(false)
    };
    const handleShow = async () => {
        const dt = new Date()
        const data = { videoId: video.id, videoUrl: video.videoUrl, datetime: dt, caption: video.caption }
        const res = await addhistory(data)
        console.log(res)
        setShow(true)
    };

    const handleDrag = (ev, val) => {
        console.log("dragging..")
        console.log(val)
        ev.dataTransfer.setData('video', JSON.stringify(val))
    }
    return (
        <>

            <Card style={cat ? { width: '100%' } : { width: '18rem' }} className='rounded shadow border mb-5' draggable="true" onDragStart={(e) => { handleDrag(e, video) }}>
                <Card.Img variant="top" style={{ cursor: 'pointer' }} onClick={handleShow} src={video.image} height={'120px'} width={'80px'} />
                <Card.Body>
                    <Card.Title>{video.caption}</Card.Title>
                    {
                        !cat &&
                        <Button onClick={() => { removeVideo(video.id) }} variant='light'><i className="fa-solid fa-trash" style={{ color: "#ef0b0b", }} /></Button>

                    }
                </Card.Body>
            </Card>



            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{video.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="315" src={video.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    )
}

export default VideoCard