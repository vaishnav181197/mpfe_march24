import React, { useState, useEffect } from 'react'
import { getHistory,deleteHistory } from '../Services/allApis'

function History() {
  const [his, setHis] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await getHistory()
    setHis(res.data)
  }

  const removeHistory=async(id)=>{
    const res=await deleteHistory(id)
    console.log(res)
    getData()
  }

  return (
    <>
      <div className='p-5'>
        <h3 className='text-info my-3'>Watch History</h3>
        {
          his.length > 0 ?
            <table className="table table-bordered table-dark border border-3 shadow">
              <thead>
                <tr>
                  <th>Video ID</th>
                  <th>Caption</th>
                  <th>Video URL</th>
                  <th>Date and Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {his.map((item) => (
                  <tr>
                    <td>{item.videoId}</td>
                    <td>{item.caption}</td>
                    <td>{item.videoUrl}</td>
                    <td>{item.datetime}</td>
                    <td>
                      <button className='btn' onClick={()=>{removeHistory(item.id)}}>
                        <i className="fa-solid fa-trash" style={{ color: "#ec092b", }} />
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
            :
            <h3>No History Available</h3>
        }

      </div>
    </>
  )
}

export default History