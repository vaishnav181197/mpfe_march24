import React from 'react'
import VideoCard from './VideoCard'
import { getVideos } from '../Services/allApis'
import { useEffect, useState } from 'react'

function Videolist({addres}) {

  const [videoData, setVideoData] = useState([])
  const [deleteResponse,setDeleteResponse]=useState("")

  useEffect(() => {
    getData()
  }, [addres,deleteResponse])

  const getData = async () => {
    const videos = await getVideos()
    console.log(videos.data)
    setVideoData(videos.data)
  }

  return (
    <>
      {
        videoData.length > 0 ?
          <div className='p-5 bg-primary rounded shadow border border-3 border-dark row justify-content-between align-content-between'>
            {videoData.map((item) => (
              <VideoCard video={item} setdel={setDeleteResponse} />
            ))}
          </div>
          :
          <h3 className='text-danger '>No Videos Available!!</h3>
      }

    </>
  )
}

export default Videolist