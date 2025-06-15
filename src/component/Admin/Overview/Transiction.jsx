import axios from "axios";
import { useEffect, useState } from "react";
import { setHeaders, Url } from "../../../redux/api";
import moment from "moment/moment";


function Transictions(){
    const [orders , setOrders] = useState([])
    const [loading , setLoading] = useState(false);

    useEffect(()=>{
        async function fetchData(){
            setLoading(true)
            try{
                const res = await axios.get(`${Url}/order/?new=true`, setHeaders());
                setOrders(res.data)
                setLoading(false)
               }catch(err){
                console.log(err)
                setLoading(false)
               }
        }
        fetchData();
    },[])

    return (
        <>
            {loading ? 
                (
                    <div className='latest_orders rounded mt-3'>
                        <h5>Loading Transactions....</h5>
                    </div>
                ) : 
                (
                    <>
                        <div className='latest_orders rounded mt-3'>
                            <h5>Latest Transactions</h5>
                            {
                                orders.map((item)=>{
                                    return (
                                        <span key={item._id} id={item._id} className='member d-flex justify-content-between align-items-center rounded'>
                                            <span>{item.shipping.name}</span>
                                            <span>{item.total}</span>
                                            <span>{moment(item.createdAt).fromNow()}</span>
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }
            
        </>
    );
}
export default Transictions