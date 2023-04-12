import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

export default function JobDetail(){
    const jobInfo = useLoaderData();
    console.log(jobInfo);
    return(
        <div>
            <p>Details</p>
        </div>
    )
}

// const JobDetail = () => {

//     const jobInfo = useLoaderData();
//     console.log(jobInfo);
    
    // const jobDetails = useLoaderData();
    // console.log(jobDetails);

    // const { jobId } = useParams();

    // const [jobDetail, setJobDetail] = useState({});

    // useEffect(() => {
    //     const job = jobDetails.find((job) => job.id == jobId);
    //     setJobDetail(job);
    // } , [jobDetails, jobId])

    // if(jobDetail){
    //     return <div>Loading...</div>
    // }

    
    // const { Id } = useParams();
    // const [data, setData] = useState([]);
    // const jobs = useLoaderData();

    // useEffect(() => {
    //     if(jobs){
    //         let match=jobs.find(job => job.Id==Id);
    //         setData(match);
    //     }
    // }, [match]);

//     return (
//         <div>
//             <h1>Hello</h1>
//         </div>
//     );
// };

// export default JobDetail;