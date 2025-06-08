import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
const data = useLoaderData();

//  const [data, setData]=useState([]);
//  useEffect(()=>{
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then(response => response.json())
//     .then(data => {setData(data)})
//  }, [])


  return (
    <div className='flex justify-center flex-col text-5xl text-white items-center w-full h-44 mt-20 bg-orange-400'>
      <div className='font-bold text-center pt-5'>Github : {data.followers}</div>
      <img src={data.avatar_url} width={100} />
    </div>
  )
}

export default Github

export const gitInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  return response.json();
}
