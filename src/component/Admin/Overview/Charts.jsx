import axios from 'axios';
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { setHeaders, Url } from '../../../redux/api';

function Charts() {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    function compare(a, b) {
        if (a._id < b._id) {
            return 1;
        }
        if (a._id > b._id) {
            return -1;
        }
        return 0;
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.get(`${Url}/order/all-time-monthly-sales`, setHeaders());
                res.data.sort(compare);
                const Days = [
                    'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat',
                ];
                const formattedData = res.data.map((item) => {
                    return {
                        day: Days[item._id - 1],
                        amount: item.total,     
                    };
                });
                
                setSales(formattedData);
            } catch (err) {
                console.error("Error fetching yearly sales data:", err);
                setError("Failed to load chart data. Please try again later."); 
            } finally {
                setLoading(false); 
            }
        }
        fetchData();
    }, []); 

    return (
        <>
            {loading ? (
                <h5 style={{ textAlign: 'center', padding: '20px' }}>Loading Chart...</h5>
            ) : error ? (
                <h5 style={{ textAlign: 'center', padding: '20px', color: 'red' }}>{error}</h5>
            ) : (
                <>
                    <h3>Last Week Earnings (US $)</h3>
                    
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            data={sales} 
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line 
                                type="monotone" 
                                dataKey="amount" 
                                stroke="#8884d8" 
                                activeDot={{ r: 8 }} 
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </>
            )}
        </>
    );
}

export default Charts;