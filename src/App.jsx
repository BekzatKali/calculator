import React from "react";
import "./App.css";

export default function Calculator() {
    const operators = ["AC", "/", "*", "+", "-", "="];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [input, setInput] = React.useState("0")
    const [output, setOutput] = React.useState("")
    const [calculatorData, setCalculatorData] = React.useState("")

    const handleSubmit = () => {
      const total = eval(calculatorData);
      setInput(`${total}`);
      setOutput(`${total} = ${total}`)
      setCalculatorData(`${total}`)
    }
    


    

    const handleNumbers = (value) => {
      if (!calculatorData.length) {
        setInput(`${value}`)
        setCalculatorData(`${value}`)
      } else {
        if (value === 0 && calculatorData === "0") {
          setCalculatorData("0")  
        } else if (value !== 0 && calculatorData === "0") {
          setCalculatorData(`${value}`)
          setInput(`${value}`)
        } else {
          const lastChat = calculatorData.charAt(calculatorData.length - 1);
          const isLastChatOperator = operators.includes(lastChat)
          setInput(isLastChatOperator ? `${value}` : `${input}${value}`)
          setCalculatorData(`${calculatorData}${value}`)
        }
      }
    }

    




    const handleDotOperator = () => {
      if (!calculatorData.length) {
        setInput("0.")
        setCalculatorData("0.")
      } else {
        const lastChat = calculatorData.charAt(calculatorData.length - 1);
        const isLastChatOperator = operators.includes(lastChat)

        if (isLastChatOperator) {
          setInput("0.")
          setCalculatorData(`${calculatorData} 0.`)
        } else {
          setInput(input.includes(".") ? `${input}` : `${input}.`)
          setCalculatorData(input.includes(".") ? `${calculatorData}` : `${calculatorData}.`)
        }
      }
    }
    
    const handleOperators = (value) => {
      const lastChat = calculatorData.charAt(calculatorData.length - 1);
      const isLastChatOperator = operators.includes(lastChat);
      const beforeLastChat = calculatorData.charAt(calculatorData.length - 2);
      const isBeforeLastChatOperator = operators.includes(beforeLastChat);

      if (calculatorData.length) {
        setInput(`${value}`);
        if ((isLastChatOperator && value !== "-") || isLastChatOperator && isBeforeLastChatOperator) {
          if (isBeforeLastChatOperator) {
            const updatedValue = calculatorData.substring(0, calculatorData.length - 2);
            setCalculatorData(`${updatedValue}${value}`);
          } else {
            const updatedValue = calculatorData.substring(0, calculatorData.length - 1);
            setCalculatorData(`${updatedValue}${value}`);
          }
        } else {
          setCalculatorData(`${calculatorData}${value}`) // here
        }
      } 
    }

    const handleClear = () => {
      setInput("0")
      setCalculatorData("")
    }

    const handleInput = (value) => {
      const operator = operators.find((op) => op === value)
      const number = numbers.find((num) => num === value)

      switch(value) {
        case "=":
          handleSubmit()
          break;
        case number:
          handleNumbers(value);
          break;
        case ".":
          handleDotOperator()
          break;
        case "AC":
          handleClear()
          break;
        case operator:
          handleOperators(value)
          break;
      }
    }

    React.useEffect(() => {
      setOutput(calculatorData)
    }, [calculatorData])
    


    return (
        <div className="App">
            <div className="wrapper">
              <div id="output">{output}</div>
              <div id="display">{input}</div>
            </div>
            <div className="calculator">
                <div onClick={() => handleInput("=")} id="equals">=</div>
                <div onClick={() => handleInput(0)} id="zero">0</div>
                <div onClick={() => handleInput(1)} id="one">1</div>
                <div onClick={() => handleInput(2)} id="two">2</div>
                <div onClick={() => handleInput(3)} id="three">3</div>
                <div onClick={() => handleInput(4)} id="four">4</div>
                <div onClick={() => handleInput(5)} id="five">5</div>
                <div onClick={() => handleInput(6)} id="six">6</div>
                <div onClick={() => handleInput(7)} id="seven">7</div>
                <div onClick={() => handleInput(8)} id="eight">8</div>
                <div onClick={() => handleInput(9)} id="nine">9</div>
                <div onClick={() => handleInput("+")} id="add">+</div>
                <div onClick={() => handleInput("-")} id="subtract">-</div>
                <div onClick={() => handleInput("*")} id="multiply">*</div>
                <div onClick={() => handleInput("/")} id="divide">/</div>
                <div onClick={() => handleInput(".")} id="decimal">.</div>
                <div onClick={() => handleInput("AC")} id="clear">AC</div>
            </div>
            <div className="creator">By Bekzat Kali</div>
        </div>
    )
}


// import React from "react";
// import "./App.css";

// export default function Calculator() {
//     const operators = ["AC", "/", "*", "+", "-", "="];
//     const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//     const [input, setInput] = React.useState("0")
//     const [output, setOutput] = React.useState("")
//     const [calculatorData, setCalculatorData] = React.useState("")

//     const handleSubmit = () => {
//       const total = eval(calculatorData);
//       setInput(`${total}`);
//       setOutput(`${total} = ${total}`)
//       setCalculatorData(`${total}`)
//     }
    
//     const handleNumbers = (value) => {
//       if (!calculatorData.length) {
//         setInput(`${value}`)
//         setCalculatorData(`${value}`)
//       } else {
//         if (value === 0 && calculatorData === "0") {
//           setCalculatorData("0")
//         } else {
//           const lastChat = calculatorData.charAt(calculatorData.length - 1);
//           const isLastChatOperator = operators.includes(lastChat)
//           setInput(isLastChatOperator ? `${value}` : `${input}${value}`)
//           setCalculatorData(`${calculatorData}${value}`)
//         }
//       }
//     }

//     const handleDotOperator = () => {
//       if (!calculatorData.length) {
//         setInput("0.")
//         setCalculatorData("0.")
//       } else {
//         const lastChat = calculatorData.charAt(calculatorData.length - 1);
//         const isLastChatOperator = operators.includes(lastChat)

//         if (isLastChatOperator) {
//           setInput("0.")
//           setCalculatorData(`${calculatorData} 0.`)
//         } else {
//           setInput(input.includes(".") ? `${input}` : `${input}.`)
//           setCalculatorData(input.includes(".") ? `${calculatorData}` : `${calculatorData}.`)
//         }
//       }
//     }
    
//     const handleOperators = (value) => {
//       const lastChat = calculatorData.charAt(calculatorData.length - 1);
//       const isLastChatOperator = operators.includes(lastChat);
//       const beforeLastChat = calculatorData.charAt(calculatorData.length - 2);
//       const isBeforeLastChatOperator = operators.includes(beforeLastChat);

//       if (calculatorData.length) {
//         setInput(`${value}`);
//         if ((isLastChatOperator && value !== "-") || isLastChatOperator && isBeforeLastChatOperator) {
//           if (isBeforeLastChatOperator) {
//             const updatedValue = calculatorData.substring(0, calculatorData.length - 2);
//             setCalculatorData(`${updatedValue}${value}`);
//           } else {
//             const updatedValue = calculatorData.substring(0, calculatorData.length - 1);
//             setCalculatorData(`${updatedValue}${value}`);
//           }
//         } else {
//           setCalculatorData(`${calculatorData}${value}`) // here
//         }
//       } 
//     }

//     const handleClear = () => {
//       setInput("0")
//       setCalculatorData("")
//     }

//     const handleInput = (value) => {
//       const operator = operators.find((op) => op === value)
//       const number = numbers.find((num) => num === value)

//       switch(value) {
//         case "=":
//           handleSubmit()
//           break;
//         case number:
//           handleNumbers(value);
//           break;
//         case ".":
//           handleDotOperator()
//           break;
//         case "AC":
//           handleClear()
//           break;
//         case operator:
//           handleOperators(value)
//           break;
//       }
//     }

//     React.useEffect(() => {
//       setOutput(calculatorData)
//     }, [calculatorData])
    


//     return (
//         <div className="App">
//             <div className="wrapper">
//               <div id="output">{output}</div>
//               <div id="display">{input}</div>
//             </div>
//             <div className="calculator">
//                 <div onClick={() => handleInput("=")} id="equals">=</div>
//                 <div onClick={() => handleInput(0)} id="zero">0</div>
//                 <div onClick={() => handleInput(1)} id="one">1</div>
//                 <div onClick={() => handleInput(2)} id="two">2</div>
//                 <div onClick={() => handleInput(3)} id="three">3</div>
//                 <div onClick={() => handleInput(4)} id="four">4</div>
//                 <div onClick={() => handleInput(5)} id="five">5</div>
//                 <div onClick={() => handleInput(6)} id="six">6</div>
//                 <div onClick={() => handleInput(7)} id="seven">7</div>
//                 <div onClick={() => handleInput(8)} id="eight">8</div>
//                 <div onClick={() => handleInput(9)} id="nine">9</div>
//                 <div onClick={() => handleInput("+")} id="add">+</div>
//                 <div onClick={() => handleInput("-")} id="subtract">-</div>
//                 <div onClick={() => handleInput("*")} id="multiply">*</div>
//                 <div onClick={() => handleInput("/")} id="divide">/</div>
//                 <div onClick={() => handleInput(".")} id="decimal">.</div>
//                 <div onClick={() => handleInput("AC")} id="clear">AC</div>
//             </div>
//             <div className="creator">By Bekzat Kali</div>
//         </div>
//     )
// }


