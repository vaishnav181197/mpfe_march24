import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addVideo } from '../Services/allApis';

function AddVideo({setadd}) {
  const [show, setShow] = useState(false);
  const [video,setVideo]=useState({
    videoId:"",caption:"",image:"",videoUrl:""
  })

  const submitForm=async()=>{
    const {videoId,caption,image,videoUrl}=video
    if(!videoId||!caption||!image||!videoUrl){
      toast.info("Enter Invalid inputs!!")
    }
    else{
      //changing watch url to embed url
      const code=videoUrl.split("v=")[1]
      const embedUrl=`https://www.youtube.com/embed/${code}?si=-suqNbNQcr_NbEwG&autoplay=1`
      video.videoUrl=embedUrl

      const result=await addVideo(video)
      console.log(result)
      if(result.status===201){
        setadd(result)
        handleClose()
        setVideo({videoId:'',caption:'',image:'',videoUrl:""})
        toast.success("Video Uploaded Successfully!!")
      }
      else{
        console.log(result)
        toast.error("Video Uploading Failed!")
      }
    }
  }
  // console.log(video)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className='btn' onClick={handleShow}>
        <i className="fa-regular fa-square-plus fa-xl" style={{ color: "#63E6BE", }} />
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-secondary'>
          <div>

            <FloatingLabel controlId="floatingId" label="Video ID" className="mb-3">
              <Form.Control type="text" onChange={(e)=>{setVideo({...video,videoId:e.target.value})}} placeholder="1" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingCaption" label="Caption" className="mb-3">
              <Form.Control type="text" onChange={(e)=>{setVideo({...video,caption:e.target.value})}} placeholder="caption" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingImage" label="Video Image URL" className="mb-3">
              <Form.Control type="text" onChange={(e)=>{setVideo({...video,image:e.target.value})}} placeholder="imageurl" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingVideo" label="Youtube Video URL" className="mb-3">
              <Form.Control type="text" onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}} placeholder="videourl" />
            </FloatingLabel>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={submitForm}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddVideo