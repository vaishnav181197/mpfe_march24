import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory } from '../Services/allApis';
import CategoryList from './CategoryList';

function Category() {
  const [show, setShow] = useState(false);
  const [addRes,setAddRes]=useState("")
  const [category,setCategory]=useState({
    catId:"",catName:"",catVideos:[]
  })

  const submitForm=async()=>{
    const {catId,catName}=category
    if(!catId || !catName){
      toast.info("Invalid inputs!!")
    }
    else{
      const res=await addCategory(category)
      if(res.status==201){
        toast.success("Category Added!!")
        handleClose()
        setCategory({
          catId:"",catName:"",catVideos:[]
        })
        setAddRes(res)
      }
      else{
        toast.error("Category Addition Failed!!")
        console.log(res)
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-grid'>
        <button onClick={handleShow} className='btn btn-success'>Add Category</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
          <div>
            <FloatingLabel controlId="floatingID" label=" Category ID" className="mb-3">
              <Form.Control type="text" placeholder="1" onChange={(e)=>{setCategory({...category,catId:e.target.value})}}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingCat" label="Category Name">
              <Form.Control type="text" placeholder="'Music'" onChange={(e)=>{setCategory({...category,catName:e.target.value})}}/>
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={submitForm}>Save</Button>
        </Modal.Footer>
      </Modal>

      <CategoryList addres={addRes}/>
    </>
  )
}

export default Category