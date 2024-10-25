import {React, useEffect, useState} from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function Result({userAns,data}){
    const [correctAns,setcorrectAns] = useState(0);
    const [attemptedAns,setattemptedAns] = useState(0); 
    const [doughnutChartData, setdoughnutChartData] = useState({
    labels: [
      'Attempted',
      'Unattempted',
      'Correct',
      'Incorrect',
    ],
    datasets: [{
      label: 'Review Chart',
      data: [300, 50, 100,10],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 80, 86)'
      ],
      hoverOffset: 18
    }]
    });
    const [show,setshow] = useState(false);
    const { width, height } = useWindowSize()

    function QuesAttempted(){
        let attempted = 0, correct = 0;
        for(let i = 0;i<userAns.length;i++){
            if(userAns[i]) attempted++;
            if(userAns[i].toLowerCase() == data[i].Ans.toLowerCase()) correct++;
        }

        setcorrectAns(correct); setattemptedAns(attempted);
        setdoughnutChartData({
            labels: [
            'Attempted',
            'Unattempted',
            'Correct',
            'Incorrect',
            ],
            datasets: [{
            label: 'Review Chart',
            data: [attempted,data.length-attempted,correct,attempted-correct],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(120, 130, 186)'
            ],
            hoverOffset: 18
            }]
        })
    }

    useEffect(()=>{
        QuesAttempted();
    },[])

    return (
        <div className='w-[99%] h-[90vh] justify-center place-items-center flex flex-col gap-3 z-10 mt-30 bg-white'>
            {!show && (
                <div className='flex gap-8 place-items-center bg-white p-10 rounded-3xl px-20 text-black border border-blue-300 cursor-pointer transition-all shadow-md shadow-gray-400' onClick={()=>{
                    setshow(true);
                }}>
                    <div className='flex flex-col gap-5 justify-center place-items-center'>
                        <div className='text-2xl font-semibold'>Hey, You have completed the quiz 🎯</div>
                        <div className='text-2xl font-semibold'>Check your score now 🚀</div>
                    </div>
                    <div className='text-5xl'>→</div>
                    <Confetti
                    width={width}
                    height={height}
                    />
                </div>
            )}

            {show && (
                <div className='result w-[50%] bg-white text-2xl font-semibold rounded-3xl px-22 py-8 border border-gray-400  shadow-md shadow-blue-400 flex flex-col gap-10 justify-center place-items-center'>
                    <div className='flex place-items-center gap-24'>
                        <div className='flex flex-col gap-10'>
                            <p className=' text-stone-400'>Total Questions {data.length}</p>
                            <p className='text-blue-400'>Attempted {attemptedAns}</p>
                        </div>

                        <div className='flex flex-col gap-10'>
                            <p className=' text-green-400'>Correct {correctAns}</p>
                            <p className=' text-red-300'>Incorrect {attemptedAns - correctAns}</p>
                        </div>
                        <div className='h-40 w-40 border border-blue-300 rounded-full text-pink-400 flex place-items-center justify-center shadow-md shadow-purple-400'> Score {correctAns*10} / {data.length*10}</div>
                    </div>

                    <div className='w-[45%]'>
                        <Doughnut data={doughnutChartData}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Result;
