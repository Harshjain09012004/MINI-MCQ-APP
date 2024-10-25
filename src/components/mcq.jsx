import {React, useEffect, useState} from 'react';
import Result from './results';
import Header from './header';

function MCQ(){
    const [currAns, setcurrAns] = useState('');
    const [index,setindex] = useState(0);
    const [completed,setcompleted] = useState(false);
    const [quizEnd, setquizEnd] = useState(false);

    const data = [
        {"Ques":"Hello How are you ?",
        "Options":["Fine","Good","Not Fine","Fantastic"],"Ans":"Fantastic"
        },
        {
        "Ques": "What is your favorite color?",
        "Options": ["Red", "Blue", "Green", "Yellow"],
        "Ans": "Blue"
        },
        {
        "Ques": "Which mode of transport do you prefer?",
        "Options": ["Car", "Bicycle", "Train", "Walking"],
        "Ans": "Bicycle"
        },
        {
        "Ques": "Which is your preferred meal of the day?",
        "Options": ["Breakfast", "Lunch", "Dinner", "Snacks"],
        "Ans": "Dinner"
        },
        {
        "Ques": "What kind of movies do you enjoy?",
        "Options": ["Action", "Comedy", "Drama", "Horror"],
        "Ans": "Comedy"
        },
        {
        "Ques": "Which is your favorite season?",
        "Options": ["Spring", "Summer", "Autumn", "Winter"],
        "Ans": "Winter"
        },
        {
        "Ques": "Which type of weather do you like?",
        "Options": ["Sunny", "Rainy", "Snowy", "Windy"],
        "Ans": "Rainy"
        }
    ]
    const [userAns, setuserAns] = useState(Array(data.length).fill(""));
    const [finalAns, setfinalAns] = useState(Array(data.length).fill(""));

    useEffect(()=>{
        setcurrAns(userAns[index]);
    },[index]);

    return(
        <div>
            <Header/>
            {completed && <Result userAns={userAns} data={data}/>}
            {!completed && (
                <div className='w-full h-full flex justify-center place-items-center mt-20'>
                    <div className='flex flex-col gap-7 bg-violet-200 p-7 rounded-3xl relative'>
                        <div className='QnA flex flex-col justify-between bg-white text-black p-10 min-w-[700px] min-h-[320px] rounded-3xl border shadow-md shadow-gray-400'>
                            <div className='Question text-2xl font-semibold flex'>{`Ques ${index+1} : ${data[index].Ques}`}</div>

                            <div className='Options flex flex-col gap-5 '>
                                <label className='flex gap-5 cursor-pointer' onClick={()=>{
                                    setcurrAns(data[index].Options[0]);
                                    userAns[index] = data[index].Options[0];
                                }}>
                                    <input className={`checked:${finalAns[index]==userAns[index] ? 'bg-green-500' : 'bg-purple-700'}`} type='radio' checked={
                                        (currAns == data[index].Options[0]) ? true : false
                                        }
                                    />
                                    <p>{data[index].Options[0]}</p>
                                </label>

                                <label className='flex gap-5 cursor-pointer' onClick={()=>{
                                    setcurrAns(data[index].Options[1]);
                                    userAns[index] = data[index].Options[1];
                                }}>
                                    <input className=' checked:bg-purple-700'  type='radio' checked={
                                        (currAns == data[index].Options[1]) ? true : false
                                        }
                                    />
                                    <p>{data[index].Options[1]}</p>
                                </label>

                                <label className='flex gap-5 cursor-pointer' onClick={()=>{
                                    setcurrAns(data[index].Options[2]);
                                    userAns[index] = data[index].Options[2];
                                }}>
                                    <input className='checked:bg-purple-700'  type='radio' checked={
                                        (currAns == data[index].Options[2]) ? true : false
                                        }
                                    />
                                    <p>{data[index].Options[2]}</p>
                                </label>

                                <label className='flex gap-5 cursor-pointer' onClick={()=>{
                                    setcurrAns(data[index].Options[3]);
                                    userAns[index] = data[index].Options[3];
                                }}>
                                    <input className=' checked:bg-purple-700'  type='radio' checked={
                                        (currAns == data[index].Options[3]) ? true : false
                                        }
                                    />
                                    <p>{data[index].Options[3]}</p>
                                </label>
                            </div>
                        </div>

                        <div className='Buttons flex justify-between m-1'>

                            <div className='Navigate flex gap-8'>
                                <div className='p-3 px-5 bg-purple-500 rounded-2xl font-semibold border border-gray-400 active:scale-105 transition-all cursor-pointer shadow-md shadow-gray-400' onClick={()=>{
                                if(index-1>=0) setindex(index-1);
                                }}>Previous</div>

                                <div className='p-3 px-9 bg-purple-500 rounded-2xl font-semibold border border-gray-400 active:scale-105 transition-all cursor-pointer shadow-md shadow-gray-400' onClick={()=>{
                                    if(index+1<data.length) setindex(index+1);
                                    else setquizEnd(true);
                                }}>Next</div>
                            </div>
                            
                            <div className='SaveQuit flex gap-8'>
                                <div className='p-3 px-5 bg-green-500 rounded-2xl font-semibold border border-gray-400 active:scale-105 transition-all cursor-pointer shadow-md shadow-gray-400' onClick={()=>{
                                    finalAns[index] = currAns; 
                                    if(index+1<data.length) setindex(index+1);
                                    else setquizEnd(true);
                                }}>Save & Next</div>

                                <div className='p-3 px-9 bg-green-500 rounded-2xl font-semibold border border-gray-400 active:scale-105 transition-all cursor-pointer shadow-md shadow-gray-400' onClick={()=>{
                                    setquizEnd(true);
                                }}>Quit</div>
                            </div>

                        </div>

                        {quizEnd && (
                            <div className='absolute w-[35%] h-[30%] bg-white border border-gray-300 top-[30%] left-[32%] rounded-2xl shadow-md shadow-slate-300 text-black flex flex-col justify-around place-items-center transition-all'>
                                <p className='text-md w-[80%] text-center'>You have reached the end of quiz !</p>
                                <div className='flex justify-around gap-10'>
                                    <div className='bg-green-500  p-2 px-3 rounded-lg text-white transition-all active:scale-105 cursor-pointer' onClick={()=>{
                                        setcompleted(true);
                                    }}>Submit</div>
                                    <div className='bg-indigo-400  p-2 px-3 rounded-lg transition-all active:scale-105 cursor-pointer' onClick={()=>{
                                        setquizEnd(false);
                                    }}>Cancel</div>
                                </div>
                            </div>
                        )}
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default MCQ;