import Axios from 'axios';
import React, { useEffect ,useState } from 'react';
import  {Pie} from 'react-chartjs-2';


const Homepage =() => {
    const[chartData, setChartData] = useState({})
    
    const chart = () => {
        let vartitle=[];
        let varbudget=[];
        Axios.get("http://localhost:3001/budget").then(res=>
        {        
            for(const dataObj of res.data)
            {
                vartitle.push(dataObj.title)
                varbudget.push(dataObj.budget)
            }
            setChartData({
                labels: vartitle,
        
                datasets: [
                {
                    label: 'Rainfall',
                    backgroundColor: [
                        '#B21F00',
                        '#C9DE00',
                        'pink',
                        '#00A6B4',                    
                        '#6800B4',
                        'black',
                        '#00A6B4',
                    ],
                    hoverBackgroundColor: [
                        '#501800',
                        '#4B5000',
                        '#175000',
                        'yellow',
                        '#4B5000',
                        '#003350',
                        '#35014F'
                    ],
                    borderwidth: 4,
                    data: varbudget
                }
            ]
        
            })

        })
        .catch(err =>
            {
                console.log(err);
            });
       
       
    }

    useEffect(() =>
    {
chart()
    },[])

    return (
        <main className="center" id="main">

        <div className ="page-area"> 
    
        <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
    
            <article >
                    <h1>Alerts</h1>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
            </article>
    
    
            <article>
                    <h1>Results</h1>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they to live happier lives... since they expend without guilt or fear... 
                        because they know it is all good and accounted for.
                    </p>
            </article>
    
            <article>
                    <h1>Free</h1>
                    <p>
                        This app is free!!! And you are the only one holding your data!
                    </p>
            </article>
    
            <article >
                    <h1>Stay on track</h1>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
            </article>
    
            <article >
                    <h1>Alerts</h1>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
            </article>
    
            <article >
                    <h1>Results</h1>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they to live happier lives... since they expend without guilt or fear... 
                        because they know it is all good and accounted for.
                    </p>
          </article>
        
    
          <article>
                    <h1>Pie Chart</h1>
                    <div style={{height:"500px",width:"600px"}}>           
            <Pie data={chartData}/>
        </div>
          </article>
    
        
          </div>
    </main>
    
    )
    }

    
export default Homepage;

