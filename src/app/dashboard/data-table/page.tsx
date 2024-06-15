import { payments } from '@/data/payments.data'
import React from 'react'
import { DataTable } from './data-table';
import { columns } from './colums';
const fetchData= async ()=>{
  return payments;
}

const Page = async () => {
  const data = await fetchData();
  return (
    <div>
      {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default Page