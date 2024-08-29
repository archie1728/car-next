"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from 'next/link';

export default function Home() {
    const { register, handleSubmit } = useForm();
    const [vat, setVat] = React.useState(0);
    const rate = 0.07;

    const handleForm = (data) => {
        const v = Math.round(data.price * rate * 100) / 100; // Use the constant rate for calculation
        setVat(v);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-black">
            <h1 className="text-2xl font-bold mb-6 text-white">VAT Calculator</h1>
            <form onSubmit={handleSubmit(handleForm)} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <table className="w-full border-collapse">
                    <tbody>
                        <tr>
                            <td className="p-2"><label className="font-semibold text-white">Price:</label></td>
                            <td className="p-2">
                                <input
                                    type="number"
                                    {...register("price", { valueAsNumber: true })}
                                    className="p-2 border border-gray-600 rounded text-white bg-gray-700"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2"><label className="font-semibold text-white">VAT Rate:</label></td>
                            <td className="p-2">
                                <input
                                    type="number"
                                    value={rate}
                                    readOnly
                                    {...register("rate", { valueAsNumber: true })}
                                    className="p-2 border border-gray-600 rounded bg-gray-700 text-white"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="p-2 text-center">
                                <input
                                    type="submit"
                                    value="Calculate"
                                    className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2"><label className="font-semibold text-white">VAT:</label></td>
                            <td className="p-2">
                                <input
                                    type="text"
                                    value={vat}
                                    className="p-2 border border-gray-600 rounded bg-gray-700 text-white"
                                    readOnly
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div className="mt-6 space-x-4">
                <Link href="/about">
                    <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition">
                        Go to About Page
                    </button>
                </Link>
                <Link href="/">
                    <button className="px-4 py-2 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 transition">
                        Go to Home Page
                    </button>
                </Link>
            </div>
        </main>
    );
}



// "use client";
// import { useState } from 'react';
// import Link from 'next/link';

// export default function VATPage() {
//   const [amount, setAmount] = useState('');

//   const calculateVAT = () => {
//     const vat = (parseFloat(amount) * 0.07).toFixed(2);
//     alert(`VAT: ${vat}`);
//   };

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center space-y-4 p-6 bg-gray-50">
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <input
//           type="number"
//           placeholder="Enter amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="p-2 border border-gray-300 rounded mb-4 text-gray-800 bg-gray-100"
//         />
//         <button
//           onClick={calculateVAT}
//           className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
//         >
//           Calculate VAT
//         </button>
//       </div>
//       <div className="space-x-4">
//         <Link href="/about">
//           <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition">
//             Go to About Page
//           </button>
//         </Link>
//         <Link href="/">
//           <button className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition">
//             Go to Home Page
//           </button>
//         </Link>
//       </div>
//     </main>
//   );
// }

// "use client"
// import React from "react";
// import { useForm } from "react-hook-form";

// export default function Home() {
//     const { register, handleSubmit } = useForm();
//     const [vat, setVat] = React.useState(0);
//     // const rate = process.env.NEXT_PUBLIC_VAT_RATE
//     const rate = 0.07
//     // console.debug(process.env)
//     const handleForm = (data) => {
//         console.debug(data)
//         const v = Math.round(data.price * data.rate * 100) / 100
//         setVat(v)
//     }
//     return (
//         <div>
//             <h1>VAT Calcuator</h1>
//             <form onSubmit={handleSubmit(handleForm)}>
//                 <table>
//                     <tbody>
//                         <tr>
//                             <td><label>Price:</label></td>
//                             <td><input type="number" name="price" 
//                             {...register("price",{valueAsNumber:true})}/></td>
//                         </tr>
//                         <tr>
//                             <td><label>VAT Rate:</label></td>
//                             <td><input type="number" name="rate" value={rate} readOnly
//                             {...register("rate",{valueAsNumber:true})}/></td>
//                         </tr>
//                         <tr>
//                             <td colSpan="2">
//                                 <input type="submit" value="Calculate"
//                              /></td>
//                         </tr>
//                         <tr>
//                             <td><label>VAT:</label></td>
//                             <td><input type="text" name="vat" value={vat}/></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </form>
//         </div>
//     );
// }